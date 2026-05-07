import type { Metadata } from "next";
import Image from "next/image";
import { Container, Section, Eyebrow, Badge, FeatureCard, ButtonPrimary, ButtonGhost } from "@/components/ui";

export const metadata: Metadata = {
  title: "VibeGuard — Organiser Safety Intelligence | ViceLab",
  description:
    "Operational safety intelligence for festival organisers and compliance teams. Close the gap between duty of care and on-ground reality.",
  openGraph: {
    title: "VibeGuard — Organiser Safety Intelligence | ViceLab",
    description:
      "Operational safety intelligence for festival organisers and compliance teams. Close the gap between duty of care and on-ground reality.",
    url: "https://thevicelab.com/vibeguard",
    siteName: "ViceLab",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "ViceLab" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VibeGuard — Organiser Safety Intelligence | ViceLab",
    description:
      "Operational safety intelligence for festival organisers and compliance teams. Close the gap between duty of care and on-ground reality.",
    images: ["/og-image.png"],
  },
};

const features = [
  {
    title: "Crowd health monitoring",
    body: "Aggregate physiological signals from connected attendee devices across the event footprint — so you see crowd-level risk, not just individual data points.",
  },
  {
    title: "Real-time safety alerts",
    body: "Threshold-based alerts to safety coordinators when signals indicate emerging risk. Configured for your event, not a generic baseline.",
  },
  {
    title: "Compliance reporting",
    body: "Automated incident logs and duty-of-care documentation generated from live event data. The paper trail your legal team needs, without building it manually.",
  },
  {
    title: "Zone-level visibility",
    body: "Safety intelligence mapped across multiple event zones simultaneously. Know which areas are running hot before incidents escalate.",
  },
  {
    title: "Cooked Pilot integration",
    body: "Connects organiser-side monitoring with peer safety intelligence from the crowd layer. The full stack — from the ground to the command view.",
  },
  {
    title: "Incident response tools",
    body: "Structured response workflows that fire when risk signals escalate. From threshold breach to coordinated response, without the chaos.",
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
              Organiser-side safety intelligence. Compliance done with clarity, not paperwork. Data, reporting tools, and monitoring infrastructure — built to close the gap between duty of care and on-ground reality.
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
            What organisers actually need
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
                Built for the people on duty.
              </h2>
              <p className="text-white/38 text-base leading-relaxed max-w-md mx-auto mb-8">
                If you run events, you already carry the risk. VibeGuard gives you the data layer, reporting tools, and monitoring infrastructure to actually meet your obligations — not just demonstrate them. Early access open now.
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
