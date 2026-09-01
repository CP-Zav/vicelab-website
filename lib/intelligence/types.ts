/** Shared, domain-neutral evidence metadata for ASA, S.I.V. and MATRIX. */
export type IsoDateTime = string;

export type EvidenceSourceKind =
  | 'systematic_review'
  | 'clinical_guideline'
  | 'regulatory_notice'
  | 'peer_reviewed_study'
  | 'drug_checking_result'
  | 'surveillance_dataset'
  | 'case_report'
  | 'expert_consensus'
  | 'field_report'
  | 'lived_experience_report'
  | 'secondary_summary'
  | 'unknown';

export type EvidenceGrade = 'A' | 'B' | 'C' | 'D' | 'ungraded';
export type ConfidenceBand = 'very_low' | 'low' | 'moderate' | 'high';
export type ClaimMaturity =
  | 'observed'
  | 'emerging'
  | 'corroborated'
  | 'established'
  | 'contested'
  | 'retracted';
export type ReviewStatus =
  | 'draft'
  | 'in_review'
  | 'approved'
  | 'changes_requested'
  | 'superseded'
  | 'withdrawn';
export type UncertaintyKind =
  | 'identity'
  | 'dose'
  | 'route'
  | 'timing'
  | 'population'
  | 'context'
  | 'interaction'
  | 'conflicting_evidence'
  | 'data_gap'
  | 'other';

export interface EvidenceSourceRef {
  id: string;
  kind: EvidenceSourceKind;
  title: string;
  publisher?: string;
  url?: string;
  publishedAt?: IsoDateTime;
  accessedAt: IsoDateTime;
  locator?: string;
}

export interface Provenance {
  sourceIds: string[];
  createdAt: IsoDateTime;
  createdBy: string;
  lastUpdatedAt: IsoDateTime;
  lastUpdatedBy: string;
  derivation: 'quoted' | 'extracted' | 'calculated' | 'synthesised' | 'reported';
  transformationNote?: string;
}

export interface ConfidenceAssessment {
  /** Inclusive 0..1 score. It must not be presented to users as probability of truth. */
  score: number;
  band: ConfidenceBand;
  method: string;
  assessedAt: IsoDateTime;
  rationale: string;
}

export interface Uncertainty {
  kind: UncertaintyKind;
  summary: string;
  material: boolean;
  mitigation?: string;
}

export interface ReviewRecord {
  status: ReviewStatus;
  reviewedAt?: IsoDateTime;
  reviewedBy?: string;
  rationale?: string;
  nextReviewAt?: IsoDateTime;
}

export interface Freshness {
  checkedAt: IsoDateTime;
  validUntil?: IsoDateTime;
  supersededByClaimId?: string;
}

export interface IntelligenceClaim<T = unknown> {
  id: string;
  subjectId: string;
  predicate: string;
  value: T;
  evidenceGrade: EvidenceGrade;
  confidence: ConfidenceAssessment;
  maturity: ClaimMaturity;
  provenance: Provenance;
  uncertainties: Uncertainty[];
  review: ReviewRecord;
  freshness: Freshness;
  datasetStatus: 'seeded_demo' | 'production';
  /** Explicitly blocks public output even if every other gate passes. */
  publicRelease: 'allowed' | 'restricted';
}

export interface EvidenceBundle<T = unknown> {
  claim: IntelligenceClaim<T>;
  sources: EvidenceSourceRef[];
}

export type PublicOutputMode = 'informational' | 'risk_summary' | 'urgent_safety';

export interface PublicOutputPolicy {
  mode: PublicOutputMode;
  allowedGrades: EvidenceGrade[];
  allowedMaturity: ClaimMaturity[];
  minimumConfidence: number;
  requireApprovedReview: boolean;
  requireSourceCoverage: boolean;
  blockExpired: boolean;
  blockMaterialUncertainty: boolean;
}

export type PublicationBlockCode =
  | 'INVALID_CONTRACT'
  | 'RELEASE_RESTRICTED'
  | 'REVIEW_NOT_APPROVED'
  | 'GRADE_NOT_ALLOWED'
  | 'MATURITY_NOT_ALLOWED'
  | 'CONFIDENCE_TOO_LOW'
  | 'SOURCE_MISSING'
  | 'SOURCE_NOT_RESOLVED'
  | 'STALE'
  | 'SUPERSEDED'
  | 'NON_PRODUCTION_DATA'
  | 'MATERIAL_UNCERTAINTY';

export interface PublicationDecision {
  allowed: boolean;
  blocks: { code: PublicationBlockCode; detail: string }[];
  /** Disclosures that a renderer must keep adjacent to an allowed claim. */
  requiredDisclosures: string[];
  /** Stable keys for separately approved copy that a renderer must add. */
  requiredSafetyNotices: ('non_diagnostic' | 'non_prescriptive' | 'emergency_escalation')[];
}

/** Minimum adapter surface expected from S.I.V. or MATRIX persistence. */
export interface IntelligenceRepository {
  getClaim<T = unknown>(claimId: string): Promise<IntelligenceClaim<T> | null>;
  getSources(sourceIds: string[]): Promise<EvidenceSourceRef[]>;
}
