// GoDeeperPanel — "Go deeper" links (Section 8). Server-safe.
// Defaults to the four standard destinations; pass `links` to override.
import Link from "next/link";
import { ArrowRight } from "@/components/ui";
import type { GoDeeperLink } from "@/lib/belief-engine/types";

function defaultLinks(): GoDeeperLink[] {
  return [
    { kind: "siv", label: "Substance Intelligence Vault", href: "/siv" },
    { kind: "matrix", label: "Matrix", href: "/matrix" },
    { kind: "help", label: "Get Help", href: "/help" },
    { kind: "related", label: "Related Beliefs", href: "/rumour-has-it" },
  ];
}

export function GoDeeperPanel({ links }: { beliefId?: string; links?: GoDeeperLink[] }) {
  const items = links ?? defaultLinks();
  return (
    <section>
      <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/40">Go deeper</h3>
      <div className="grid grid-cols-2 gap-2">
        {items.map((l) => (
          <Link
            key={l.kind}
            href={l.href}
            className="group flex items-center justify-between gap-2 rounded-lg border border-white/[0.08] bg-white/[0.02] px-3 py-2.5 text-[13px] text-white/55 transition-all hover:border-white/20 hover:bg-white/[0.05] hover:text-white/85"
          >
            <span className="truncate">{l.label}</span>
            <ArrowRight className="opacity-0 transition-opacity group-hover:opacity-60" />
          </Link>
        ))}
      </div>
    </section>
  );
}
