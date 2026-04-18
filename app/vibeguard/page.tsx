import type { Metadata } from "next";
import Image from "next/image";
import { Container, Section, Eyebrow, Badge, FeatureCard, ButtonPrimary, ButtonGhost } from "@/components/ui";

export const metadata: Metadata = {
  title: "VibeGuard — Real-Time Harm Reduction | ViceLab",
  description:
    "Physiological monitoring for festivals, raves, and nightlife. Track heart rate, temperature, and hydration signals in real time — data without judgment.",
  openGraph: {
    title: "VibeGuard — Real-Time Harm Reduction | ViceLab",
    description:
      "Physiological monitoring for festivals, raves, and nightlife. Track heart rate, temperature, and hydration signals in real time — data without judgment.",
    url: "https://thevicelab.com/vibeguard",
    siteName: "ViceLab",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "ViceLab" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VibeGuard — Real-Time Harm Reduction | ViceLab",
    description:
      "Physiological monitoring for festivals, raves, and nightlife. Track heart rate, temperature, and hydration signals in real time — data without judgment.",
    images: ["/og-image.png"],
  },
};

const features = [
  {
    title: "Heart rate monitoring",
    body: "Continuous heart rate tracking across the night. See patterns, not just snapshots — so you know when something is building, not just when it peaks.",
  },
  {
    title: "Temperature awareness",
    body: "Body heat signals tracked in context. Festival conditions run hot — VibeGuard accounts for environment so the data actually means something.",
  },
  {
    title: "Hydration intelligence",
    body: "Flags dehydration risk before it becomes critical. Tracks patterns over time, not just point readings — the window to act stays open longer.",
  },
  {
    title: "Smart threshold alerts",
    body: "Configurable risk thresholds fire when physiological signals move into danger territory. No noise. No false alarms. Just the moments that matter.",
  },
  {
    title: "Cooked Pilot integration",
    body: "Pairs directly with Cooked Pilot. Physiological data meets harm reduction intelligence — full-stack safety for the people in the crowd.",
  },
  {
    title: "Privacy-first by design",
    body: "No account required for core monitoring. Anonymous by default. Your body data belongs to you — not a platform, not an operator.",
  },
];

export default function VibeGuardPage() {
  return (
    <div className="min-h-screen">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-32 pb-18 lg:pt-44 lg:pb-24">
        {/* VibeGuard = cyan → neon green — never orange */}
        <div className="absolute inset-0 bg-hero-radial-teal pointer-events-none" />
        <div
          className="absolute inset-0 bg-grid-faint bg-grid opacity-[0.35] pointer-events-none"
          style={{ maskImage: "radial-gradient(ellipse 70% 50% at 50% 0%, black 0%, transparent 80%)" }}
        />
        <Container>
          <div className="max-w-2xl">
            <Eyebrow color="teal">Real-Time Harm Reduction</Eyebrow>
            <div className="mb-5">
              <Badge variant="teal">Coming Soon</Badge>
            </div>
            <div className="mb-6">
              <Image
                src="/logos/vibeguard.svg"
                alt="VibeGuard"
                height={229}
                width={516}
                className="h-16 w-auto brightness-110 contrast-105"
                style={{ width: "auto" }}
                priority
              />
            </div>
            <h1 className="text-display-lg text-balance mb-5">VibeGuard</h1>
            <p className="text-[17px] text-white/45 leading-relaxed mb-9 max-w-lg">
              Real-time physiological monitoring for festivals, raves, and nightlife.
              Heart rate, temperature, hydration — tracked continuously and flagged before
              they become emergencies. Built for recreational environments, not clinical ones.
            </p>
            {/* VG button: cyan → neon green gradient */}
            <div className="flex flex-wrap gap-3">
              <ButtonPrimary href="mailto:hello@thevicelab.com" gradient="bg-gradient-vg">
                Get early access
              </ButtonPrimary>
              <ButtonGhost href="/cooked-pilot">Explore Cooked Pilot</ButtonGhost>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Features ─────────────────────────────────────────────────────── */}
      <Section border>
        <Container>
          <h2 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/25 mb-8">
            What it does
          </h2>
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
          <div className="relative rounded-card border border-white/[0.07] bg-white/[0.025] overflow-hidden p-8 sm:p-12 md:p-14 text-center shadow-panel">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 60% 60% at 50% 100%, rgba(0,213,255,0.07) 0%, transparent 70%)",
              }}
            />
            <div className="relative">
              <Eyebrow color="teal">In Development</Eyebrow>
              <h2 className="text-display-md text-balance mb-4">
                Data without judgment.
              </h2>
              <p className="text-white/38 text-base leading-relaxed max-w-md mx-auto mb-8">
                VibeGuard is in active development. If you work in harm reduction, events,
                or festival safety — we want to hear from you.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <ButtonPrimary href="mailto:hello@thevicelab.com" gradient="bg-gradient-vg">
                  Get in touch
                </ButtonPrimary>
                <ButtonGhost href="/vicelab">About ViceLab</ButtonGhost>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
