# ASA Unified MVP verification runbook

This runbook verifies the architecture baseline for the ASA parent experience and its S.I.V. and MATRIX children. A green run demonstrates an MVP contract check; it does not establish clinical validation or production readiness.

## Automated gate

From the repository root:

```bash
npm ci
npm run verify:asa
npm run typecheck
npm run build
```

`npm run verify:asa:all` combines the contract check and production build. Keep `typecheck` available as a faster diagnostic during development; `next build` also checks types.

The contract check covers:

- `/asa`, `/siv`, and `/matrix` route source presence;
- ASA parent/child language and navigation;
- canonical `S.I.V. — Substance Intelligence Vault` naming;
- explicit one-to-six MATRIX bounds, complete-set evaluation, and accepted health/comorbidity context;
- provenance, confidence, uncertainty, review state, and freshness labels;
- unknown-evidence, safety-limitation, emergency-escalation, and demo-data language;
- forbidden production or clinical-readiness claims;
- resolution of root-relative image and CSS asset references;
- a static mobile-overflow guard.

Static checks deliberately inspect contracts and public copy rather than clinical correctness. Pair-level evidence may exist internally, but the complete submitted set and health context must affect the public result.

## Manual responsive and accessibility gate

Run `npm run dev`, then inspect `/asa`, `/siv`, and `/matrix` at each viewport:

| Viewport | Required result |
| --- | --- |
| 320 × 568 | No horizontal page scroll; controls remain reachable; headings and safety labels do not clip. |
| 375 × 667 | Parent/child navigation is obvious without relying on hover. |
| 390 × 844 | Input, evidence, uncertainty, and escalation content remains in reading order. |
| 768 × 1024 | No mobile/desktop breakpoint collision or oversized fixed-width artwork. |
| 1440 × 900 | Content remains bounded and hierarchy is not visually flattened. |

For every viewport:

1. In the browser console, run `document.documentElement.scrollWidth <= document.documentElement.clientWidth`. It must return `true`.
2. Traverse all interactive controls using keyboard only. Focus must be visible; focus order must match reading order.
3. Zoom to 200%. Text and controls must remain readable without two-dimensional scrolling.
4. Confirm meaningful images have useful alternative text and decorative images are hidden from assistive technology.
5. Confirm ASA clearly contains S.I.V. and MATRIX while each child retains its own name and visual identity.
6. Confirm MATRIX permits one through six substance/medication entries and exposes health/comorbidity context.
7. Confirm missing, unknown, or stale evidence increases uncertainty and never becomes a safety assurance.
8. Confirm emergency escalation is immediately visible in high-risk output and outputs remain non-diagnostic and non-prescriptive.

Record the commit SHA, browser/version, viewport results, keyboard result, and any screenshots in the release evidence. A failed item blocks readiness language but need not block an explicitly labelled internal proof review.

## Baseline record — 1 September 2026

- First build attempt: blocked before compilation because dependencies were not installed (`next: not found`). This was an environment/setup failure.
- After `npm ci`: `npm run build` passed compilation, type checking, static generation, and route generation.
- Existing warning: `app/quiz/QuizExperience.tsx` uses a raw `<img>` at line 276 (`@next/next/no-img-element`). It is outside the ASA verification lane and does not fail the build.
- Existing routes generated successfully: `/asa`, `/siv`, `/matrix`, and `/api/matrix-asa`.
- The contract check is expected to expose MVP acceptance gaps until the parallel ASA, S.I.V., MATRIX, and evidence branches are integrated. These are product-baseline findings, not failures introduced by verification tooling.
