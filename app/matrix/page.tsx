import type { Metadata } from "next";
import { Container, Section, Eyebrow, Badge, FeatureCard, ButtonPrimary, ButtonGhost } from "@/components/ui";

export const metadata: Metadata = {
  title: "Matrix — Substance Interaction Engine",
  description:
    "Pharmacological risk mapping for substance combinations. Matrix models interaction risk across compounds, routes, and dose patterns — built for harm reduction services and safety operators.",
};

const features = [
  {
    title: "Interaction mapping",
    body: "Cross-reference engine covering pharmacological interactions across 200+ substance pairs — stimulants, depressants, psychedelics, empathogens, and combinations thereof.",
  },
  {
    title: "Risk scoring",
    body: "Severity-weighted outputs for every combination: additive, synergistic, dangerous, or contraindicated — with plain-language guidance attached.",
  },
  {
    title: "Route and dose awareness",
    body: "Risk profiles that account for administration route and dose range. Oral MDMA and insufflated MDMA carry different risk windows. Matrix knows the difference.",
  },
  {
    title: "Evidence confidence levels",
    body: "Every interaction output flagged by evidence strength — case report, observational, clinical study, or established pharmacology. No false precision.",
  },
  {
    title: "Integration-ready API",
    body: "Queryable by other ViceLab tools and third-party safety platforms. Matrix is an engine, not just a lookup table.",
  },
  {
    title: "Harm reduction context",
    body: "Outputs include actionable harm reduction guidance — not just a risk flag. Because knowing the risk is only useful if you know what to do with it.",
  },
];

const rites = ["compound", "route", "dose", "timing", "history", "evidence"];

export default function MatrixPage() {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-32 pb-18 lg:pt-44 lg:pb-24">
        <div className="absolute inset-0 bg-hero-radial-mx pointer-events-none" />
        <div className="absolute inset-0 mx-orbit-grid opacity-[0.52] pointer-events-none" />
        <div className="absolute right-[-8rem] top-28 hidden h-[28rem] w-[28rem] rounded-full border border-mx-gold/15 lg:block">
          <div className="absolute inset-8 rounded-full border border-mx-gold/10" />
          <div className="absolute inset-16 rounded-full border border-mx-ember/10" />
          <div className="absolute inset-0 mx-sigil-ring opacity-70" />
        </div>
        <Container>
          <div className="relative max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <Eyebrow color="mx">Ritual Risk Intelligence</Eyebrow>
              <Badge variant="mx">In Development</Badge>
            </div>
            <h1 className="font-cinzel text-[clamp(3.25rem,9vw,7rem)] font-bold leading-[0.9] tracking-[-0.04em] text-balance mb-5">
              Matrix
            </h1>
            <p className="text-[19px] font-semibold text-mx-gold/90 leading-snug mb-4">
              Know what happens when substances meet.
            </p>
            <p className="max-w-2xl text-[17px] text-white/48 leading-relaxed mb-9">
              Matrix is a substance interaction risk engine — part pharmacology map, part decision altar.
              It cross-references compounds, routes, dose patterns, and evidence strength so safety teams
              can read the signal before the night turns.
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonPrimary href="mailto:hello@thevicelab.com" gradient="bg-gradient-mx">
                Register interest
              </ButtonPrimary>
              <ButtonGhost href="/vicelab">About ViceLab</ButtonGhost>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Ritual model ─────────────────────────────────────────────────── */}
      <Section>
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <Eyebrow color="mx">The model</Eyebrow>
              <h2 className="font-cinzel text-display-sm mb-4 max-w-xl text-gradient-mx">
                No generic warnings. A readable risk ritual.
              </h2>
              <p className="text-white/42 text-[15px] leading-relaxed max-w-xl">
                Matrix does not flatten a combination into a single fear label. It weighs context,
                mechanism, timing, and confidence — then returns language an operator can act on.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {rites.map((item, index) => (
                <div key={item} className="rounded-card border border-mx-gold/14 bg-mx-gold/[0.045] p-4 shadow-panel">
                  <p className="font-plex text-[11px] uppercase tracking-[0.22em] text-mx-gold/55">0{index + 1}</p>
                  <p className="mt-5 font-cinzel text-lg capitalize text-white/86">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Features ─────────────────────────────────────────────────────── */}
      <Section>
        <Container>
          <Eyebrow color="mx">How it works</Eyebrow>
          <h2 className="font-cinzel text-display-sm mb-4 max-w-xl">Interaction intelligence that doesn&apos;t guess.</h2>
          <p className="text-white/40 text-[15px] leading-relaxed mb-12 max-w-xl">
            Every output is evidence-graded and context-aware. Matrix doesn&apos;t return a
            generic warning — it returns a risk model.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f) => (
              <FeatureCard key={f.title} title={f.title} body={f.body} accent="mx" />
            ))}
          </div>
        </Container>
      </Section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <Section border>
        <Container>
          <div className="max-w-xl">
            <h2 className="font-cinzel text-display-sm mb-5 text-gradient-mx">
              Built for people who operate in the real world.
            </h2>
            <p className="text-white/40 text-[15px] leading-relaxed mb-8">
              If you run harm reduction services, festival medical teams, or safety infrastructure —
              Matrix is designed for your environment. Get in touch to discuss integration or early access.
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonPrimary href="mailto:hello@thevicelab.com" gradient="bg-gradient-mx">
                Get in touch
              </ButtonPrimary>
              <ButtonGhost href="/siv">Explore SIV</ButtonGhost>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
