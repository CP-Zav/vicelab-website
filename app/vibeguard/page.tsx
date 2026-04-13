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
  title: "VibeGuard — Crowd Safety for Events",
  description:
    "AI-powered crowd safety for events and venues. Real-time density monitoring, automated alerts, and actionable data for security teams.",
};

const features = [
  {
    title: "Crowd density monitoring",
    body: "Real-time data on crowd density across zones — so you know where pressure is building before it becomes a problem.",
  },
  {
    title: "AI-powered alerts",
    body: "Automated safety notifications sent to security teams when thresholds are breached.",
  },
  {
    title: "Live heatmaps",
    body: "Visual dashboards showing crowd flow and hotspots across your venue in real time.",
  },
  {
    title: "Multi-venue support",
    body: "Manage safety across multiple stages or areas from a single dashboard.",
  },
  {
    title: "Instant escalation",
    body: "One-tap escalation to medical or security staff with location pinned automatically.",
  },
  {
    title: "Post-event analytics",
    body: "Detailed crowd flow reports after each event to improve safety planning next time.",
  },
];

export default function VibeGuardPage() {
  return (
    <div className="min-h-screen">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-36 pb-20 lg:pt-44 lg:pb-24">
        <div className="absolute inset-0 bg-hero-radial-teal pointer-events-none" />
        <div
          className="absolute inset-0 bg-grid-faint bg-grid opacity-[0.4] pointer-events-none"
          style={{ maskImage: "radial-gradient(ellipse 70% 50% at 50% 0%, black 0%, transparent 80%)" }}
        />
        <Container>
          <div className="max-w-2xl">
            <div className="mb-6">
              <Badge variant="teal">Coming Soon</Badge>
            </div>
            <div className="mb-6">
              <Image
                src="/logos/vibeguard.png"
                alt="VibeGuard"
                height={52}
                width={208}
                className="h-13 w-auto"
                priority
              />
            </div>
            <h1 className="text-display-lg text-balance mb-6">VibeGuard</h1>
            <p className="text-lg text-white/50 leading-relaxed mb-10">
              AI-powered crowd safety for events and venues. Real-time density
              monitoring, automated alerts, and actionable data for security
              teams and event organisers.
            </p>
            <ButtonPrimary href="mailto:hello@thevicelab.com" gradient="bg-vg-teal">
              Join the waitlist
            </ButtonPrimary>
          </div>
        </Container>
      </section>

      {/* ── Features ─────────────────────────────────────────────────────── */}
      <Section>
        <Container>
          <SectionHeader>What it does</SectionHeader>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f) => (
              <FeatureCard key={f.title} title={f.title} body={f.body} accent="teal" />
            ))}
          </div>
        </Container>
      </Section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <Section border>
        <Container>
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-display-md text-balance mb-5">
              Be first to know when we launch.
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-9">
              VibeGuard is in active development. If you run events or manage
              venues, we&apos;d love to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <ButtonPrimary href="mailto:hello@thevicelab.com" gradient="bg-vg-teal">
                Get in touch
              </ButtonPrimary>
              <ButtonGhost href="/vicelab">
                About ViceLab
              </ButtonGhost>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
