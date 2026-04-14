import { SubstanceProfile } from './types';

/** Lowercase alias → canonical name */
export const ALIASES: Record<string, string> = {
  // MDMA
  mdma: 'MDMA', molly: 'MDMA', ecstasy: 'MDMA', mandy: 'MDMA',
  pingers: 'MDMA', xtc: 'MDMA', pills: 'MDMA', 'e': 'MDMA',
  // Alcohol
  alcohol: 'Alcohol', ethanol: 'Alcohol', beer: 'Alcohol',
  wine: 'Alcohol', spirits: 'Alcohol', booze: 'Alcohol', grog: 'Alcohol',
  // Cannabis
  cannabis: 'Cannabis', weed: 'Cannabis', marijuana: 'Cannabis',
  thc: 'Cannabis', hash: 'Cannabis', dabs: 'Cannabis', pot: 'Cannabis',
  ganja: 'Cannabis', bud: 'Cannabis', herb: 'Cannabis', wax: 'Cannabis',
  // Cocaine
  cocaine: 'Cocaine', coke: 'Cocaine', blow: 'Cocaine',
  charlie: 'Cocaine', snow: 'Cocaine', white: 'Cocaine',
  // Ketamine
  ketamine: 'Ketamine', ket: 'Ketamine', 'special k': 'Ketamine',
  'k': 'Ketamine', 'vitamin k': 'Ketamine',
  // Amphetamine
  amphetamine: 'Amphetamine', speed: 'Amphetamine', adderall: 'Amphetamine',
  dexamphetamine: 'Amphetamine', vyvanse: 'Amphetamine', dex: 'Amphetamine',
  whiz: 'Amphetamine', billy: 'Amphetamine',
  // LSD
  lsd: 'LSD', acid: 'LSD', tabs: 'LSD', lysergic: 'LSD', lucy: 'LSD',
  // Psilocybin
  psilocybin: 'Psilocybin', shrooms: 'Psilocybin', mushrooms: 'Psilocybin',
  'magic mushrooms': 'Psilocybin', mushy: 'Psilocybin', truffles: 'Psilocybin',
  // GHB / GBL
  ghb: 'GHB', 'g': 'GHB', geebs: 'GHB', gamma: 'GHB',
  'liquid e': 'GHB', 'liquid ecstasy': 'GHB',
  gbl: 'GHB', 'gamma-butyrolactone': 'GHB', '1,4-bd': 'GHB',
  // Benzodiazepines
  benzodiazepine: 'Benzodiazepines', benzodiazepines: 'Benzodiazepines',
  benzo: 'Benzodiazepines', benzos: 'Benzodiazepines',
  xanax: 'Benzodiazepines', valium: 'Benzodiazepines',
  diazepam: 'Benzodiazepines', alprazolam: 'Benzodiazepines',
  clonazepam: 'Benzodiazepines', klonopin: 'Benzodiazepines',
  lorazepam: 'Benzodiazepines', ativan: 'Benzodiazepines',
  etizolam: 'Benzodiazepines', temazepam: 'Benzodiazepines', temaz: 'Benzodiazepines',
  // Opioids
  opioid: 'Opioids', opioids: 'Opioids', opiates: 'Opioids',
  heroin: 'Opioids', smack: 'Opioids', oxy: 'Opioids',
  oxycodone: 'Opioids', fentanyl: 'Opioids', fent: 'Opioids',
  codeine: 'Opioids', tramadol: 'Opioids', morphine: 'Opioids',
  methadone: 'Opioids', buprenorphine: 'Opioids', suboxone: 'Opioids',
  // SSRIs / SNRIs
  ssri: 'SSRIs', ssris: 'SSRIs', snri: 'SSRIs',
  antidepressant: 'SSRIs', prozac: 'SSRIs', fluoxetine: 'SSRIs',
  zoloft: 'SSRIs', sertraline: 'SSRIs', lexapro: 'SSRIs',
  escitalopram: 'SSRIs', paxil: 'SSRIs', effexor: 'SSRIs',
  venlafaxine: 'SSRIs', duloxetine: 'SSRIs', cymbalta: 'SSRIs',
  // MAOIs
  maoi: 'MAOIs', maois: 'MAOIs', phenelzine: 'MAOIs',
  tranylcypromine: 'MAOIs', moclobemide: 'MAOIs', ayahuasca: 'MAOIs',
  // Mephedrone
  mephedrone: 'Mephedrone', mcat: 'Mephedrone', 'm-cat': 'Mephedrone',
  drone: 'Mephedrone', meph: 'Mephedrone', '4-mmc': 'Mephedrone',
  // 2-CB
  '2-cb': '2-CB', '2cb': '2-CB', tucibi: '2-CB', tusi: '2-CB',
  // DMT
  dmt: 'DMT', dimethyltryptamine: 'DMT', changa: 'DMT',
  // Nitrous Oxide
  nitrous: 'Nitrous Oxide', 'nitrous oxide': 'Nitrous Oxide',
  nos: 'Nitrous Oxide', nangs: 'Nitrous Oxide',
  'laughing gas': 'Nitrous Oxide', whippets: 'Nitrous Oxide', balloons: 'Nitrous Oxide',
  // Caffeine
  caffeine: 'Caffeine', coffee: 'Caffeine',
  'energy drink': 'Caffeine', 'pre-workout': 'Caffeine',
  // MDA
  mda: 'MDA', sass: 'MDA', sally: 'MDA',
};

export const PROFILES: Record<string, SubstanceProfile> = {
  MDMA: {
    canonicalName: 'MDMA',
    class: ['entactogen', 'stimulant', 'serotonergic'],
    timeline: { onset: '30–90 min', peak: '60–90 min after onset', duration: '3–5 h (residual up to 8 h)' },
    subjectiveEffects: [
      'Euphoria and emotional warmth',
      'Increased empathy and sociability',
      'Enhanced sensory perception',
      'Jaw clenching (bruxism)',
      'Mild psychedelia at higher doses',
    ],
    physicalEffects: [
      'Elevated heart rate and blood pressure',
      'Hyperthermia',
      'Increased sweating',
      'Pupil dilation',
      'Dehydration if active in heat',
    ],
    behavioralRisks: [
      'Overheating from sustained dancing without rest',
      'Hyponatremia (over-hydration without electrolytes)',
      'Impaired judgment around consent and safety',
      'Redosing after 2 h adds risk with minimal additional euphoria',
    ],
    harmReductionTips: [
      '~500 ml water/hour if dancing; less if stationary — include electrolytes',
      '15-min rest break per hour off the dance floor',
      'Avoid redosing past the 2-hour mark',
      'Test substance with reagent kit before use',
    ],
    avoidWith: ['MAOIs', 'SSRIs', 'Cocaine', 'Amphetamine', 'Alcohol'],
  },
  Alcohol: {
    canonicalName: 'Alcohol',
    class: ['depressant', 'GABA-ergic'],
    timeline: { onset: '15–30 min', peak: '45–90 min', duration: '~1 h per standard drink' },
    subjectiveEffects: [
      'Disinhibition and relaxation at low doses',
      'Sedation, coordination impairment at higher doses',
      'Emotional volatility',
    ],
    physicalEffects: [
      'Slowed reaction time and motor coordination',
      'Dehydration (diuretic)',
      'Respiratory depression at high doses',
      'Aspiration risk if vomiting while unconscious',
    ],
    behavioralRisks: [
      'Blackouts and memory gaps',
      'Impaired consent awareness',
      'Risk of choking if vomiting while unconscious',
    ],
    harmReductionTips: [
      'Eat before drinking',
      'Alternate with water',
      'Never leave an unconscious person flat — recovery position',
      'Avoid all CNS depressants when drinking',
    ],
    avoidWith: ['GHB', 'Opioids', 'Benzodiazepines', 'Ketamine'],
  },
  Cannabis: {
    canonicalName: 'Cannabis',
    class: ['cannabinoid', 'mild psychedelic'],
    timeline: { onset: '5–15 min smoked / 30–90 min edibles', peak: '30–60 min smoked / 2–4 h edibles', duration: '2–4 h smoked / 4–8 h edibles' },
    subjectiveEffects: [
      'Relaxation, euphoria',
      'Altered time perception',
      'Sensory enhancement',
      'Anxiety or paranoia at high doses or in unfamiliar settings',
    ],
    physicalEffects: [
      'Increased heart rate (especially initial)',
      'Dry mouth, red eyes',
      'Mild coordination impairment',
    ],
    behavioralRisks: [
      'Edibles have delayed onset — easy to over-consume',
      'Anxiety and paranoia in high-stimulation environments',
    ],
    harmReductionTips: [
      'Start low with edibles — wait 90 min before reassessing',
      'If anxiety spikes: quiet space, slow breathing, trusted crew member',
      'CBD can counteract THC-induced anxiety',
    ],
    avoidWith: [],
  },
  Cocaine: {
    canonicalName: 'Cocaine',
    class: ['stimulant', 'local anaesthetic'],
    timeline: { onset: '3–5 min insufflated', peak: '15–30 min', duration: '30–90 min' },
    subjectiveEffects: [
      'Intense euphoria and confidence',
      'Increased energy and alertness',
      'Reduced appetite',
    ],
    physicalEffects: [
      'Significant tachycardia and hypertension',
      'Vasoconstriction and hyperthermia',
      'Pupil dilation',
      'Nasal damage with repeated insufflation',
    ],
    behavioralRisks: [
      'Short duration drives compulsive redosing',
      'Cardiotoxic when combined with alcohol (cocaethylene)',
    ],
    harmReductionTips: [
      'Test substance — fentanyl contamination is present in current supply',
      'Alternate nostrils, rinse with saline after',
      'Limit to 2–3 redoses maximum',
      'Stop immediately if chest pain occurs',
    ],
    avoidWith: ['Alcohol', 'MDMA', 'Amphetamine', 'MAOIs'],
  },
  Ketamine: {
    canonicalName: 'Ketamine',
    class: ['dissociative', 'NMDA antagonist'],
    timeline: { onset: '5–15 min insufflated', peak: '15–30 min', duration: '45–90 min' },
    subjectiveEffects: [
      'Dissociation from body and surroundings',
      'Analgesia',
      'Euphoria at low doses',
      'K-hole (complete dissociation) at high doses',
    ],
    physicalEffects: [
      'Impaired motor control',
      'Nausea and vomiting',
      'Elevated blood pressure initially',
      'Sedation at higher doses',
    ],
    behavioralRisks: [
      'K-hole leaves person unable to communicate or protect themselves',
      'Analgesia masks pain signals — injury goes unnoticed',
      'Aspiration risk if vomiting while dissociated',
    ],
    harmReductionTips: [
      'Always use with a trusted, present crew member',
      'Sit or lie down in a safe, soft environment — no pools, edges, stairs',
      'If someone K-holes: stay with them, recovery position if unconscious, do not panic',
    ],
    avoidWith: ['Alcohol', 'GHB', 'Benzodiazepines', 'Opioids'],
  },
  Amphetamine: {
    canonicalName: 'Amphetamine',
    class: ['stimulant', 'dopaminergic', 'noradrenergic'],
    timeline: { onset: '20–60 min oral / 3–5 min insufflated', peak: '1–3 h', duration: '6–12 h' },
    subjectiveEffects: [
      'Increased energy, alertness, and focus',
      'Reduced fatigue and appetite',
      'Elevated mood and confidence',
    ],
    physicalEffects: [
      'Elevated heart rate and blood pressure',
      'Hyperthermia',
      'Jaw clenching, muscle tension',
      'Suppressed appetite and thirst',
    ],
    behavioralRisks: [
      'Sleep deprivation compounds all impairment',
      'Appetite suppression masks hunger and dehydration',
      'Crash (next day) — fatigue, low mood, irritability',
    ],
    harmReductionTips: [
      'Eat before and during — appetite suppression makes this easy to skip',
      'Plan a recovery day',
      'Test substance — methamphetamine contamination is possible',
    ],
    avoidWith: ['MAOIs', 'MDMA', 'Cocaine'],
  },
  LSD: {
    canonicalName: 'LSD',
    class: ['psychedelic', 'serotonergic'],
    timeline: { onset: '30–60 min', peak: '4–6 h', duration: '8–12 h' },
    subjectiveEffects: [
      'Visual and auditory hallucinations',
      'Profound perceptual and cognitive shifts',
      'Emotional amplification (positive and negative)',
      'Ego dissolution at high doses',
      'Time dilation',
    ],
    physicalEffects: [
      'Dilated pupils',
      'Elevated heart rate',
      'Mild hyperthermia',
      'Nausea (onset phase)',
    ],
    behavioralRisks: [
      'Challenging experiences in overstimulating environments',
      'Impaired ability to assess real-world danger',
      'Extended duration — plan for 12+ h',
    ],
    harmReductionTips: [
      'Set and setting are critical',
      'Have a sober or low-dose support person available',
      'Benzodiazepines can reduce intensity if needed',
    ],
    avoidWith: ['MAOIs', 'Lithium'],
  },
  Psilocybin: {
    canonicalName: 'Psilocybin',
    class: ['psychedelic', 'serotonergic', 'tryptamine'],
    timeline: { onset: '20–60 min', peak: '2–3 h', duration: '4–6 h' },
    subjectiveEffects: [
      'Sensory amplification and visual effects',
      'Emotional processing and introspection',
      'Altered sense of time and self',
      'Potential challenging or confronting experiences',
    ],
    physicalEffects: [
      'Nausea during onset',
      'Mild elevated heart rate',
      'Dilated pupils',
    ],
    behavioralRisks: [
      'Challenging emotional experiences in festival environments',
      'Unpredictable intensity with unknown potency',
    ],
    harmReductionTips: [
      'Ginger reduces nausea',
      'Choose familiar or quieter spaces',
      'Have a trip support person available',
    ],
    avoidWith: ['MAOIs', 'Lithium'],
  },
  GHB: {
    canonicalName: 'GHB',
    class: ['depressant', 'GABA-ergic', 'GHB-receptor agonist'],
    timeline: { onset: '15–45 min', peak: '45–90 min', duration: '2–4 h' },
    subjectiveEffects: [
      'Euphoria and disinhibition at low doses',
      'Increased sociability',
      'Sedation at higher doses',
    ],
    physicalEffects: [
      'Muscle relaxation',
      'Nausea and vomiting',
      'Respiratory depression at higher doses',
      'Very steep dose-response curve — small increase = major effect change',
    ],
    behavioralRisks: [
      'Extremely narrow therapeutic window — overdose is easy',
      'Dangerous loss of consciousness and incapacitation',
      'Dose varies significantly between batches',
    ],
    harmReductionTips: [
      'Use a measured dropper — never pour free-hand',
      'Write dose and time on your hand or phone',
      'Never redose before 2.5 h minimum',
      'Do not combine with alcohol — this combination kills',
      'Never use alone',
    ],
    avoidWith: ['Alcohol', 'Opioids', 'Benzodiazepines', 'Ketamine'],
  },
  Benzodiazepines: {
    canonicalName: 'Benzodiazepines',
    class: ['depressant', 'GABA-ergic'],
    timeline: { onset: '15–60 min oral', peak: '1–2 h', duration: '4–12 h (varies by compound)' },
    subjectiveEffects: [
      'Sedation and anxiolysis',
      'Muscle relaxation',
      'Anterograde amnesia (memory gaps during use)',
    ],
    physicalEffects: [
      'Respiratory depression (dose-dependent)',
      'Impaired coordination',
      'Slurred speech',
    ],
    behavioralRisks: [
      'Memory gaps — impaired consent and decision-making',
      'Disinhibition',
    ],
    harmReductionTips: [
      'Avoid combining with any CNS depressant',
      'If using to manage a stimulant comedown, use minimal dose',
      'Keep crew informed of use',
    ],
    avoidWith: ['Alcohol', 'GHB', 'Opioids', 'Ketamine'],
  },
  Opioids: {
    canonicalName: 'Opioids',
    class: ['depressant', 'opioid receptor agonist'],
    timeline: { onset: '5–30 min (route-dependent)', peak: '30–90 min', duration: '4–12 h (varies by compound)' },
    subjectiveEffects: [
      'Intense analgesia and euphoria',
      'Warmth and sedation',
      'Reduced anxiety',
    ],
    physicalEffects: [
      'Respiratory depression — primary overdose mechanism',
      'Constricted pupils (miosis)',
      'Nausea',
      'Sedation',
    ],
    behavioralRisks: [
      'Fentanyl contamination is widespread — test strips are essential',
      'Tolerance loss after any break dramatically increases overdose risk',
      'CNS depressant combinations are a leading cause of overdose death',
    ],
    harmReductionTips: [
      'Test for fentanyl before use',
      'Never use alone',
      'Small test dose after any break from use',
      'Carry naloxone — train crew on use',
    ],
    avoidWith: ['Alcohol', 'GHB', 'Benzodiazepines', 'Ketamine'],
  },
  SSRIs: {
    canonicalName: 'SSRIs',
    class: ['antidepressant', 'serotonin reuptake inhibitor'],
    timeline: { onset: 'Chronic medication — ongoing systemic presence', peak: 'N/A', duration: 'Days–weeks in system after cessation' },
    subjectiveEffects: [
      'Blunts MDMA and psychedelic effects',
      'Risk of serotonin syndrome when combined with serotonergic substances',
    ],
    physicalEffects: [
      'Competitive serotonin transporter blockade reduces MDMA activity',
      'Serotonin syndrome risk with serotonergic co-use',
    ],
    behavioralRisks: [
      'Users often increase MDMA dose to compensate — escalating cardiac risk',
      'Do not discontinue SSRIs before an event to improve effects — discontinuation syndrome',
    ],
    harmReductionTips: [
      'Disclose SSRI use to medical staff in any emergency',
      'Do not stop SSRIs to use MDMA',
    ],
    avoidWith: ['MAOIs', 'MDMA'],
  },
  MAOIs: {
    canonicalName: 'MAOIs',
    class: ['antidepressant', 'monoamine oxidase inhibitor'],
    timeline: { onset: 'Inhibition within hours; irreversible MAOIs last 2 weeks', peak: 'N/A', duration: 'Up to 2 weeks post-cessation' },
    subjectiveEffects: [
      'Combined with serotonergics: massive serotonin accumulation',
      'Combined with tyramine-rich foods: hypertensive crisis',
    ],
    physicalEffects: [
      'Blocks MAO enzyme — prevents metabolism of serotonin, dopamine, norepinephrine',
    ],
    behavioralRisks: [
      'Users may not know they carry MAOI activity (e.g., ayahuasca use)',
      'Any serotonergic substance becomes potentially fatal',
    ],
    harmReductionTips: [
      'If on MAOI: do not use MDMA, cocaine, amphetamine, any psychedelic, or tramadol',
      'Inform medical staff of MAOI use in any emergency',
    ],
    avoidWith: ['MDMA', 'Cocaine', 'Amphetamine', 'LSD', 'Psilocybin', 'SSRIs', 'Opioids', 'DMT'],
  },
  Mephedrone: {
    canonicalName: 'Mephedrone',
    class: ['stimulant', 'entactogen', 'cathinone'],
    timeline: { onset: '15–45 min oral / 5–10 min insufflated', peak: '30–90 min', duration: '2–3 h' },
    subjectiveEffects: [
      'MDMA-like euphoria with strong stimulant quality',
      'Increased sociability and energy',
      'Short duration drives compulsive redosing',
    ],
    physicalEffects: [
      'Elevated heart rate and blood pressure',
      'Hyperthermia and excessive sweating',
      'Vasoconstriction',
      'Jaw clenching',
    ],
    behavioralRisks: [
      'Short duration promotes binge use',
      'Cardiovascular risk compounds with each redose',
    ],
    harmReductionTips: [
      'Set hard redosing limits before starting',
      'Mandatory rest breaks — do not dance continuously',
      'Test substance',
    ],
    avoidWith: ['MDMA', 'Cocaine', 'Amphetamine', 'MAOIs'],
  },
  '2-CB': {
    canonicalName: '2-CB',
    class: ['psychedelic', 'phenethylamine', 'serotonergic'],
    timeline: { onset: '45–75 min oral / 5–20 min insufflated', peak: '2–3 h', duration: '4–6 h' },
    subjectiveEffects: [
      'Visual effects and colour enhancement',
      'MDMA-like empathy at lower doses',
      'Psychedelic at higher doses',
    ],
    physicalEffects: [
      'Elevated heart rate',
      'Nausea during onset',
      'Muscle tension',
    ],
    behavioralRisks: [
      'Unpredictable intensity with unknown potency',
      'Combination with MDMA is extremely intense',
    ],
    harmReductionTips: [
      'Do not combine with MDMA unless very experienced',
      'Test substance',
      'Lower doses are more manageable',
    ],
    avoidWith: ['MAOIs', 'MDMA'],
  },
  DMT: {
    canonicalName: 'DMT',
    class: ['psychedelic', 'tryptamine', 'serotonergic'],
    timeline: { onset: '10–60 sec smoked / 30–60 min oral with MAOI', peak: '2–15 min smoked', duration: '5–30 min smoked / 4–6 h oral with MAOI' },
    subjectiveEffects: [
      'Intense hallucinations and reality dissolution at breakthrough doses',
      'Rapid onset and offset when smoked',
    ],
    physicalEffects: [
      'Rapid heart rate and elevated blood pressure (transient)',
      'Nausea in oral form',
    ],
    behavioralRisks: [
      'Complete incapacitation during peak — requires safe environment and sitter',
    ],
    harmReductionTips: [
      'Always have a sitter',
      'Lie down in a safe space before smoking',
      'Do not combine with MAOIs unless specifically prepared',
    ],
    avoidWith: ['MAOIs'],
  },
  'Nitrous Oxide': {
    canonicalName: 'Nitrous Oxide',
    class: ['dissociative', 'NMDA antagonist'],
    timeline: { onset: '15–30 sec', peak: '1–2 min', duration: '2–5 min' },
    subjectiveEffects: [
      'Brief euphoria and dissociation',
      'Auditory and visual distortion',
    ],
    physicalEffects: [
      'Oxygen displacement — hypoxia risk in enclosed space',
      'Falls risk at onset',
      'B12 depletion with heavy use',
    ],
    behavioralRisks: [
      'Falls and injury at sudden onset',
      'Compulsive repeated use due to short duration',
    ],
    harmReductionTips: [
      'Always sit down before using',
      'Use in well-ventilated areas',
      'Allow full recovery between uses',
      'Never use directly from a gas cylinder',
    ],
    avoidWith: [],
  },
  Caffeine: {
    canonicalName: 'Caffeine',
    class: ['stimulant', 'adenosine antagonist'],
    timeline: { onset: '15–45 min', peak: '30–60 min', duration: '4–6 h' },
    subjectiveEffects: ['Increased alertness', 'Reduced perception of fatigue'],
    physicalEffects: ['Mild elevated heart rate', 'Diuretic effect'],
    behavioralRisks: ['Masks fatigue — overestimation of physical capacity'],
    harmReductionTips: ['Account for diuretic effect with extra hydration'],
    avoidWith: [],
  },
  MDA: {
    canonicalName: 'MDA',
    class: ['entactogen', 'stimulant', 'serotonergic', 'amphetamine derivative'],
    timeline: { onset: '60–90 min', peak: '2–4 h', duration: '8–12 h' },
    subjectiveEffects: [
      'Similar to MDMA with more psychedelic character',
      'Empathy and euphoria',
      'Visual effects at higher doses',
    ],
    physicalEffects: [
      'Elevated heart rate and blood pressure',
      'Hyperthermia',
      'Jaw clenching',
      'Significantly longer duration than MDMA',
    ],
    behavioralRisks: [
      'Very long duration — plan accordingly',
      'Higher neurotoxic potential than MDMA at equivalent doses',
    ],
    harmReductionTips: [
      'Lower effective dose than MDMA — approach conservatively',
      'Do not redose based on MDMA experience — duration is much longer',
      'Same heat/hydration rules as MDMA apply',
    ],
    avoidWith: ['MAOIs', 'SSRIs', 'Cocaine', 'Amphetamine', 'MDMA'],
  },
};

export function normalise(input: string): string | null {
  const key = input.trim().toLowerCase();
  return ALIASES[key] ?? null;
}
