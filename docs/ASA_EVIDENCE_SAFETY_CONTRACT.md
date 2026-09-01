# ASA evidence and public-output contract

This contract is the shared boundary between ASA's knowledge layer, S.I.V.'s records, and MATRIX's derived outputs. It contains no clinical facts and does not assign evidence grades automatically.

## Required model

Every publishable atomic claim must carry:

- resolvable provenance and source metadata;
- an explicit evidence grade and separately assessed confidence;
- claim maturity, known uncertainty and review state;
- a freshness check (and a validity deadline wherever the owning domain requires one);
- an explicit public-release decision.
- an explicit production or seeded/demo status.

Grades express the strength of the evidence base. Confidence records the documented assessment of this particular claim. Neither substitutes for the other, and a confidence score is not a probability that a claim is true. Grade meanings and grading methodology must be approved separately by the clinical/evidence owner before real records are graded.

## Public-output gates

`evaluatePublication` fails closed and returns machine-readable block codes. The default modes become stricter from `informational` to `risk_summary` to `urgent_safety`. An output renderer must:

1. publish only when `allowed` is true;
2. retain every `requiredDisclosure` beside the claim, not behind an interaction;
3. never turn a blocked claim into advice through paraphrase or model-generated prose;
4. show contested evidence and uncertainty plainly;
5. keep emergency escalation copy outside this evidence gate, using separately approved static safety content.

Every allowed decision also returns stable notice keys for non-diagnostic, non-prescriptive and emergency-escalation copy. Renderers must resolve all three through approved copy. Seeded/demo claims are visibly disclosed in informational views and are blocked from risk-summary and urgent-safety outputs.

Unknown, missing, stale or unresolved evidence is not neutral. It blocks output where required and must be represented by consumers as increased uncertainty; it must never be translated into "no known risk" or an assurance of safety.

Policies are application defaults, not clinical validation. The clinical/evidence owner must approve thresholds, allowed grades, maturity states, freshness windows and emergency copy before production.

## Production gates

- A controlled evidence-grade rubric and reviewer eligibility policy are approved.
- Every provenance ID resolves to an immutable source snapshot or auditable source record.
- Review identity and timestamps are server-generated and protected from public-client writes.
- Domain-specific freshness windows are defined; records without required deadlines are blocked upstream.
- MATRIX preserves the IDs of all input claims and emits separate provenance for derived claims.
- S.I.V. stores atomic claims rather than treating an entire profile as one evidence unit.
- Policy and validator fixtures cover each block code, including stale, superseded, contested and material-uncertainty cases.
- Audit logs record the policy version and publication decision used for each rendered output.
- A qualified human completes safety review; passing TypeScript checks is not clinical approval.

## Integration

Import from `@/lib/intelligence`. S.I.V. can persist `EvidenceBundle` records. MATRIX can request claims through `IntelligenceRepository`, retain claim/source IDs in its result provenance, and call `evaluatePublication` on every public-facing derived statement. Consumers should not mutate claims in place; create a new version and point the prior record's `supersededByClaimId` to it.

The framework-free deterministic check in `scripts/intelligence-contract-check.ts` exercises allowed, stale, demo and materially uncertain decisions without introducing test dependencies.
