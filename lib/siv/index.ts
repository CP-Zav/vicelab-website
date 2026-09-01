import { DEMO_DOSSIERS } from "./demo-data";
import type { SivConfidence, SivIndexEntry, SivQuery, SubstanceDossier } from "./types";
export * from "./types";
export { DEMO_DOSSIERS } from "./demo-data";
const confidenceRank: Record<SivConfidence, number> = { unassessed: 0, low: 1, moderate: 2, high: 3 };
export function createSivIndex(dossiers: readonly SubstanceDossier[]): SivIndexEntry[] { return dossiers.map((d) => ({ id: d.id, canonicalName: d.canonicalName, aliases: [...d.aliases], classes: [...d.classes], reviewState: d.reviewState, confidence: d.confidence, freshness: d.freshness, claimCount: d.claims.length, sourcedClaimCount: d.claims.filter((claim) => claim.sourceIds.length > 0).length, demo: d.demo })); }
export function querySiv(dossiers: readonly SubstanceDossier[], query: SivQuery = {}): SubstanceDossier[] {
  const needle = query.text?.trim().toLocaleLowerCase(); const minimum = confidenceRank[query.minimumConfidence ?? "unassessed"];
  return dossiers.filter((d) => {
    if (d.demo && query.includeDemo === false) return false;
    if (confidenceRank[d.confidence] < minimum) return false;
    if (query.reviewStates?.length && !query.reviewStates.includes(d.reviewState)) return false;
    if (query.classes?.length && !query.classes.every((value) => d.classes.includes(value))) return false;
    if (query.topics?.length && !query.topics.some((topic) => d.claims.some((claim) => claim.topic === topic))) return false;
    if (!needle) return true;
    return [d.canonicalName, ...d.aliases, ...d.classes, ...d.tags].join(" ").toLocaleLowerCase().includes(needle);
  });
}
export function findSivDossier(idOrAlias: string, dossiers: readonly SubstanceDossier[] = DEMO_DOSSIERS) { const needle = idOrAlias.trim().toLocaleLowerCase(); return dossiers.find((d) => d.id === needle || d.canonicalName.toLocaleLowerCase() === needle || d.aliases.some((alias) => alias.toLocaleLowerCase() === needle)); }
export const sivIndex = createSivIndex(DEMO_DOSSIERS);
