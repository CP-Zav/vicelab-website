// VerdictBadge — reusable verdict pill (Section 2). Server-safe (no hooks).
import type { Verdict } from "@/lib/belief-engine/types";

const VERDICT_CONFIG: Record<Verdict, { label: string; className: string }> = {
  "generally-true":    { label: "Generally true",    className: "bg-vl-green/[0.12] text-vl-green border-vl-green/[0.26]" },
  "partly-true":       { label: "Partly true",       className: "bg-vg-teal/[0.12]  text-vg-teal  border-vg-teal/[0.26]" },
  "context-matters":   { label: "Context matters",   className: "bg-mx-gold/[0.12]  text-mx-gold  border-mx-gold/[0.28]" },
  "mostly-false":      { label: "Mostly false",      className: "bg-mx-ember/[0.12] text-mx-ember border-mx-ember/[0.30]" },
  "dangerously-false": { label: "Dangerously false", className: "bg-cp-pink/[0.14]  text-cp-pink  border-cp-pink/[0.32]" },
};

export function VerdictBadge({ verdict, className = "" }: { verdict: Verdict; className?: string }) {
  const cfg = VERDICT_CONFIG[verdict];
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full border ${cfg.className} ${className}`}
    >
      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-current" />
      {cfg.label}
    </span>
  );
}

export { VERDICT_CONFIG };
