// BeliefFactBlock — "Bet you didn't know..." (Section 7). Server-safe.
import type { ReactNode } from "react";

export function BeliefFactBlock({ fact, className = "" }: { fact: ReactNode; className?: string }) {
  return (
    <section className={`rounded-xl border border-siv-ice/[0.18] bg-siv-slate/[0.08] p-4 ${className}`}>
      <h3 className="mb-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-siv-ice">
        <svg className="h-3.5 w-3.5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M12 2l1.7 5.6L19 9l-5.3 1.4L12 16l-1.7-5.6L5 9l5.3-1.4z" />
        </svg>
        Bet you didn&apos;t know&hellip;
      </h3>
      <p className="text-[14px] leading-relaxed text-white/65">{fact}</p>
    </section>
  );
}
