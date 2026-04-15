import type { Metadata } from "next";
import { Container, Section, SectionHeader, Badge, FeatureCard, ButtonPrimary } from "@/components/ui";

export const metadata: Metadata = {
  title: "ASA — Automated Safety Advisor",
  description: "Real-time, AI-driven safety guidance for individuals and event staff. Context-aware harm reduction at the moment it matters. Coming soon from ViceLab.",
};

const features = [
  { title: "Context-aware guidance",    body: "Responses that adapt to the specific substance, setting, and reported symptoms — not generic safety scripts." },
  { title: "Staff-facing mode",         body: "Dedicated interface for event medical and security staff with escalation protocols and location tagging." },
  { title: "Multilingual support",      body: "Safety information delivered in the language of the person asking — removing friction when it matters most." },
  { title: "Zero-retention by default", body: "Conversations are not stored. ASA provides guidance without building a profile of the person seeking help." },
  { title: "Offline-capable",           body: "Core guidance functions work without a live data connection — critical for remote festival sites with poor coverage." },
  { title: "Integrated alerts",         body: "Surfaces active Cooked Pilot warnings inline — so real-time batch alerts reach people via every touchpoint." },
];

export default function ASAPage() {
  return (
    <div className="min-h-screen">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-32 pb-18 lg:pt-44 lg:pb-24">
        {/* ASA = ViceLab electric blue */}
        <div className="absolute inset-0 bg-hero-radial-blue pointer-events-none" />
        <div
          className="absolute inset-0 bg-grid-faint bg-grid opacity-[0.35] pointer-events-none"
          style={{ maskImage: "radial-gradient(ellipse 70% 50% at 50% 0%, black 0%, transparent 80%)" }}
        />
        <Container>
          <div className="max-w-2xl">
            <div className="mb-5"><Badge variant="blue">Coming Soon</Badge></div>
            <h1 className="text-display-lg text-balance mb-5">ASA</h1>
            <p className="text-[17px] text-white/45 leading-relaxed mb-9">
              Automated Safety Advisor. Real-time, AI-driven harm reduction guidance —
              context-aware, non-judgmental, and built for the environments where
              people actually need it.
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
          <SectionHeader
            eyebrow="Capabilities"
            title="Guidance that responds to reality"
            subtitle="ASA gives people the right information at the right moment — without storing data, without judgment, without friction."
            eyebrowColor="blue"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
            {features.map((f) => (
              <FeatureCard key={f.title} title={f.title} body={f.body} accentProduct="sig" />
            ))}
          </div>
        </Container>
      </Section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <Container>
          <div className="max-w-xl">
            <h2 className="text-display-sm mb-5">Interested in ASA?</h2>
            <p className="text-white/40 text-[15px] leading-relaxed mb-8">
              ASA is in development. If you&apos;re building harm reduction infrastructure 
              or want to pilot an early version at your event, reach out.
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
