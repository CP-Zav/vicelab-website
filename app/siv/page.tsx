import Image from "next/image";
import type { Metadata } from "next";
import { Container, Section, Eyebrow, Badge, FeatureCard, ButtonPrimary, ButtonGhost } from "@/components/ui";

export const metadata: Metadata = {
  title: "SIV — Substance Intelligence Vault",
  description: "A secure intelligence vault for substance risk signals, field reports, and evidence-graded harm reduction context. Coming soon from ViceLab.",
};

const features = [
  { title: "Substance signal vault",    body: "Stores and structures substance intelligence from field reports, drug checking data, Matrix outputs, and verified harm reduction sources." },
  { title: "Evidence-graded entries",   body: "Every signal is tagged by confidence, source type, timestamp, and operational relevance — so uncertainty is visible instead of hidden." },
  { title: "Risk pattern detection",     body: "Surfaces emerging patterns across batches, regions, combinations, symptoms, and unusual incident clusters." },
  { title: "Privacy by design",          body: "Intelligence is separated from identity. SIV stores safety context, not personal surveillance data." },
  { title: "Query-ready intelligence",   body: "Built as a vault that other ViceLab systems can query without flattening nuance or losing provenance." },
  { title: "Operator-safe outputs",      body: "Designed for harm reduction workers, event safety teams, medics, and coordinators who need clear substance context quickly." },
];

const telemetry = [
  ["Reports", "field harm reduction signals"],
  ["Matrix", "interaction risk context"],
  ["Batches", "substance and adulterant flags"],
  ["Evidence", "confidence and provenance"],
];

export default function SIVPage() {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-32 pb-18 lg:pt-44 lg:pb-24">
        <div className="absolute inset-0 bg-hero-radial-siv pointer-events-none" />
        <div className="absolute inset-0 siv-vault-grid opacity-[0.42] pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-40 siv-scanline pointer-events-none" />
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="relative max-w-2xl">
              <div className="mb-5 flex items-center gap-3">
                <Eyebrow color="siv">Substance Intelligence Vault</Eyebrow>
                <Badge variant="siv">Coming Soon</Badge>
              </div>
              <div className="mb-6 flex items-center gap-5">
                <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-[24px] border border-siv-ice/24 bg-black/35 shadow-glow-siv">
                  <Image src="/logos/siv.svg" alt="SIV logo" width={96} height={96} className="h-20 w-20" />
                </div>
                <h1 className="font-plex text-[clamp(3.1rem,9vw,6.8rem)] font-semibold leading-[0.9] tracking-[-0.08em] text-gradient-siv">
                  SIV
                </h1>
              </div>
              <p className="text-[18px] font-semibold text-siv-ice/90 leading-snug mb-4">
                A vault for substance intelligence.
              </p>
              <p className="text-[17px] text-white/50 leading-relaxed mb-9">
                Substance Intelligence Vault secures, structures, and grades substance risk signals —
                field reports, batch flags, interaction context, and evidence trails — so harm reduction
                teams can find the signal without losing the nuance.
              </p>
              <div className="flex flex-wrap gap-3">
                <ButtonPrimary href="mailto:hello@thevicelab.com" gradient="bg-gradient-siv text-black">
                  Register interest
                </ButtonPrimary>
                <ButtonGhost href="/matrix">Explore Matrix</ButtonGhost>
              </div>
            </div>
            <div className="relative rounded-[28px] border border-siv-ice/18 bg-black/35 p-5 shadow-glow-siv">
              <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-siv-slate/[0.18] via-siv-ice/[0.06] to-transparent pointer-events-none" />
              <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-siv-ice/10" />
              <div className="relative space-y-3">
                {telemetry.map(([label, body]) => (
                  <div key={label} className="flex items-center justify-between gap-4 rounded-2xl border border-siv-ice/14 bg-black/44 px-4 py-3">
                    <div>
                      <p className="font-plex text-[11px] uppercase tracking-[0.22em] text-siv-ice/72">{label}</p>
                      <p className="mt-1 text-sm text-white/72">{body}</p>
                    </div>
                    <span className="h-2 w-2 rounded-full bg-siv-ice shadow-[0_0_18px_rgba(125,249,255,0.65)]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Features ─────────────────────────────────────────────────────── */}
      <Section>
        <Container>
          <Eyebrow color="siv">How it works</Eyebrow>
          <h2 className="font-plex text-display-sm mb-4 max-w-xl tracking-[-0.04em]">Stored safely. Queried clearly.</h2>
          <p className="text-white/42 text-[15px] leading-relaxed mb-12 max-w-xl">
            SIV is not a crowd command centre. It is the substance intelligence vault underneath the stack —
            built to preserve source, confidence, context, and change over time.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f) => (
              <FeatureCard key={f.title} title={f.title} body={f.body} accent="siv" />
            ))}
          </div>
        </Container>
      </Section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <Section border>
        <Container>
          <div className="max-w-xl">
            <h2 className="font-plex text-display-sm mb-5 tracking-[-0.04em] text-gradient-siv">Interested in SIV?</h2>
            <p className="text-white/42 text-[15px] leading-relaxed mb-8">
              SIV is in development for teams working with substance intelligence, drug checking,
              harm reduction operations, and evidence-based safety systems.
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonPrimary href="mailto:hello@thevicelab.com" gradient="bg-gradient-siv text-black">
                Get in touch
              </ButtonPrimary>
              <ButtonGhost href="/matrix">Explore Matrix</ButtonGhost>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
