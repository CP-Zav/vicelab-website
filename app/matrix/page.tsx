import type { Metadata } from "next";
import { Container, Section, Eyebrow, Badge, FeatureCard, ButtonPrimary } from "@/components/ui";

export const metadata: Metadata = {
  title: "Matrix — Intelligence Network",
  description: "A structured intelligence layer connecting harm reduction data across festivals, venues, and communities. Coming soon from ViceLab.",
};

const features = [
  { title: "Cross-event intelligence",  body: "Aggregate safety signals from multiple events into a unified intelligence layer — see patterns that single-event tools miss." },
  { title: "Network reporting",         body: "Shared anonymised incident data across partner venues and organisations, improving response accuracy for everyone." },
  { title: "Trend detection",           body: "Automated detection of emerging substance trends and risk patterns before they become critical incidents." },
  { title: "Partner integrations",      body: "Connect to existing harm reduction networks, lab results databases, and emergency services data streams." },
  { title: "Privacy by design",         body: "No personal identifiers. All data is aggregated and anonymised at the source — the intelligence travels, not the identity." },
  { title: "Operator dashboard",        body: "Command-centre view for multi-venue operators and regional coordinators managing safety across a network of events." },
];

export default function MatrixPage() {
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
            <h1 className="text-display-lg text-balance mb-5">Matrix</h1>
            <p className="text-[17px] text-white/45 leading-relaxed mb-9">
              A cross-venue intelligence network for harm reduction. Aggregate signals,
              detect trends, and share anonymised safety data across festivals and communities —
              so the whole network gets smarter with every event.
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
          <h2 className="text-display-sm mb-4 max-w-xl">Intelligence that compounds</h2>
          <p className="text-white/40 text-[15px] leading-relaxed mb-12 max-w-xl">
            Every connected event makes the whole network more accurate. Matrix turns
            distributed data into shared safety intelligence.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f) => (
              <FeatureCard key={f.title} title={f.title} body={f.body} accent="blue" />
            ))}
          </div>
        </Container>
      </Section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <Container>
          <div className="max-w-xl">
            <h2 className="text-display-sm mb-5">Want early access?</h2>
            <p className="text-white/40 text-[15px] leading-relaxed mb-8">
              Matrix is in development. If you run events or operate a harm reduction
              network, we&apos;d love to hear from you.
            </p>
            <ButtonPrimary href="mailto:hello@thevicelab.com" gradient="bg-gradient-sig">
              Get in touch
            </ButtonPrimary>
          </div>
        </Container>
      </section>
    </div>
  );
}
