"use client";

import { useState } from "react";
import Link from "next/link";

type Region = "All regions" | "Europe" | "United Kingdom" | "Australia";
type Alert = {
  id: string; title: string; region: Exclude<Region, "All regions">;
  location: string; issuer: string; sourceUrl: string; publishedAt: string;
  reviewedAt: string; reviewDueAt: string; status: "active" | "withdrawn" | "archived";
  review: "approved"; pinned: boolean; reportedAs: string; finding: string;
  uncertainty: string; action: string; correction?: string;
};

// Deliberately empty until source evidence and editorial approval are verified.
// Provider links are resources, not imported alerts or partner integrations.
const alerts: Alert[] = [];
const regions: Region[] = ["All regions", "Europe", "United Kingdom", "Australia"];
const sources = [
  { name: "The Loop", region: "United Kingdom", href: "https://www.wearetheloop.org/drug-alerts", description: "Read the provider’s original public warnings." },
  { name: "EUDA", region: "Europe", href: "https://www.euda.europa.eu/topics/drug-checking_en", description: "Drug-checking context and European evidence. Not a live warning feed." },
];
const card = "rounded-2xl border border-white/20 bg-white/[0.04] p-6";
export default function SignalPage() {
  const [region, setRegion] = useState<Region>("All regions");
  const visible = alerts.filter(a => a.review === "approved" && a.status === "active" && (region === "All regions" || a.region === region))
    .sort((a,b) => Number(b.pinned)-Number(a.pinned) || Date.parse(b.publishedAt)-Date.parse(a.publishedAt));
  return (
    <div className="min-h-screen bg-[#08090f] px-5 pb-20 pt-32 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex flex-wrap items-center gap-3 text-sm">
          <Link href="/" className="text-cyan-300 underline underline-offset-4">ViceLab</Link>
          <span aria-hidden="true">/</span><span>Signal — Drug Alerts</span>
        </div>
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">Evidence above noise</p>
        <h1 className="text-5xl font-black sm:text-7xl">SIGNAL<span className="text-[#ff6680]">.</span></h1>
        <h2 className="mt-4 text-2xl font-bold">Drug alerts. Clear sources. What matters now.</h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/80">Warnings worth paying attention to, with where they apply, what was found and what remains unknown.</p>
        <div className="mt-8 rounded-2xl border-2 border-amber-300/70 bg-amber-300/10 p-6" role="status">
          <strong className="block text-amber-200">Coverage not yet verified</strong>
          <p className="mt-2 leading-relaxed">This hub is in development. No monitored feed or reviewed alert collection is connected yet. Check the original providers below. An empty list does not mean substances are safe.</p>
          <p className="mt-3 text-sm text-amber-100">Last successful source check: not established · Manually reviewed updates planned · No live integration</p>
        </div>
        <section className="mt-10" aria-labelledby="alerts-title">
          <h2 id="alerts-title" className="text-2xl font-bold">Pinned &amp; current warnings</h2>
          <fieldset className="my-5 flex flex-wrap gap-2">
            <legend className="mb-3 text-sm text-white/75">Choose an area. A warning’s location is not a boundary for its risk.</legend>
            {regions.map(r => <button key={r} type="button" aria-pressed={region===r} onClick={()=>setRegion(r)} className={"rounded-full border px-4 py-3 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 " + (region===r ? "border-cyan-300 bg-cyan-300 text-black" : "border-white/30 text-white hover:border-cyan-300")}>{r}</button>)}
          </fieldset>
          <div aria-live="polite">
            {visible.length === 0 ? <div className={card}><h3 className="text-xl font-bold">No reviewed alerts loaded for this view</h3><p className="mt-3 text-white/80">This is a coverage gap, not an all-clear. Use the source links while ViceLab’s review and delivery workflow is being established.</p></div> :
              visible.map(a => <article key={a.id} className={card + " mb-4 border-l-4 border-l-[#ff6680]"}>
                <p className="text-sm font-bold text-[#ff9aaa]">{a.pinned ? "PINNED WARNING" : "CURRENT WARNING"} · {a.location}</p>
                <h3 className="mt-2 text-2xl font-bold">{a.title}</h3>
                <dl className="mt-4 space-y-3"><div><dt className="font-bold">Reported as</dt><dd>{a.reportedAs}</dd></div><div><dt className="font-bold">Source finding</dt><dd>{a.finding}</dd></div><div><dt className="font-bold">What is unknown</dt><dd>{a.uncertainty}</dd></div><div><dt className="font-bold">What you can do</dt><dd>{a.action}</dd></div></dl>
                <p className="mt-4 text-sm">Published: {a.publishedAt} · Reviewed: {a.reviewedAt} · Review due: {a.reviewDueAt}</p>
                {a.correction && <p className="mt-3 border-t border-white/20 pt-3">Correction: {a.correction}</p>}
                <a href={a.sourceUrl} className="mt-4 inline-block text-cyan-300 underline">Read the original warning — {a.issuer}</a>
              </article>)}
          </div>
        </section>
        <section className="mt-12" aria-labelledby="sources-title">
          <h2 id="sources-title" className="text-2xl font-bold">Go straight to the source</h2>
          <p className="mt-3 text-white/75">Europe-first development, with Australian coverage retained. Source links do not imply affiliation, data access or service availability near you.</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">{sources.map(s=><a key={s.name} href={s.href} className={card + " block hover:border-cyan-300 focus-visible:outline focus-visible:outline-cyan-300"}><p className="text-sm text-cyan-300">{s.region}</p><h3 className="mt-2 text-xl font-bold">{s.name} ↗</h3><p className="mt-3 text-white/80">{s.description}</p></a>)}</div>
        </section>
        <section className={card + " mt-10"} aria-labelledby="limits-title">
          <h2 id="limits-title" className="text-xl font-bold">An alert cannot identify your sample</h2>
          <p className="mt-3 leading-relaxed text-white/80">Matching a name, colour, logo or location does not establish contents. Drug checking can reduce uncertainty, but does not establish that a substance is safe. ViceLab does not currently test samples.</p>
          <a className="mt-4 inline-block text-cyan-300 underline" href="https://www.wearetheloop.org/drug-checking">Understand drug checking and check provider information ↗</a>
        </section>
        <p className="mt-8 text-sm text-white/70">Source corrections or a broken link? <a href="mailto:hello@thevicelab.com?subject=Signal%20source%20correction" className="text-cyan-300 underline">Contact ViceLab</a>. This inbox is not an emergency service.</p>
      </div>
    </div>
  );
}
