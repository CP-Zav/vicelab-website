import type { Metadata } from "next";
import Image from "next/image";
import {
  Container,
  Section,
  SectionHeader,
  Badge,
  FeatureCard,
  ButtonPrimary,
  ButtonGhost,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Cooked Pilot — Real-time Harm Reduction",
  description:
    "Live alerts on bad batches, testing resources, and friend check-in for festivals and nightlife. No account, no tracking.",
};

const features = [
  {
    title: "Live batch alerts",
    body: "Real-time reports on bad batches and contamination warnings sourced from local harm reduction networks.",
  },
  {
    title: "Location-based",
    body: "Alerts scoped to your area — festival, venue, or city. Relevant info when and where you need it.",
  },
  {
    title: "Anonymous by default",
    body: "No account. No tracking. We collect the minimum data needed to keep alerts accurate.",
  },
  {
    title: "Testing resources",
    body: "Find nearby drug checking services and harm reduction organisations at the tap of a button.",
  },
  {
    title: "Friend check-in",
    body: "Share your location with trusted friends so someone always knows where you are.",
  },
  {
    title: "Safety guidance",
    body: "Clear, non-judgmental information on symptoms, interactions, and what to do in an emergency.",
  },
];

export default function CookedPilotPage() {
  return (
    <div className="min-h-screen">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-36 pb-20 lg:pt-44 lg:pb-24">
        {/* Pink radial for Cooked Pilot */}
        <div className="absolute inset-0 bg-hero-radial-pink pointer-events-none" />
        <div
          className="absolute inset-0 bg-grid-faint bg-grid opacity-[0.4] pointer-events-none"
          style={{ maskImage: "radial-gradient(ellipse 70% 50% at 50% 0%, black 0%, transparent 80%)" }}
        />
        <Container>
          <div className="max-w-2xl">
            <div className="mb-6">
              <Badge variant="live">Live</Badge>
            </div>
            <div className="mb-6">
              <Image
                src="/logos/cookedpilot.png"
                alt="Cooked Pilot"
                height={52}
                width={208}
                className="h-13 w-auto"
                priority
              />
            </div>
            <h1 className="text-display-lg text-balance mb-6">Cooked Pilot</h1>
            <p className="text-lg text-white/50 leading-relaxed mb-10">
              Real-time harm reduction for festivals and nightlife. Get live
              alerts on bad batches, find testing resources, and check in with
              friends — no judgment, no friction.
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonPrimary href="#" gradient="bg-cp-pink" className="text-white">
                Download on iOS
              </ButtonPrimary>
              <ButtonGhost href="#">Get on Android</ButtonGhost>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Features ─────────────────────────────────────────────────────── */}
      <Section>
        <Container>
          <SectionHeader>Features</SectionHeader>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f) => (
              <FeatureCard key={f.title} title={f.title} body={f.body} accent="pink" />
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Mission ──────────────────────────────────────────────────────── */}
      <Section border>
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-display-md text-balance mb-5">
              Information saves lives.
            </h2>
            <p className="text-white/50 text-lg leading-relaxed">
              Cooked Pilot exists because people are going to party. Our job
              isn&apos;t to stop that — it&apos;s to make sure they have the
              information they need to come home safe.
            </p>
          </div>
        </Container>
      </Section>
    </div>
  );
}
