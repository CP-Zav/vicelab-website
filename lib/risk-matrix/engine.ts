import { AnalysisInput, AnalysisResult, Severity } from './types';
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

// ─── Main Analyser ──────────────────────────────────────────────────────────

export function analyse(input: AnalysisInput): AnalysisResult {
  const { substances: raw } = input;

  if (!raw || raw.length === 0) throw new Error('Provide at least one substance.');
  if (raw.length > 6) throw new Error('Maximum 6 substances supported.');

  // Normalise
  const unknown: string[] = [];
  const canonical: string[] = [];
  for (const s of raw) {
    const name = normalise(s);
    if (!name) unknown.push(s);
    else if (!canonical.includes(name)) canonical.push(name);
  }

  const notes: string[] = [];
  if (unknown.length > 0) {
    notes.push(`Unrecognised substance(s): ${unknown.join(', ')}. These could not be analysed — treat as unknown risk.`);
  }

  if (canonical.length === 0) {
    return {
      riskLevel: 'low', interactions: [], effects: [],
      guidance: { selfManagement: [], avoid: [] },
      redFlags: buildRedFlags('low'), seekHelpIf: SEEK_HELP, timeline: [], notes,
    };
  }

  const profiles = canonical.map(name => PROFILES[name]).filter(Boolean);

  // Matrix — pairwise
  const pairInteractions = [];
  for (let i = 0; i < canonical.length; i++) {
    for (let j = i + 1; j < canonical.length; j++) {
      const interaction = getPairInteraction(canonical[i], canonical[j]);
      if (interaction) pairInteractions.push(interaction);
    }
  }

  // Matrix — stacking
  const stackingInteractions = detectStackingInteractions(
    profiles.map(p => ({ name: p.canonicalName, classes: p.class }))
  );

  const allInteractions = [...pairInteractions, ...stackingInteractions];

  // Risk level
  let overallSeverity = highestSeverity(allInteractions.map(i => i.severity));
  if (canonical.length >= 3 && overallSeverity === 'high') {
    overallSeverity = 'critical';
    notes.push('3+ substances detected with high-severity interactions — overall risk escalated to critical.');
  }
  if (allInteractions.length === 0 && canonical.length >= 2) {
    overallSeverity = 'moderate' as Severity;
    notes.push('No documented pairwise interactions found, but combining any substances carries unpredictable risk.');
  }

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
    riskLevel: overallSeverity,
    interactions: allInteractions,
    effects,
    guidance: { selfManagement: dedupe(selfManagement), avoid },
    redFlags: buildRedFlags(overallSeverity),
    seekHelpIf: SEEK_HELP,
    timeline,
    notes,
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
