import type { Metadata } from "next";
import Image from "next/image";
import { Container, Section, SectionHeader, FeatureCard, ButtonPrimary, ButtonGhost } from "@/components/ui";

export const metadata: Metadata = {
  title: "Cooked Pilot — Real-time Harm Reduction",
  description: "Live alerts on bad batches, testing resources, and friend check-in for festivals and nightlife. No account, no tracking.",
};

const features = [
  { title: "Live batch alerts",    body: "Real-time reports on bad batches and contamination warnings sourced from local harm reduction networks." },
  { title: "Location-based",       body: "Alerts scoped to your area — festival, venue, or city. Relevant info when and where you need it." },
  { title: "Anonymous by default", body: "No account. No tracking. We collect the minimum data needed to keep alerts accurate." },
  { title: "Testing resources",    body: "Find nearby drug checking services and harm reduction organisations at the tap of a button." },
  { title: "Friend check-in",      body: "Share your location with trusted friends so someone always knows where you are." },
  { title: "Safety guidance",      body: "Clear, non-judgmental information on symptoms, interactions, and what to do in an emergency." },
];

export default function CookedPilotPage() {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden pt-28 pb-18 lg:pt-36 lg:pb-24">
        <div className="absolute inset-0 bg-hero-radial-pink pointer-events-none" />
        <div
          className="absolute inset-0 bg-grid-faint bg-grid opacity-[0.35] pointer-events-none"
          style={{ maskImage: "radial-gradient(ellipse 70% 50% at 50% 0%, black 0%, transparent 80%)" }}
        />
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
            <div className="max-w-2xl">
              <Image
                src="/brand/cookedpilot-polished.png"
                alt="Cooked Pilot logo"
                height={520}
                width={820}
                className="mb-8 h-auto w-[min(520px,90vw)] brightness-110 contrast-105"
                priority
              />
              <h1 className="sr-only">Cooked Pilot</h1>
              <p className="text-[17px] text-white/50 leading-relaxed mb-9 max-w-xl">
                Real-time harm reduction for festivals and nightlife. Live alerts on bad batches,
                testing resources, and friend check-in — no judgment, no friction.
              </p>
              <div className="flex flex-wrap gap-3">
                <ButtonPrimary href="#" gradient="bg-gradient-cp" className="text-white">Download on iOS</ButtonPrimary>
                <ButtonGhost href="#">Get on Android</ButtonGhost>
              </div>
            </div>
            <div className="rounded-[34px] border border-cp-pink/18 bg-black/28 p-4 shadow-glow-cp">
              <Image
                src="/brand/cookedpilot-polished.png"
                alt="Cooked Pilot polished identity asset"
                width={900}
                height={900}
                className="h-auto w-full rounded-[26px] object-contain"
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <SectionHeader>Features</SectionHeader>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f) => <FeatureCard key={f.title} title={f.title} body={f.body} accent="pink" />)}
          </div>
        </Container>
      </Section>

      <Section border>
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-display-md text-balance mb-5">Information saves lives.</h2>
            <p className="text-white/45 text-lg leading-relaxed">
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
