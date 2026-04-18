import type { Metadata } from "next";
import { Container, Section, Eyebrow, Badge, FeatureCard, ButtonPrimary, ButtonGhost } from "@/components/ui";

export const metadata: Metadata = {
  title: "ASA — Analytical Substance Assessment",
  description:
    "A structured substance knowledge archive. Pharmacology, effects profiles, harm reduction context, and field data — evidence-graded and queryable.",
};

const features = [
  {
    title: "Substance profiles",
    body: "Comprehensive pharmacological data, effects timeline, and harm profile across 150+ compounds — psychedelics, stimulants, depressants, empathogens, dissociatives, and novel substances.",
  },
  {
    title: "Evidence grading",
    body: "Every data point sourced and graded: anecdotal, observational, or clinical. You always know how confident the data is — and why.",
  },
  {
    title: "Field-calibrated data",
    body: "Profiles updated with real-world use patterns, not lab conditions alone. Dose ranges, routes, and onset windows reflect how substances are actually used in the field.",
  },
  {
    title: "Practitioner outputs",
    body: "Harm reduction context built in — not clinical abstraction. ASA is designed for the people who use it: peer workers, medics, and safety staff, not researchers writing papers.",
  },
  {
    title: "Queryable by other systems",
    body: "ASA powers Matrix and SIV. It&apos;s the knowledge layer the rest of the ViceLab intelligence stack queries — structured for cross-system use from day one.",
  },
  {
    title: "Emerging substance alerts",
    body: "Profile flags triggered by emerging field reports and drug checking data. When a new compound or adulterant shows up in circulation, ASA is updated before it becomes a statistic.",
  },
];

export default function AsaPage() {
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
              <Eyebrow color="blue">Knowledge Layer</Eyebrow>
              <Badge variant="blue">In Development</Badge>
            </div>
            <h1 className="text-display-lg text-balance mb-4">ASA</h1>
            <p className="text-[18px] font-semibold text-white/80 leading-snug mb-4">
              Analytical Substance Assessment.
            </p>
            <p className="text-[17px] text-white/45 leading-relaxed mb-9">
              A structured substance knowledge archive — pharmacology, effects profiles, harm
              reduction context, and field data unified into a single queryable layer. Built for harm
              reduction practitioners and safety systems that need more than a search result.
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
          <Eyebrow color="blue">What it contains</Eyebrow>
          <h2 className="text-display-sm mb-4 max-w-xl">Substance intelligence. Evidence-graded.</h2>
          <p className="text-white/40 text-[15px] leading-relaxed mb-12 max-w-xl">
            ASA doesn&apos;t summarise Wikipedia. It&apos;s a structured data layer built from pharmacological
            literature, field data, and harm reduction practice — graded by confidence and updated by
            what&apos;s actually in circulation.
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
              The intelligence layer harm reduction has been missing.
            </h2>
            <p className="text-white/40 text-[15px] leading-relaxed mb-8">
              If you work in harm reduction, drug checking, or festival safety — and you&apos;re tired of
              referencing sources that weren&apos;t built for your environment — ASA is for you.
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonPrimary href="mailto:hello@thevicelab.com" gradient="bg-gradient-sig">
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
