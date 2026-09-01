# ASA Unified MVP Architecture

Status: implementation baseline

## Product hierarchy

ASA is the parent user experience for ViceLab's altered-state intelligence system.

- S.I.V. (Substance Intelligence Vault) is the evidence-aware substance vault inside ASA.
- MATRIX is the interaction and contextual-risk engine inside ASA.
- Cooked Pilot, VibeGuard, Node Zero and other ViceLab products consume intelligence through explicit contracts; they are not part of this MVP route shell.

Existing `/siv` and `/matrix` routes remain available for backwards compatibility. The ASA shell must make their parent relationship clear without visually flattening their distinct identities.

## MVP gates

1. ASA provides a coherent, mobile-first entry point to S.I.V. and MATRIX.
2. S.I.V. exposes structured dossiers with provenance, confidence, uncertainty, review state and freshness.
3. MATRIX accepts one to six substances or medications, evaluates the complete selected set, and incorporates health/context domains.
4. MATRIX may enumerate pair-level evidence internally, but public copy must not describe the product as pair-only.
5. Unknown, missing or stale evidence must increase uncertainty; absence of a recorded interaction is never presented as safety.
6. Seeded/demo content is labelled and cannot be represented as clinically validated production data.
7. Public outputs remain non-diagnostic, non-prescriptive and include appropriate emergency escalation language.

## Parallel ownership

| Branch | Ownership |
| --- | --- |
| `sol/asa-shell` | ASA shell, hierarchy and navigation |
| `sol/siv-vault` | S.I.V. domain layer and vault surface |
| `sol/matrix-engine` | MATRIX engine, health context and UI/API |
| `sol/evidence-contracts` | Shared provenance and safety contracts |
| `sol/asa-verification` | Automated checks and verification runbook |
| `sol/asa-unified-mvp` | Integration only |

## Readiness language

The unified build is an MVP/proof until all of the following are independently verified:

- backend persistence and access controls;
- evidence provenance and review workflow;
- interaction and comorbidity coverage;
- clinical/harm-reduction expert review;
- automated tests and production build;
- responsive and accessibility checks;
- deployment environment and monitoring.

