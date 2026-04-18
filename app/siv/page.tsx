import type { Metadata } from "next";
import { Container, Section, Eyebrow, Badge, FeatureCard, ButtonPrimary } from "@/components/ui";

export const metadata: Metadata = {
  title: "SIV — Safety Intelligence Vessel",
  description: "Unified safety data layer connecting field intelligence, pharmacological risk, and operational response protocols. Coming soon from ViceLab.",
};

const features = [
  { title: "Unified data layer",       body: "Connects intelligence from Cooked Pilot, Matrix, and VibeGuard into a single operational safety picture." },
  { title: "Real-time risk signals",   body: "Live synthesis of substance alerts, crowd data, and incident reports across connected events." },
  { title: "Protocol automation",      body: "Trigger pre-defined response protocols automatically when risk thresholds are crossed." },
  { title: "Cross-system integration", body: "Built to connect with existing venue management, medical response, and harm reduction systems." },
  { title: "Privacy by design",        body: "All data is anonymised and aggregated at source. Intelligence travels, not identity." },
  { title: "Command overview",         body: "Single-screen operational view for safety coordinators managing complex, multi-zone events." },
];

export default function SIVPage() {
  return (
    <div className="min-h-screen">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-32 pb-18 lg:pt-44 lg:pb-24">
        <div className="absolute inset-0 bg-hero-radial-blue pointer-events-none" />
        <div
          className="absolute inset-0 bg-grid-faint bg-grid opacity-[0.35] pointer-events-none"
          style={{ maskImage: "radial-gradient(ellipse 70% 50% at 50% 0%, black 0%, transparent 80%)" }}
        />
        <Container>
          <div className="max-w-2xl">
            <div className="mb-5"><Badge variant="blue">Coming Soon</Badge></div>
            <h1 className="text-display-lg text-balance mb-5">SIV</h1>
            <p className="text-[17px] text-white/45 leading-relaxed mb-9">
              Safety Intelligence Vessel. A unified operational layer connecting
              field harm reduction data, substance risk intelligence, and crowd
              safety signals — so event coordinators have the full picture, always.
            </p>
            <ButtonPrimary href="mailto:hello@thevicelab.com" gradient="bg-gradient-sig">
              Register interest
            </ButtonPrimary>
          </div>
        </Container>
      </section>

      {/* ── Features ─────────────────────────────────────────────────────── */}
      <Section>
        <Container>
          <Eyebrow color="blue">How it works</Eyebrow>
          <h2 className="text-display-sm mb-4 max-w-xl">One layer. Full picture.</h2>
          <p className="text-white/40 text-[15px] leading-relaxed mb-12 max-w-xl">
            SIV connects intelligence from Cooked Pilot, Matrix, and VibeGuard into
            a single operational view — so nothing falls through the gaps.
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
            <h2 className="text-display-sm mb-5">Interested in SIV?</h2>
            <p className="text-white/40 text-[15px] leading-relaxed mb-8">
              SIV is in development. If you operate large-scale events or safety
              networks, get in touch early.
            </p>
            <ButtonPrimary href="mailto:hello@thevicelab.com" gradient="bg-gradient-sig">
              Get in touch
            </ButtonPrimary>
          </div>
        </Container>
      </Section>
    </div>
  );
}