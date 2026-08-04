# Happy Seeds Migration Baseline

**Status:** Active migration foundation
**Canonical source:** `happyseedsworkspace.zip` rescued 5 August 2026
**Target branch:** `happy-seeds-foundation`
**Production branch:** `main` remains protected until preview validation passes

## Locked direction

The Happy Seeds implementation is the canonical Vicelab website foundation. Existing Vicelab systems should be migrated into this visual and information architecture rather than rebuilding the website from scratch.

## Preserved from the rescued build

- Homepage sections: Hero, Culture, Crew Code Quiz, Harm Reduction, Community, Knowledge Hub Preview
- Knowledge Hub and Research & Evidence Centre
- `IntelligenceCard`
- `ResearchArticleCard`
- `KnowledgeHubData.ts`
- Research data and methodology documentation
- Mailchimp subscription API
- Vicelab Information Design System V1.0
- Next.js, Tailwind, Cloudflare and deployment configuration

## Migration rules

1. Inspect before creating.
2. Extend before replacing.
3. Make the smallest change that achieves the objective.
4. Reuse the established visual language.
5. Preserve provenance and evidence metadata.
6. Remove Happy Seeds platform-only hooks before production.
7. Validate a Vercel preview before merging to `main`.

## Immediate build sequence

1. Import the rescued workspace into this branch.
2. Remove `HappySeedsWatermark` and development annotation hooks.
3. Resolve package/build compatibility.
4. Deploy a Vercel preview from this branch.
5. Complete responsive and route checks.
6. Open and review the migration pull request.
7. Merge only after preview approval.
