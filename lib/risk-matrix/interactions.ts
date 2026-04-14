import { Interaction, Severity } from './types';

type InteractionDef = Omit<Interaction, 'combination'>;

/**
 * Pairwise interaction table.
 * Keys: two canonical names sorted alphabetically, joined with '+'.
 * e.g., 'Alcohol+GHB'
 */
const TABLE: Record<string, InteractionDef> = {

  // ──────────────────────────────────────────────────────────────
  // CRITICAL
  // ──────────────────────────────────────────────────────────────

  'Alcohol+GHB': {
    type: 'cns_depression_stacking', severity: 'critical',
    description: 'Synergistic CNS and respiratory depression. GHB has an extremely narrow therapeutic window; alcohol collapses it further. This combination is a documented cause of fatal respiratory arrest. Even moderate amounts of each can be lethal together.',
  },
  'Benzodiazepines+GHB': {
    type: 'respiratory_depression', severity: 'critical',
    description: 'Both potentiate GABA-A receptors. Combined respiratory drive suppression is synergistic — not just additive. Risk of coma and respiratory arrest is high.',
  },
  'GHB+Opioids': {
    type: 'respiratory_depression', severity: 'critical',
    description: 'Dual respiratory depression via GHB receptors and opioid receptors. Naloxone will not reverse the GHB component. Extremely high risk of fatal apnoea.',
  },
  'Alcohol+Opioids': {
    type: 'respiratory_depression', severity: 'critical',
    description: 'Both suppress respiratory drive. One of the most common causes of overdose fatality. Risk is further elevated with fentanyl-adulterated supply.',
  },
  'Benzodiazepines+Opioids': {
    type: 'respiratory_depression', severity: 'critical',
    description: 'Synergistic respiratory depression. Carries a black-box FDA warning. Risk of fatal respiratory arrest is substantially elevated. Emergency naloxone and services if unresponsive.',
  },
  'MAOIs+MDMA': {
    type: 'serotonergic_overload', severity: 'critical',
    description: 'Potentially fatal serotonin syndrome. MAOIs block serotonin breakdown; MDMA forces massive serotonin release. Combined: catastrophic serotonin accumulation — hyperthermia, rigidity, seizures, cardiovascular collapse. Requires immediate emergency care.',
  },
  'MAOIs+Amphetamine': {
    type: 'serotonergic_overload', severity: 'critical',
    description: 'Severe hypertensive crisis and serotonin syndrome risk. MAOI prevents monoamine breakdown; amphetamine triggers massive release. Can cause stroke or cardiac arrest.',
  },
  'MAOIs+Cocaine': {
    type: 'cardiovascular_strain', severity: 'critical',
    description: 'Severe hypertensive crisis. MAOI prevents norepinephrine breakdown; cocaine causes massive norepinephrine release and blocks reuptake. Blood pressure can spike to stroke-inducing levels.',
  },
  'MAOIs+Opioids': {
    type: 'serotonergic_overload', severity: 'critical',
    description: 'Tramadol, meperidine, and fentanyl carry significant serotonergic activity — combined with MAOIs this becomes serotonin syndrome. Even pure opioids add CNS depression synergy on top of MAOI effects.',
  },
  'MAOIs+SSRIs': {
    type: 'serotonergic_overload', severity: 'critical',
    description: 'Classic cause of life-threatening serotonin syndrome. Both increase serotonergic tone through different mechanisms — combined effect is potentially fatal. Absolutely contraindicated.',
  },
  'MAOIs+MDA': {
    type: 'serotonergic_overload', severity: 'critical',
    description: 'Equivalent risk to MAOIs+MDMA. MDA is a potent serotonin releaser; combined with MAOI creates severe serotonin syndrome risk.',
  },

  // ──────────────────────────────────────────────────────────────
  // HIGH
  // ──────────────────────────────────────────────────────────────

  'Alcohol+Benzodiazepines': {
    type: 'cns_depression_stacking', severity: 'high',
    description: 'Both enhance GABA-A activity. Combined CNS and respiratory depression exceeds the sum of individual effects. Blackout, aspiration vomiting, and respiratory arrest are real risks.',
  },
  'Alcohol+Ketamine': {
    type: 'cns_depression_stacking', severity: 'high',
    description: 'Alcohol significantly potentiates ketamine sedation and dissociation. Increased risk of unconsciousness and aspiration. Impairs ability to identify and respond to danger.',
  },
  'Benzodiazepines+Ketamine': {
    type: 'cns_depression_stacking', severity: 'high',
    description: "Ketamine's dissociative sedation is amplified by benzodiazepines. Elevated respiratory depression risk. Loss of consciousness without monitoring is dangerous.",
  },
  'GHB+Ketamine': {
    type: 'cns_depression_stacking', severity: 'high',
    description: 'Additive CNS and respiratory depression from two compounds with steep dose-response curves. Easy to overshoot into dangerous territory.',
  },
  'Cocaine+MDMA': {
    type: 'cardiovascular_strain', severity: 'high',
    description: 'Dual stimulant load. Both elevate heart rate, blood pressure, and body temperature. MDMA adds serotonergic pressure. Hyperthermia risk is substantially elevated. Reported cardiac events (arrhythmia, infarction).',
  },
  'Amphetamine+MDMA': {
    type: 'cardiovascular_strain', severity: 'high',
    description: 'Additive cardiovascular and serotonergic strain. Combined norepinephrine release and reuptake inhibition. Elevated risk of heatstroke and cardiac events.',
  },
  'Amphetamine+Cocaine': {
    type: 'stimulant_synergy', severity: 'high',
    description: 'Dual stimulant synergy with high cardiovascular load. Arrhythmia and hypertensive risk is elevated. Crash is more severe.',
  },
  'LSD+MDMA': {
    type: 'serotonergic_overload', severity: 'high',
    description: '"Candyflipping." Strong serotonergic synergy — effects of both are amplified and extended. Duration can exceed 16 h. High psychological intensity in festival environments.',
  },
  'MDMA+Psilocybin': {
    type: 'serotonergic_overload', severity: 'high',
    description: 'Serotonergic mechanisms compound unpredictably. Psychedelic intensity is significantly amplified. Cardiovascular stimulation from MDMA adds risk during the psychedelic peak.',
  },
  'Alcohol+Cocaine': {
    type: 'cocaethylene_formation', severity: 'high',
    description: 'Co-metabolism in the liver produces cocaethylene — longer duration and higher cardiovascular toxicity than either alone. Associated with sudden cardiac death and hepatotoxicity.',
  },
  'MAOIs+LSD': {
    type: 'serotonergic_overload', severity: 'high',
    description: 'MAOIs significantly potentiate LSD by inhibiting serotonin metabolism. Experience becomes overwhelmingly intense. Serotonin syndrome risk at higher doses.',
  },
  'MAOIs+Psilocybin': {
    type: 'serotonergic_overload', severity: 'high',
    description: 'MAOIs potentiate psilocybin effects. Without preparation, can produce extreme psychological distress and serotonin syndrome risk.',
  },
  'MDMA+SSRIs': {
    type: 'serotonergic_overload', severity: 'high',
    description: 'SSRIs block the serotonin transporter MDMA relies on. Effect is blunted — users often compensate with higher doses, escalating cardiovascular and serotonin syndrome risk.',
  },
  'Ketamine+Opioids': {
    type: 'cns_depression_stacking', severity: 'high',
    description: 'Additive respiratory depression and sedation. Ketamine normally maintains respiratory drive at sub-anaesthetic doses; opioids reduce this safety margin significantly.',
  },
  'Mephedrone+MDMA': {
    type: 'cardiovascular_strain', severity: 'high',
    description: 'Both are serotonergic stimulants. Additive cardiovascular and serotonergic load. Hyperthermia risk is high. Significant cardiac strain.',
  },
  '2-CB+MDMA': {
    type: 'serotonergic_overload', severity: 'high',
    description: '"Nexus flipping." Extremely intense and unpredictable combination. Cardiovascular strain is elevated. Serotonin syndrome risk increases at higher doses.',
  },
  'Mephedrone+Cocaine': {
    type: 'stimulant_synergy', severity: 'high',
    description: 'Dual stimulant combination. Significantly elevated heart rate, blood pressure, and hyperthermia risk. Cardiac events are a real concern.',
  },
  'MDA+MDMA': {
    type: 'serotonergic_overload', severity: 'high',
    description: 'Both are serotonin releasers with overlapping mechanisms. Combined serotonergic and cardiovascular load is very high. Increased neurotoxicity and hyperthermia risk.',
  },
  'MAOIs+DMT': {
    type: 'serotonergic_overload', severity: 'high',
    description: 'This is the ayahuasca combination. Intentional: active and prolonged. Unintentional: unpredictable serotonin syndrome risk. Requires careful preparation and a sitter.',
  },

  // ──────────────────────────────────────────────────────────────
  // MODERATE
  // ──────────────────────────────────────────────────────────────

  'Alcohol+MDMA': {
    type: 'cardiovascular_strain', severity: 'moderate',
    description: "Alcohol masks MDMA's overheating signals and increases dehydration. Combined cardiovascular load is elevated. Higher risk of dangerous hyperthermia because the body's heat-warning system is impaired.",
  },
  'Alcohol+Amphetamine': {
    type: 'cardiovascular_strain', severity: 'moderate',
    description: 'Stimulant blunts perceived alcohol intoxication — people drink more than they realise. Cardiovascular load from both is elevated. Dehydration risk is compounded.',
  },
  'Alcohol+Cannabis': {
    type: 'cns_depression_stacking', severity: 'moderate',
    description: '"Crossfading." Can cause nausea and vomiting. Amplifies impairment. Risk of greening out (nausea, dizziness, pallor) at higher doses.',
  },
  'Alcohol+Mephedrone': {
    type: 'cardiovascular_strain', severity: 'moderate',
    description: 'Alcohol blunts perceived stimulant effects while cardiovascular strain remains. Dehydration risk from both. Nausea more common.',
  },
  'Alcohol+Nitrous Oxide': {
    type: 'cns_depression_stacking', severity: 'moderate',
    description: 'Mild additive CNS depression. Increased falls risk and impairment at nitrous onset.',
  },
  'Amphetamine+Cannabis': {
    type: 'cardiovascular_strain', severity: 'moderate',
    description: 'Both increase heart rate. Combined cardiac stimulation is greater than either alone. Can amplify anxiety and paranoia.',
  },
  'Cannabis+Cocaine': {
    type: 'cardiovascular_strain', severity: 'moderate',
    description: 'Cannabis elevates heart rate; cocaine causes significant cardiovascular stimulation. Combined cardiac load is elevated. Can increase anxiety and paranoia.',
  },
  'Cannabis+Ketamine': {
    type: 'dissociative_potentiation', severity: 'moderate',
    description: "Cannabis potentiates ketamine's dissociation. Amplified disorientation and confusion. Heart rate elevation from cannabis compounds on ketamine's cardiovascular effects.",
  },
  'Cannabis+LSD': {
    type: 'psychedelic_amplification', severity: 'moderate',
    description: 'Cannabis significantly amplifies and extends psychedelic effects. Can shift a manageable experience to overwhelming. Panic and acute psychological distress risk is elevated.',
  },
  'Cannabis+MDMA': {
    type: 'psychedelic_amplification', severity: 'moderate',
    description: 'Cannabis amplifies MDMA sensory effects but can increase anxiety and paranoia — particularly in unfamiliar environments. Adds cardiovascular load on top of MDMA stimulation.',
  },
  'Cannabis+Psilocybin': {
    type: 'psychedelic_amplification', severity: 'moderate',
    description: 'Amplifies psychedelic experience. Risk is context and experience dependent. Can shift a manageable trip to overwhelming territory.',
  },
  'Caffeine+Cocaine': {
    type: 'cardiovascular_strain', severity: 'moderate',
    description: "Caffeine compounds cocaine's significant cardiac stimulation. Elevated heart rate and anxiety.",
  },
  'Cocaine+Ketamine': {
    type: 'cardiovascular_strain', severity: 'moderate',
    description: "Cocaine's cardiovascular stimulation meets ketamine's initial blood pressure increase. Cardiac load elevated. Ketamine dissociation prevents recognition of cardiac warning signs.",
  },
  'Ketamine+LSD': {
    type: 'dissociative_potentiation', severity: 'moderate',
    description: 'Psychedelic + dissociative — reality distortion is significantly amplified. Physical safety management becomes very difficult. Psychological risk is real.',
  },
  'Ketamine+MDMA': {
    type: 'cns_depression_stacking', severity: 'moderate',
    description: 'Stimulant meets dissociative — effects compete unpredictably. MDMA overheating warning signs can be masked by ketamine sedation. Nausea risk is increased.',
  },
  'Ketamine+Psilocybin': {
    type: 'dissociative_potentiation', severity: 'moderate',
    description: 'Dissociation and psychedelic effects compound. Profound and potentially destabilising experience. Physical safety requires a present, sober sitter.',
  },
  'LSD+Nitrous Oxide': {
    type: 'psychedelic_amplification', severity: 'moderate',
    description: 'Nitrous briefly but intensely amplifies the psychedelic state. Can be very disorienting. Falls risk at nitrous onset — must be seated before use.',
  },
  'Nitrous Oxide+Ketamine': {
    type: 'dissociative_potentiation', severity: 'moderate',
    description: 'Both are dissociatives. Combined dissociation can be very intense and disorienting. Falls risk is high. Respiratory reserve is reduced.',
  },
  'Nitrous Oxide+Psilocybin': {
    type: 'psychedelic_amplification', severity: 'moderate',
    description: 'Brief but intense psychedelic amplification. Disorientation and ego dissolution risk is elevated. Always seated, always supported.',
  },

  // ──────────────────────────────────────────────────────────────
  // LOW
  // ──────────────────────────────────────────────────────────────

  'Caffeine+MDMA': {
    type: 'cardiovascular_strain', severity: 'low',
    description: "Mild additional cardiovascular stimulation. Caffeine adds to MDMA's already elevated heart rate. Low severity, but worth noting at high caffeine doses.",
  },
  'Caffeine+Amphetamine': {
    type: 'stimulant_synergy', severity: 'low',
    description: 'Mild additional stimulant load. Primarily relevant with high caffeine intake. Modest increase in jitteriness and cardiac load.',
  },
};

/** Look up a pairwise interaction between two canonical names */
export function getPairInteraction(a: string, b: string): Interaction | null {
  const key = [a, b].sort().join('+');
  const def = TABLE[key];
  if (!def) return null;
  return { combination: [a, b], ...def };
}

/** Severity numeric weight for comparison */
export const WEIGHT: Record<Severity, number> = {
  low: 1,
  moderate: 2,
  high: 3,
  critical: 4,
};

/** Classes that stack for CNS depression */
const CNS_DEPRESSANT_CLASSES = [
  'depressant', 'GABA-ergic', 'opioid receptor agonist', 'GHB-receptor agonist',
];

/** Detect CNS-depressant stacking across 3+ substances */
export function detectStackingInteractions(
  substances: Array<{ name: string; classes: string[] }>
): Interaction[] {
  const depressants = substances.filter(s =>
    s.classes.some(c =>
      CNS_DEPRESSANT_CLASSES.some(dc => c.toLowerCase().includes(dc.toLowerCase()))
    )
  );
  if (depressants.length < 3) return [];
  return [{
    combination: depressants.map(d => d.name),
    type: 'cns_depression_stacking',
    severity: 'critical',
    description: `3+ CNS depressants combined (${depressants.map(d => d.name).join(', ')}). Respiratory depression risk is multiplicative, not additive. This stack is potentially fatal.`,
  }];
}
