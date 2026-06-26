"use client";

// BeliefCard — one scannable, mobile-first, ADHD-friendly belief card.
// Information hierarchy: acute risk + practical decisions are always visible;
// mechanism + long-term context collapse behind a toggle. Deep-linkable by id.
import { useEffect, useRef, useState } from "react";
import { VerdictBadge } from "./VerdictBadge";
import { BeliefMetadata } from "./BeliefMetadata";
import { BeliefFactBlock } from "./BeliefFactBlock";
import { GoDeeperPanel } from "./GoDeeperPanel";
import type { Belief } from "@/lib/belief-engine/types";

export function BeliefCard({ belief }: { belief: Belief }) {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef<HTMLElement>(null);

  // Deep linking: expand and scroll to the card whose id matches the URL hash.
  useEffect(() => {
    const applyHash = () => {
      const hash = decodeURIComponent(window.location.hash.replace(/^#/, ""));
      if (hash === belief.id) {
        setExpanded(true);
        ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, [belief.id]);

  const panelId = `belief-${belief.id}-details`;

  return (
    <article
      ref={ref}
      id={belief.id}
      className="relative scroll-mt-24 rounded-card border border-white/[0.07] bg-white/[0.03] p-5 shadow-panel transition-all duration-300 hover:border-white/[0.12] sm:p-6"
    >
      {/* 1. You've probably heard... + 2. Verdict */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/30">
            You&apos;ve probably heard&hellip;
          </p>
          <h2 className="font-cinzel text-[1.35rem] leading-snug tracking-[0.01em] text-white">
            &ldquo;{belief.heardAs}&rdquo;
          </h2>
        </div>
        <VerdictBadge verdict={belief.verdict} className="mt-1 shrink-0" />
      </div>

      {/* 3. Here's what we actually know */}
      <section className="mt-5">
        <h3 className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-vl-blue">
          Here&apos;s what we actually know
        </h3>
        <p className="text-[15px] leading-relaxed text-white/70">{belief.whatWeKnow}</p>
      </section>

      {/* 4. What I'd want my mate to know */}
      <section className="mt-5">
        <h3 className="mb-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-vl-green">
          What I&apos;d want my mate to know
        </h3>
        <ul className="space-y-2">
          {belief.mateNotes.slice(0, 4).map((note, i) => (
            <li key={i} className="flex gap-2.5 text-[14px] leading-relaxed text-white/65">
              <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-vl-green/70" />
              <span>{note}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Collapsible: mechanism + long-term context (lower priority) */}
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        aria-controls={panelId}
        className="mt-5 inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-white/45 transition-colors hover:text-white/80"
      >
        {expanded ? "Show less" : "The full picture"}
        <svg
          className={`h-3.5 w-3.5 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {expanded && (
        <div id={panelId} className="mt-5 space-y-6 border-t border-white/[0.07] pt-5">
          {/* 5. Why people believe this */}
          <section>
            <h3 className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45">
              Why people believe this
            </h3>
            <p className="text-[14px] leading-relaxed text-white/60">{belief.whyBelieved}</p>
          </section>

          {/* 6. What's actually happening? */}
          <section>
            <h3 className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45">
              What&apos;s actually happening?
            </h3>
            <p className="text-[14px] leading-relaxed text-white/60">{belief.whatsHappening}</p>
          </section>

          {/* 7. Bet you didn't know... */}
          <BeliefFactBlock fact={belief.didYouKnow} />

          {/* 8. Go deeper */}
          <GoDeeperPanel beliefId={belief.id} links={belief.goDeeper} />
        </div>
      )}

      {/* Metadata */}
      <div className="mt-5 border-t border-white/[0.06] pt-4">
        <BeliefMetadata meta={belief.meta} />
      </div>
    </article>
  );
}
