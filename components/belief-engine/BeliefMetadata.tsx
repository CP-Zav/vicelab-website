// BeliefMetadata — compact, scannable meta row for a belief. Server-safe.
import type { BeliefMeta } from "@/lib/belief-engine/types";

const CONFIDENCE_LABEL: Record<string, string> = {
  low: "Low confidence",
  moderate: "Moderate confidence",
  high: "High confidence",
};

export function BeliefMetadata({ meta }: { meta: BeliefMeta }) {
  const items: { label: string; value: string }[] = [
    { label: "Substance", value: meta.substances.join(", ") },
    { label: "Topic", value: meta.category },
    { label: "Confidence", value: CONFIDENCE_LABEL[meta.confidence] ?? meta.confidence },
    { label: "Reviewed", value: meta.lastReviewed },
  ];
  return (
    <dl className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[11px] text-white/35">
      {items.map((it) => (
        <div key={it.label} className="flex items-center gap-1.5">
          <dt className="uppercase tracking-[0.12em] text-white/25">{it.label}</dt>
          <dd className="text-white/50">{it.value}</dd>
        </div>
      ))}
    </dl>
  );
}
