export type Severity = 'low' | 'moderate' | 'high' | 'critical';

export type InteractionType =
  | 'cns_depression_stacking'
  | 'serotonergic_overload'
  | 'stimulant_synergy'
  | 'cardiovascular_strain'
  | 'respiratory_depression'
  | 'psychedelic_amplification'
  | 'hyperthermia_risk'
  | 'dissociative_potentiation'
  | 'cocaethylene_formation';

export interface Interaction {
  combination: string[];
  type: InteractionType;
  severity: Severity;
  description: string;
}

export interface SubstanceProfile {
  canonicalName: string;
  class: string[];
  timeline: { onset: string; peak: string; duration: string };
  subjectiveEffects: string[];
  physicalEffects: string[];
  behavioralRisks: string[];
  harmReductionTips: string[];
  avoidWith: string[];
}

export interface AnalysisInput {
  substances: string[];
}

export interface AnalysisResult {
  riskLevel: Severity;
  interactions: Interaction[];
  effects: string[];
  guidance: {
    selfManagement: string[];
    avoid: string[];
  };
  redFlags: string[];
  seekHelpIf: string[];
  timeline: { substance: string; onset: string; peak: string; duration: string }[];
  notes: string[];
}
