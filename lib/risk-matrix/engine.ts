import { AnalysisInput, AnalysisResult, HealthDomain, Interaction, Severity, SubstanceProfile } from './types';
import { PROFILES, normalise } from './substances';
import { getPairInteraction, detectStackingInteractions, WEIGHT } from './interactions';

// ─── Helpers ────────────────────────────────────────────────────────────────

function dedupe<T>(arr: T[]): T[] {
  return [...new Set(arr)];
}

function highestSeverity(severities: Severity[]): Severity {
  if (!severities.length) return 'low';
  return severities.reduce((acc, s) =>
    WEIGHT[s] > WEIGHT[acc] ? s : acc
  );
}

const CONTEXT_RULES: Record<HealthDomain, {
  severity: Severity;
  relevant: (profile: SubstanceProfile) => boolean;
  description: string;
}> = {
  cardiovascular: { severity: 'high', relevant: p => hasClass(p, ['stimulant', 'noradrenergic', 'cannabinoid']), description: 'A disclosed cardiovascular condition may reduce the margin for heart-rate or blood-pressure strain from the selected inputs.' },
  respiratory: { severity: 'high', relevant: p => hasClass(p, ['depressant', 'GABA-ergic', 'opioid receptor agonist', 'GHB-receptor agonist']), description: 'A disclosed respiratory condition may reduce breathing reserve when sedating or respiratory-depressant effects are present.' },
  seizure: { severity: 'high', relevant: p => hasClass(p, ['stimulant', 'serotonergic', 'serotonin reuptake inhibitor', 'monoamine oxidase inhibitor']), description: 'A disclosed seizure history may make stimulant or serotonin-active effects more concerning.' },
  liver: { severity: 'moderate', relevant: () => true, description: 'A disclosed liver condition can change how some substances or medicines are processed; this engine cannot estimate the person-specific effect.' },
  kidney: { severity: 'moderate', relevant: () => true, description: 'A disclosed kidney condition can change clearance and fluid balance; this engine cannot estimate the person-specific effect.' },
  mental_health: { severity: 'moderate', relevant: p => hasClass(p, ['stimulant', 'psychedelic', 'mild psychedelic', 'dissociative', 'cannabinoid']), description: 'A disclosed mental-health condition may affect vulnerability to anxiety, agitation, paranoia, confusion or psychological distress.' },
  pregnancy: { severity: 'high', relevant: () => true, description: 'Pregnancy is a higher-uncertainty health context. This result cannot establish safety for the pregnant person or fetus; seek clinician or poisons-information advice.' },
  sleep_deprivation: { severity: 'moderate', relevant: p => hasClass(p, ['stimulant', 'psychedelic', 'dissociative']), description: 'Sleep deprivation may compound confusion, agitation, cardiovascular load and impaired judgement across the selected inputs.' },
  dehydration_or_heat: { severity: 'high', relevant: p => hasClass(p, ['stimulant', 'serotonergic', 'noradrenergic']), description: 'Current dehydration, heat exposure or heavy exertion may compound overheating and cardiovascular strain.' },
};

function hasClass(profile: SubstanceProfile, classes: string[]): boolean {
  return profile.class.some(value => classes.some(candidate => value.toLowerCase().includes(candidate.toLowerCase())));
}

function buildContextFindings(domains: HealthDomain[], profiles: SubstanceProfile[]): Interaction[] {
  return dedupe(domains).flatMap(domain => {
    const rule = CONTEXT_RULES[domain];
    const relevant = profiles.filter(rule.relevant).map(profile => profile.canonicalName);
    if (relevant.length === 0) return [];
    return [{ combination: relevant, type: 'health_context_modifier' as const, severity: rule.severity, description: rule.description }];
  });
}

// ─── Main Analyser ──────────────────────────────────────────────────────────

export function analyse(input: AnalysisInput): AnalysisResult {
  const { substances: raw, healthProfile } = input;

  if (!Array.isArray(raw) || raw.length === 0) throw new Error('Provide at least one substance.');
  if (raw.length > 6) throw new Error('Maximum 6 substances supported.');
  if (raw.some(value => typeof value !== 'string' || !value.trim())) throw new Error('Each substance must be a non-empty string.');
  const requestedDomains = healthProfile?.domains ?? [];
  if (!Array.isArray(requestedDomains) || requestedDomains.some(domain => !(domain in CONTEXT_RULES))) {
    throw new Error('Health profile contains an unsupported context domain.');
  }

  // Normalise
  const unknown: string[] = [];
  const canonical: string[] = [];
  for (const s of raw) {
    const name = normalise(s);
    if (!name) unknown.push(s);
    else if (!canonical.includes(name)) canonical.push(name);
  }

  const notes: string[] = [];
  notes.push('Prototype dataset: findings have not yet completed independent clinical or harm-reduction expert validation.');
  if (unknown.length > 0) {
    notes.push(`Unrecognised substance(s): ${unknown.join(', ')}. These could not be analysed — treat as unknown risk.`);
  }

  if (canonical.length === 0) {
    return {
      assessmentScope: { selectedCount: raw.length, assessedTogether: true, combinationsChecked: 0 },
      riskLevel: unknown.length ? 'moderate' : 'low', interactions: [], effects: [],
      guidance: { selfManagement: [], avoid: [] },
      redFlags: buildRedFlags(unknown.length ? 'moderate' : 'low'), seekHelpIf: SEEK_HELP, timeline: [], notes,
      contextFindings: [],
    };
  }

  const profiles = canonical.map(name => PROFILES[name]).filter(Boolean);

  // Check every two-input edge in the selected set against documented records.
  // These component findings feed one whole-selection assessment below.
  const componentInteractions = [];
  for (let i = 0; i < canonical.length; i++) {
    for (let j = i + 1; j < canonical.length; j++) {
      const interaction = getPairInteraction(canonical[i], canonical[j]);
      if (interaction) componentInteractions.push(interaction);
    }
  }

  // Matrix — stacking
  const stackingInteractions = detectStackingInteractions(
    profiles.map(p => ({ name: p.canonicalName, classes: p.class }))
  );

  const contextFindings = buildContextFindings(requestedDomains, profiles);

  const allInteractions = [...componentInteractions, ...stackingInteractions];

  // Risk level
  let overallSeverity = highestSeverity([...allInteractions, ...contextFindings].map(i => i.severity));
  if (unknown.length > 0 && WEIGHT[overallSeverity] < WEIGHT.moderate) {
    overallSeverity = 'moderate';
  }
  if (allInteractions.length === 0 && canonical.length >= 2) {
    overallSeverity = 'moderate' as Severity;
    notes.push('No documented interaction record matched this selection, but absence from this dataset does not establish safety.');
  }
  if (healthProfile?.notes?.length) notes.push('Free-text health notes were retained as context but were not clinically interpreted by the rules engine.');
  notes.push(`All ${canonical.length} recognised input${canonical.length === 1 ? '' : 's'} were assessed together; documented component interactions and whole-set mechanism stacking are reported separately.`);

  // ASA — Effects
  const effects = dedupe(profiles.flatMap(p => [...p.subjectiveEffects, ...p.physicalEffects]));

  // ASA — Guidance
  const selfManagement = dedupe(profiles.flatMap(p => p.harmReductionTips));

  const hasHyperthermia = allInteractions.some(i =>
    i.type === 'cardiovascular_strain' || i.type === 'stimulant_synergy' || i.type === 'hyperthermia_risk'
  );
  const hasCNSDepression = allInteractions.some(i =>
    i.type === 'cns_depression_stacking' || i.type === 'respiratory_depression'
  );
  const hasSerotonergic = allInteractions.some(i => i.type === 'serotonergic_overload');

  if (hasHyperthermia) {
    selfManagement.unshift(
      'Hyperthermia risk is elevated — prioritise cool environment, rest breaks, and hydration',
      'Check in on your temperature regularly; if anyone feels extremely hot and stops sweating, move them to a cool area immediately'
    );
  }
  if (hasCNSDepression) {
    selfManagement.unshift(
      'CNS depression risk — do not use alone; have a crew member awake and monitoring',
      'Recovery position for anyone unconscious or semi-conscious — never leave them on their back'
    );
  }
  if (hasSerotonergic) {
    selfManagement.unshift(
      'Serotonin syndrome risk — watch for agitation, rapid heart rate, high fever, muscle rigidity, or tremor',
      'If any serotonin syndrome symptoms appear, stop all substances and seek emergency care immediately'
    );
  }

  // Avoid list derived from interaction table
  const avoidCandidates: string[] = [];
  for (const interaction of allInteractions) {
    if (WEIGHT[interaction.severity] >= WEIGHT['high']) {
      for (const s of interaction.combination) {
        if (!canonical.includes(s)) avoidCandidates.push(s);
      }
    }
  }
  const avoid = dedupe(avoidCandidates);

  const timeline = profiles.map(p => ({
    substance: p.canonicalName,
    onset: p.timeline.onset,
    peak: p.timeline.peak,
    duration: p.timeline.duration,
  }));

  return {
    assessmentScope: {
      selectedCount: canonical.length,
      assessedTogether: true,
      combinationsChecked: canonical.length * (canonical.length - 1) / 2,
    },
    riskLevel: overallSeverity,
    interactions: allInteractions,
    effects,
    guidance: { selfManagement: dedupe(selfManagement), avoid },
    redFlags: buildRedFlags(overallSeverity),
    seekHelpIf: SEEK_HELP,
    timeline,
    notes,
    contextFindings,
  };
}

// ─── Constants ───────────────────────────────────────────────────────────────

const SEEK_HELP = [
  'Person is unresponsive or cannot be woken',
  'Breathing is slow, shallow, or stopped',
  'Lips or fingernails are turning blue',
  'Seizure occurs',
  'Chest pain or irregular heartbeat',
  'Body temperature appears dangerously high and they have stopped sweating',
  'Signs of serotonin syndrome: agitation, rigid muscles, high fever, rapid heart rate, diarrhoea',
  'Any situation where you are unsure — call for help, do not wait',
];

function buildRedFlags(severity: Severity): string[] {
  const base = [
    'Loss of consciousness or unresponsive',
    'Difficulty breathing or very slow/shallow breaths',
    'Seizures',
    'Chest pain',
    'Extreme confusion or agitation',
  ];
  if (severity === 'high' || severity === 'critical') {
    return [
      ...base,
      'Body not cooling down despite rest and water — potential heatstroke',
      'Rigid muscles, fever, and rapid heart rate together — possible serotonin syndrome',
      'Vomiting while unconscious — aspiration risk, recovery position immediately',
    ];
  }
  return base;
}
