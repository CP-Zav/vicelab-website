import type { SubstanceDossier } from "./types";

// Interface fixtures only. They deliberately contain no clinical assertions.
export const DEMO_DOSSIERS: SubstanceDossier[] = [
  {
    id: "mdma", canonicalName: "MDMA", aliases: ["ecstasy", "molly", "mandy"], classes: ["entactogen", "stimulant"],
    summary: "Demo identity record used to exercise the Substance Intelligence Vault dossier and review workflow.",
    claims: [{ id: "mdma-demo-identity", topic: "identity", statement: "This is a seeded interface fixture, not a reviewed clinical claim.", confidence: "unassessed", sourceIds: [], uncertainty: "No evidence has been attached. Do not use this fixture for health decisions.", reviewState: "seeded-demo" }],
    sources: [], reviewState: "seeded-demo", confidence: "unassessed", freshness: "unassessed", updatedAt: "2026-09-01", tags: ["demo", "archive-seed"], demo: true,
  },
  {
    id: "cocaine", canonicalName: "Cocaine", aliases: ["coke"], classes: ["stimulant"],
    summary: "Demo identity record used to test search, indexing, provenance gaps, and review-state display.",
    claims: [{ id: "cocaine-demo-identity", topic: "identity", statement: "This is a seeded interface fixture, not a reviewed clinical claim.", confidence: "unassessed", sourceIds: [], uncertainty: "No evidence has been attached. Do not use this fixture for health decisions.", reviewState: "seeded-demo" }],
    sources: [], reviewState: "seeded-demo", confidence: "unassessed", freshness: "unassessed", updatedAt: "2026-09-01", tags: ["demo", "archive-seed"], demo: true,
  },
];
