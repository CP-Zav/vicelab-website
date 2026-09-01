import type {
  EvidenceBundle,
  PublicationDecision,
  PublicOutputMode,
  PublicOutputPolicy,
} from './types';
import { validateBundle } from './validation';

export const PUBLIC_OUTPUT_POLICIES: Record<PublicOutputMode, PublicOutputPolicy> = {
  informational: {
    mode: 'informational',
    allowedGrades: ['A', 'B', 'C'],
    allowedMaturity: ['corroborated', 'established', 'contested'],
    minimumConfidence: 0.5,
    requireApprovedReview: true,
    requireSourceCoverage: true,
    blockExpired: true,
    blockMaterialUncertainty: false,
  },
  risk_summary: {
    mode: 'risk_summary',
    allowedGrades: ['A', 'B'],
    allowedMaturity: ['corroborated', 'established', 'contested'],
    minimumConfidence: 0.7,
    requireApprovedReview: true,
    requireSourceCoverage: true,
    blockExpired: true,
    blockMaterialUncertainty: true,
  },
  urgent_safety: {
    mode: 'urgent_safety',
    allowedGrades: ['A', 'B'],
    allowedMaturity: ['corroborated', 'established'],
    minimumConfidence: 0.8,
    requireApprovedReview: true,
    requireSourceCoverage: true,
    blockExpired: true,
    blockMaterialUncertainty: true,
  },
};

export function evaluatePublication(
  bundle: EvidenceBundle,
  mode: PublicOutputMode,
  now: Date = new Date(),
  override?: Partial<PublicOutputPolicy>,
): PublicationDecision {
  const policy = { ...PUBLIC_OUTPUT_POLICIES[mode], ...override, mode };
  const { claim, sources } = bundle;
  const blocks: PublicationDecision['blocks'] = [];
  const disclosures: string[] = [];
  const contractIssues = validateBundle(bundle);

  if (contractIssues.length > 0) {
    blocks.push({ code: 'INVALID_CONTRACT', detail: contractIssues.map((issue) => `${issue.path}: ${issue.message}`).join('; ') });
  }
  if (claim.publicRelease !== 'allowed') blocks.push({ code: 'RELEASE_RESTRICTED', detail: 'Claim is not cleared for public release.' });
  if (policy.requireApprovedReview && claim.review.status !== 'approved') blocks.push({ code: 'REVIEW_NOT_APPROVED', detail: `Review status is ${claim.review.status}.` });
  if (!policy.allowedGrades.includes(claim.evidenceGrade)) blocks.push({ code: 'GRADE_NOT_ALLOWED', detail: `Evidence grade ${claim.evidenceGrade} is below this output gate.` });
  if (!policy.allowedMaturity.includes(claim.maturity)) blocks.push({ code: 'MATURITY_NOT_ALLOWED', detail: `Claim maturity ${claim.maturity} is not eligible.` });
  if (claim.confidence.score < policy.minimumConfidence) blocks.push({ code: 'CONFIDENCE_TOO_LOW', detail: `Confidence score is below ${policy.minimumConfidence}.` });
  if (claim.provenance.sourceIds.length === 0) blocks.push({ code: 'SOURCE_MISSING', detail: 'No evidence source is linked.' });

  if (policy.requireSourceCoverage) {
    const resolved = new Set(sources.map((source) => source.id));
    const missing = claim.provenance.sourceIds.filter((id) => !resolved.has(id));
    if (missing.length > 0) blocks.push({ code: 'SOURCE_NOT_RESOLVED', detail: `Unresolved source ids: ${missing.join(', ')}.` });
  }
  if (claim.freshness.supersededByClaimId) blocks.push({ code: 'SUPERSEDED', detail: `Superseded by ${claim.freshness.supersededByClaimId}.` });
  if (claim.datasetStatus !== 'production' && mode !== 'informational') {
    blocks.push({ code: 'NON_PRODUCTION_DATA', detail: 'Seeded/demo evidence cannot power public risk or urgent-safety output.' });
  }
  if (policy.blockExpired && claim.freshness.validUntil && Date.parse(claim.freshness.validUntil) < now.getTime()) {
    blocks.push({ code: 'STALE', detail: `Freshness expired at ${claim.freshness.validUntil}.` });
  }
  const material = claim.uncertainties.filter((uncertainty) => uncertainty.material);
  if (policy.blockMaterialUncertainty && material.length > 0) {
    blocks.push({ code: 'MATERIAL_UNCERTAINTY', detail: material.map((item) => item.summary).join('; ') });
  }

  disclosures.push(`Evidence grade ${claim.evidenceGrade}; confidence ${claim.confidence.band}.`);
  if (claim.datasetStatus === 'seeded_demo') disclosures.push('Seeded/demo content — not clinically validated production data.');
  if (claim.maturity === 'contested') disclosures.push('Evidence is contested; competing interpretations must be shown.');
  if (claim.uncertainties.length > 0) disclosures.push(`Known uncertainty: ${claim.uncertainties.map((item) => item.summary).join('; ')}`);
  disclosures.push(`Evidence last checked ${claim.freshness.checkedAt}.`);

  return {
    allowed: blocks.length === 0,
    blocks,
    requiredDisclosures: disclosures,
    requiredSafetyNotices: ['non_diagnostic', 'non_prescriptive', 'emergency_escalation'],
  };
}
