"use client";
import { useMemo, useState } from "react";
import { DEMO_DOSSIERS, querySiv } from "@/lib/siv";
export function VaultExplorer() {
  const [query, setQuery] = useState(""); const dossiers = useMemo(() => querySiv(DEMO_DOSSIERS, { text: query }), [query]);
  return <div className="space-y-5">
    <label className="block max-w-xl"><span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.2em] text-[#7DF9FF]">Query vault index</span><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search name, alias, class or tag" className="w-full rounded-xl border border-[#7DF9FF]/20 bg-black/45 px-4 py-3 text-sm text-white outline-none transition focus:border-[#7DF9FF]/60" /></label>
    <div className="grid gap-4 md:grid-cols-2">{dossiers.map((d) => <article key={d.id} className="rounded-2xl border border-[#7DF9FF]/15 bg-[#0b0c11]/85 p-5">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2"><h3 className="font-cinzel text-xl tracking-[0.08em] text-[#E6C27A]">{d.canonicalName}</h3><span className="rounded-full border border-amber-300/25 bg-amber-300/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-amber-200">Demo · unreviewed</span></div>
      <p className="mb-4 text-sm leading-relaxed text-white/55">{d.summary}</p><dl className="grid grid-cols-2 gap-3 text-xs"><div><dt className="text-white/30">Aliases</dt><dd className="mt-1 text-white/70">{d.aliases.join(", ")}</dd></div><div><dt className="text-white/30">Class index</dt><dd className="mt-1 text-white/70">{d.classes.join(", ")}</dd></div><div><dt className="text-white/30">Evidence sources</dt><dd className="mt-1 text-white/70">{d.sources.length}</dd></div><div><dt className="text-white/30">Confidence · freshness</dt><dd className="mt-1 capitalize text-white/70">{d.confidence} · {d.freshness}</dd></div></dl>
      <div className="mt-4 rounded-xl border border-white/10 bg-black/25 p-3 text-xs leading-relaxed text-white/45">{d.claims[0]?.uncertainty}</div></article>)}</div>
    {!dossiers.length && <p className="rounded-xl border border-white/10 p-5 text-sm text-white/45">No indexed dossier matches that query.</p>}
  </div>;
}
