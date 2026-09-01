export type SivConfidence = "unassessed" | "low" | "moderate" | "high";
export type SivReviewState = "seeded-demo" | "draft" | "in-review" | "reviewed" | "retired";
export type SivFreshness = "unassessed" | "current" | "review-due" | "stale";
export type SivSourceCategory = "clinical-guideline" | "government" | "peer-reviewed" | "drug-checking" | "toxicology" | "community-report" | "internal-note";

export interface SivSource { id: string; category: SivSourceCategory; title: string; publisher?: string; url?: string; publishedAt?: string; accessedAt?: string; note?: string; }
export interface SivClaim { id: string; topic: "identity" | "appearance" | "effects" | "timeline" | "context" | "risk-signal" | "harm-reduction"; statement: string; confidence: SivConfidence; sourceIds: string[]; uncertainty: string; reviewState: SivReviewState; lastReviewedAt?: string; }
export interface SubstanceDossier { id: string; canonicalName: string; aliases: string[]; classes: string[]; summary: string; claims: SivClaim[]; sources: SivSource[]; reviewState: SivReviewState; confidence: SivConfidence; freshness: SivFreshness; updatedAt: string; reviewDueAt?: string; tags: string[]; demo: boolean; }
export interface SivQuery { text?: string; classes?: string[]; topics?: SivClaim["topic"][]; reviewStates?: SivReviewState[]; minimumConfidence?: SivConfidence; includeDemo?: boolean; }
export interface SivIndexEntry { id: string; canonicalName: string; aliases: string[]; classes: string[]; reviewState: SivReviewState; confidence: SivConfidence; freshness: SivFreshness; claimCount: number; sourcedClaimCount: number; demo: boolean; }
