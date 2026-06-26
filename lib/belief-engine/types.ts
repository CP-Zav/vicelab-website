// Belief Engine — domain types
// "Rumour Has It" is the front door to the Substance Intelligence Vault (SIV).
// Users arrive because of a belief and leave with understanding.

export type Verdict =
  | "generally-true"
  | "partly-true"
  | "context-matters"
  | "mostly-false"
  | "dangerously-false";

export type Confidence = "low" | "moderate" | "high";

export interface BeliefMeta {
  substances: string[];
  category: string;
  /** Human-readable review marker, e.g. "2026-06". */
  lastReviewed: string;
  confidence: Confidence;
}

export type GoDeeperKind = "siv" | "matrix" | "help" | "related";

export interface GoDeeperLink {
  kind: GoDeeperKind;
  label: string;
  href: string;
}

export interface Belief {
  /** Stable slug — used as the deep-link anchor id. Do not change once published. */
  id: string;
  /** Section 1 — "You've probably heard..." the belief exactly as people say it. */
  heardAs: string;
  /** Section 2 — Verdict badge value. */
  verdict: Verdict;
  /** Section 3 — "Here's what we actually know." Short, evidence-based. */
  whatWeKnow: string;
  /** Section 4 — "What I'd want my mate to know." Max 4 concise, festival-focused bullets, acute relevance first. */
  mateNotes: string[];
  /** Section 5 — "Why people believe this." Origin of the belief; never ridicules. */
  whyBelieved: string;
  /** Section 6 — "What's actually happening?" Plain-English mechanism. */
  whatsHappening: string;
  /** Section 7 — "Bet you didn't know..." Interesting verified fact (placeholder for now). */
  didYouKnow: string;
  meta: BeliefMeta;
  /** Section 8 — optional override for "Go deeper" links; GoDeeperPanel applies defaults otherwise. */
  goDeeper?: GoDeeperLink[];
}
