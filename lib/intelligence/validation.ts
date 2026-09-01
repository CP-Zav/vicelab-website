import type {
  ConfidenceAssessment,
  EvidenceBundle,
  EvidenceSourceRef,
  IntelligenceClaim,
} from './types';

export interface ContractIssue {
  path: string;
  message: string;
}

const ISO_DATE_TIME = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{1,3})?Z$/;

function requiredText(value: unknown, path: string, issues: ContractIssue[]) {
  if (typeof value !== 'string' || value.trim().length === 0) {
    issues.push({ path, message: 'must be a non-empty string' });
  }
}

function isoDate(value: unknown, path: string, issues: ContractIssue[], optional = false) {
  if (optional && value === undefined) return;
  if (typeof value !== 'string' || !ISO_DATE_TIME.test(value) || Number.isNaN(Date.parse(value))) {
    issues.push({ path, message: 'must be an ISO 8601 UTC timestamp' });
  }
}

export function validateConfidence(value: ConfidenceAssessment): ContractIssue[] {
  const issues: ContractIssue[] = [];
  if (!Number.isFinite(value.score) || value.score < 0 || value.score > 1) {
    issues.push({ path: 'confidence.score', message: 'must be between 0 and 1 inclusive' });
  }
  requiredText(value.method, 'confidence.method', issues);
  requiredText(value.rationale, 'confidence.rationale', issues);
  isoDate(value.assessedAt, 'confidence.assessedAt', issues);
  return issues;
}

export function validateSource(source: EvidenceSourceRef, index?: number): ContractIssue[] {
  const prefix = index === undefined ? 'source' : `sources[${index}]`;
  const issues: ContractIssue[] = [];
  requiredText(source.id, `${prefix}.id`, issues);
  requiredText(source.title, `${prefix}.title`, issues);
  isoDate(source.accessedAt, `${prefix}.accessedAt`, issues);
  isoDate(source.publishedAt, `${prefix}.publishedAt`, issues, true);
  if (source.url !== undefined) {
    try {
      const parsed = new URL(source.url);
      if (parsed.protocol !== 'https:') throw new Error('not https');
    } catch {
      issues.push({ path: `${prefix}.url`, message: 'must be a valid HTTPS URL' });
    }
  }
  return issues;
}

export function validateClaim(claim: IntelligenceClaim): ContractIssue[] {
  const issues: ContractIssue[] = [];
  requiredText(claim.id, 'claim.id', issues);
  requiredText(claim.subjectId, 'claim.subjectId', issues);
  requiredText(claim.predicate, 'claim.predicate', issues);
  requiredText(claim.provenance.createdBy, 'claim.provenance.createdBy', issues);
  requiredText(claim.provenance.lastUpdatedBy, 'claim.provenance.lastUpdatedBy', issues);
  isoDate(claim.provenance.createdAt, 'claim.provenance.createdAt', issues);
  isoDate(claim.provenance.lastUpdatedAt, 'claim.provenance.lastUpdatedAt', issues);
  isoDate(claim.freshness.checkedAt, 'claim.freshness.checkedAt', issues);
  isoDate(claim.freshness.validUntil, 'claim.freshness.validUntil', issues, true);
  isoDate(claim.review.reviewedAt, 'claim.review.reviewedAt', issues, true);
  isoDate(claim.review.nextReviewAt, 'claim.review.nextReviewAt', issues, true);
  issues.push(...validateConfidence(claim.confidence));

  if (claim.provenance.sourceIds.length === 0) {
    issues.push({ path: 'claim.provenance.sourceIds', message: 'must contain at least one source id' });
  }
  if (new Set(claim.provenance.sourceIds).size !== claim.provenance.sourceIds.length) {
    issues.push({ path: 'claim.provenance.sourceIds', message: 'must not contain duplicate ids' });
  }
  if (claim.review.status === 'approved' && (!claim.review.reviewedAt || !claim.review.reviewedBy)) {
    issues.push({ path: 'claim.review', message: 'approved claims require reviewedAt and reviewedBy' });
  }
  if (claim.freshness.validUntil && Date.parse(claim.freshness.validUntil) < Date.parse(claim.freshness.checkedAt)) {
    issues.push({ path: 'claim.freshness.validUntil', message: 'cannot precede checkedAt' });
  }
  if (Date.parse(claim.provenance.lastUpdatedAt) < Date.parse(claim.provenance.createdAt)) {
    issues.push({ path: 'claim.provenance.lastUpdatedAt', message: 'cannot precede createdAt' });
  }
  claim.uncertainties.forEach((uncertainty, index) => {
    requiredText(uncertainty.summary, `claim.uncertainties[${index}].summary`, issues);
  });
  return issues;
}

export function validateBundle(bundle: EvidenceBundle): ContractIssue[] {
  const issues = validateClaim(bundle.claim);
  bundle.sources.forEach((source, index) => issues.push(...validateSource(source, index)));
  const sourceIds = new Set(bundle.sources.map((source) => source.id));
  for (const sourceId of bundle.claim.provenance.sourceIds) {
    if (!sourceIds.has(sourceId)) {
      issues.push({ path: 'sources', message: `does not resolve provenance source id "${sourceId}"` });
    }
  }
  return issues;
}

