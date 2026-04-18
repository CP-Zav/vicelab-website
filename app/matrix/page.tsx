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

export default function MatrixPage() {
  return (
    <div className="min-h-screen">
      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-32 pb-18 lg:pt-44 lg:pb-24">
        <div className="absolute inset-0 bg-hero-radial-blue pointer-events-none" />
        <div
          className="absolute inset-0 bg-grid-faint bg-grid opacity-[0.35] pointer-events-none"
          style={{ maskImage: "radial-gradient(ellipse 70% 50% at 50% 0%, black 0%, transparent 80%)" }}
        />
        <Container>
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3">
              <Eyebrow color="blue">Risk Intelligence</Eyebrow>
              <Badge variant="blue">In Development</Badge>
            </div>
            <h1 className="text-display-lg text-balance mb-4">Matrix</h1>
            <p className="text-[18px] font-semibold text-white/80 leading-snug mb-4">
              Know what happens when substances meet.
            </p>
            <p className="text-[17px] text-white/45 leading-relaxed mb-9">
              Matrix is a substance interaction risk engine — pharmacological cross-referencing
              across compounds, routes, and dose patterns. Built for harm reduction services,
              festival medics, and safety operators who need accurate data, not approximations.
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonPrimary href="mailto:hello@thevicelab.com" gradient="bg-gradient-sig">
                Register interest
              </ButtonPrimary>
              <ButtonGhost href="/vicelab">About ViceLab</ButtonGhost>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Features ─────────────────────────────────────────────────────── */}
      <Section>
        <Container>
          <Eyebrow color="blue">How it works</Eyebrow>
          <h2 className="text-display-sm mb-4 max-w-xl">Interaction intelligence that doesn&apos;t guess.</h2>
          <p className="text-white/40 text-[15px] leading-relaxed mb-12 max-w-xl">
            Every output is evidence-graded and context-aware. Matrix doesn&apos;t return a
            generic warning — it returns a risk model.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f) => (
              <FeatureCard key={f.title} title={f.title} body={f.body} accent="blue" />
            ))}
          </div>
        </Container>
      </Section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <Section border>
        <Container>
          <div className="max-w-xl">
            <h2 className="text-display-sm mb-5">
              Built for people who operate in the real world.
            </h2>
            <p className="text-white/40 text-[15px] leading-relaxed mb-8">
              If you run harm reduction services, festival medical teams, or safety infrastructure —
              Matrix is designed for your environment. Get in touch to discuss integration or early access.
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonPrimary href="mailto:hello@thevicelab.com" gradient="bg-gradient-sig">
                Get in touch
              </ButtonPrimary>
              <ButtonGhost href="/asa">Explore ASA</ButtonGhost>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
