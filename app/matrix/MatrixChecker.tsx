"use client";

import { useState } from "react";
import type { AnalysisResult, HealthDomain } from "@/lib/risk-matrix";

const SUBSTANCES = ["MDMA", "Alcohol", "Cannabis", "Cocaine", "Ketamine", "Amphetamine", "LSD", "Psilocybin", "GHB", "Benzodiazepines", "Opioids", "SSRIs", "MAOIs", "Mephedrone", "2-CB", "DMT", "Nitrous Oxide", "Caffeine", "MDA"];
const CONTEXTS: Array<[HealthDomain, string]> = [
  ["cardiovascular", "Heart or blood-pressure condition"],
  ["respiratory", "Breathing or lung condition"],
  ["seizure", "Seizure history"],
  ["liver", "Liver condition"],
  ["kidney", "Kidney condition"],
  ["mental_health", "Mental-health condition"],
  ["pregnancy", "Pregnancy"],
  ["sleep_deprivation", "Sleep deprivation"],
  ["dehydration_or_heat", "Dehydration, heat or exertion"],
];

export function MatrixChecker() {
  const [selected, setSelected] = useState<string[]>([]);
  const [domains, setDomains] = useState<HealthDomain[]>([]);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function toggleSubstance(name: string) {
    setResult(null);
    setSelected(current => current.includes(name) ? current.filter(item => item !== name) : current.length < 6 ? [...current, name] : current);
  }

  function toggleDomain(domain: HealthDomain) {
    setResult(null);
    setDomains(current => current.includes(domain) ? current.filter(item => item !== domain) : [...current, domain]);
  }

  async function runAssessment() {
    if (!selected.length) return setError("Select at least one substance or medication.");
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ substances: selected, healthProfile: { domains } }),
      });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.error ?? "Assessment failed.");
      setResult(payload);
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Assessment failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section aria-labelledby="matrix-checker-title" className="rounded-[34px] border border-[#b7ff54]/20 bg-[#06100f]/90 p-5 sm:p-7">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-[#b7ff54]">Complete-set assessment</p>
          <h2 id="matrix-checker-title" className="mt-2 font-cinzel text-2xl text-[#e7e1d0]">Choose up to six inputs</h2>
        </div>
        <p className="text-sm text-white/55">{selected.length}/6 selected</p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2" aria-label="Substances and medications">
        {SUBSTANCES.map(name => {
          const active = selected.includes(name);
          return <button key={name} type="button" aria-pressed={active} disabled={!active && selected.length === 6} onClick={() => toggleSubstance(name)} className={`rounded-full border px-3 py-2 text-sm transition ${active ? "border-[#b7ff54] bg-[#b7ff54]/15 text-white" : "border-white/15 text-white/60 hover:border-white/35 disabled:opacity-35"}`}>{name}</button>;
        })}
      </div>

      <fieldset className="mt-7">
        <legend className="text-sm font-semibold text-white/80">Health and current context (optional)</legend>
        <p className="mt-1 text-xs leading-relaxed text-white/45">Only select what you are comfortable disclosing. These factors modify uncertainty; they do not create a diagnosis.</p>
        <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {CONTEXTS.map(([domain, label]) => <label key={domain} className="flex items-start gap-2 rounded-xl border border-white/10 p-3 text-sm text-white/65"><input type="checkbox" checked={domains.includes(domain)} onChange={() => toggleDomain(domain)} className="mt-0.5 accent-[#b7ff54]" />{label}</label>)}
        </div>
      </fieldset>

      <button type="button" onClick={runAssessment} disabled={loading || !selected.length} className="mt-6 rounded-full bg-[#b7ff54] px-5 py-3 text-sm font-bold text-[#071006] disabled:opacity-45">{loading ? "Assessing…" : "Assess full selection"}</button>
      {error && <p role="alert" className="mt-4 text-sm text-red-300">{error}</p>}

      {result && <div aria-live="polite" className="mt-7 space-y-5 border-t border-white/10 pt-6">
        <div className="flex flex-wrap items-center gap-3"><span className="rounded-full border border-[#b7ff54]/40 px-3 py-1 text-xs uppercase tracking-wider text-[#b7ff54]">{result.riskLevel} signal</span><p className="text-sm text-white/60">{result.assessmentScope.selectedCount} inputs assessed together · {result.assessmentScope.combinationsChecked} component combinations checked</p></div>
        {result.interactions.length > 0 && <div><h3 className="font-semibold text-white">Interaction and stacking findings</h3><ul className="mt-2 space-y-2">{result.interactions.map((item, index) => <li key={`${item.type}-${index}`} className="rounded-xl bg-white/[0.04] p-3 text-sm leading-relaxed text-white/65"><strong className="text-white/85">{item.combination.join(" + ")} · {item.severity}</strong><br />{item.description}</li>)}</ul></div>}
        {result.contextFindings.length > 0 && <div><h3 className="font-semibold text-white">Health and context modifiers</h3><ul className="mt-2 space-y-2">{result.contextFindings.map((item, index) => <li key={`context-${index}`} className="rounded-xl bg-amber-200/[0.06] p-3 text-sm leading-relaxed text-white/65">{item.description}</li>)}</ul></div>}
        <div><h3 className="font-semibold text-white">Urgent warning signs</h3><p className="mt-2 text-sm leading-relaxed text-white/60">{result.redFlags.slice(0, 5).join(" · ")}. If someone is unresponsive, not breathing normally, seizing, severely overheated or has chest pain, call emergency services now.</p></div>
        <p className="text-xs leading-relaxed text-white/40">Prototype dataset — not yet independently clinically validated. This is harm-reduction information, not a diagnosis or confirmation of safety. Unknown, unrecorded and person-specific effects remain possible.</p>
      </div>}
    </section>
  );
}
