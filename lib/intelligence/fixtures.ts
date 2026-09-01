import type { EvidenceBundle } from './types';

/** Synthetic fixture: validates contract behaviour only and makes no clinical claim. */
export const validSyntheticBundle: EvidenceBundle<string> = {
  claim: {
    id: 'claim:fixture:1',
    subjectId: 'subject:fixture',
    predicate: 'fixture_status',
    value: 'contract-test-only',
    evidenceGrade: 'A',
    confidence: {
      score: 0.9,
      band: 'high',
      method: 'fixture',
      assessedAt: '2026-01-01T00:00:00Z',
      rationale: 'Synthetic value used to exercise deterministic gates.',
    },
    maturity: 'established',
    provenance: {
      sourceIds: ['source:fixture:1'],
      createdAt: '2026-01-01T00:00:00Z',
      createdBy: 'fixture',
      lastUpdatedAt: '2026-01-01T00:00:00Z',
      lastUpdatedBy: 'fixture',
      derivation: 'reported',
    },
    uncertainties: [],
    review: {
      status: 'approved',
      reviewedAt: '2026-01-01T00:00:00Z',
      reviewedBy: 'fixture-reviewer',
    },
    freshness: {
      checkedAt: '2026-01-01T00:00:00Z',
      validUntil: '2099-01-01T00:00:00Z',
    },
    datasetStatus: 'production',
    publicRelease: 'allowed',
  },
  sources: [{
    id: 'source:fixture:1',
    kind: 'unknown',
    title: 'Synthetic contract fixture',
    accessedAt: '2026-01-01T00:00:00Z',
  }],
};
