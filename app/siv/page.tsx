import type { Metadata } from "next";
import Link from "next/link";
import { Badge, Container, Eyebrow, Section } from "@/components/ui";
import { sivIndex } from "@/lib/siv";
import { VaultExplorer } from "./VaultExplorer";

export const metadata: Metadata = { title: "S.I.V. — Substance Intelligence Vault", description: "A provenance-first substance intelligence layer inside ASA." };
const model = [["Dossiers", "Names, aliases and indexed substance classes."], ["Claims", "Atomic statements with evidence links and uncertainty."], ["Sources", "Categorised provenance rather than invisible citations."], ["Review", "Draft, review and retirement states remain explicit."]];

export default function SIVPage() {
  return <div className="min-h-screen overflow-hidden bg-[#060708]">
    <section className="relative overflow-hidden pb-16 pt-28 lg:pb-20 lg:pt-36"><div className="siv-vault-grid absolute inset-0 pointer-events-none" /><Container><div className="relative max-w-4xl">
      <Link href="/asa" className="mb-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/38 transition hover:text-white/70">ASA <span aria-hidden="true">/</span> S.I.V.</Link>
      <div className="mb-5 flex flex-wrap items-center gap-3"><Eyebrow color="siv">ASA intelligence layer</Eyebrow><Badge variant="siv">MVP framework live</Badge></div>
      <h1 className="font-cinzel text-4xl tracking-[0.08em] text-gradient-siv sm:text-6xl">Substance Intelligence Vault</h1>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/60">S.I.V. is the provenance-first substance archive inside ASA. It separates what is claimed, where it came from, how certain it is, and whether a human has reviewed it.</p>
      <div className="mt-8 flex flex-wrap gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-white/45"><span>{sivIndex.length} demo dossiers</span><span aria-hidden="true">·</span><span>0 reviewed claims</span><span aria-hidden="true">·</span><span>clinical use locked</span></div>
    </div></Container></section>
    <Section border><Container><Eyebrow color="siv">Vault index</Eyebrow><h2 className="mb-3 font-cinzel text-2xl tracking-[0.08em] text-[#E6C27A] sm:text-3xl">Evidence before certainty</h2><p className="mb-8 max-w-2xl text-sm leading-relaxed text-white/45">These records are deliberately non-clinical interface fixtures. They demonstrate the contract without presenting unsourced interaction or health guidance as fact.</p><VaultExplorer /></Container></Section>
    <Section><Container><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{model.map(([title, body]) => <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.025] p-5"><h3 className="mb-2 font-mono text-xs uppercase tracking-[0.16em] text-[#7DF9FF]">{title}</h3><p className="text-sm leading-relaxed text-white/45">{body}</p></div>)}</div></Container></Section>
  </div>;
}
