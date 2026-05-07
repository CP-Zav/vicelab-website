import type { Metadata } from "next";
import Image from "next/image";
import type { LucideProps } from "lucide-react";
import {
  Siren,
  Radar,
  ShieldCheck,
  FlaskConical,
  Users,
  Compass,
} from "lucide-react";
import {
  Container,
  Section,
  Badge,
  ButtonPrimary,
  ButtonGhost,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Cooked Pilot — Your Crew. Covered.",
  description:
    "Peer-based situational awareness for festivals, raves, and nights that stretch to next light. Crew care, early recognition, culture-fluent safety support.",
  openGraph: {
    title: "Cooked Pilot — Your Crew. Covered.",
    description:
      "Peer-based situational awareness for festivals, raves, and nights that stretch to next light. Crew care, early recognition, culture-fluent safety support.",
    url: "https://thevicelab.com/cooked-pilot",
    siteName: "ViceLab",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "ViceLab" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cooked Pilot — Your Crew. Covered.",
    description:
      "Peer-based situational awareness for festivals, raves, and nights that stretch to next light. Crew care, early recognition, culture-fluent safety support.",
    images: ["/og-image.png"],
  },
};

// ── Feature data ──────────────────────────────────────────────────────────────
type Feature = {
  title: string;
  body: string;
  Icon: React.ComponentType<LucideProps>;
  featured?: boolean;
};

const features: Feature[] = [
  {
    title: "Live batch alerts",
    body: "Real-time reports on bad batches and contamination warnings sourced from local harm reduction networks.",
    Icon: Siren,
  },
  {
    title: "Location-based",
    body: "Alerts scoped to your area — festival, venue, or city. Relevant info when and where you need it.",
    Icon: Radar,
  },
  {
    title: "Anonymous by default",
    body: "No account. No tracking. No data that leads back to you. We collect only what it takes to keep alerts accurate — your identity stays yours.",
    Icon: ShieldCheck,
    featured: true,
  },
  {
    title: "Testing resources",
    body: "Find nearby drug checking services and harm reduction organisations at the tap of a button.",
    Icon: FlaskConical,
  },
  {
    title: "Friend check-in",
    body: "Share your location with trusted friends so someone always knows where you are.",
    Icon: Users,
  },
  {
    title: "Safety guidance",
    body: "Clear, non-judgmental information on symptoms, interactions, and what to do in an emergency.",
    Icon: Compass,
  },
];

// ── App mockup ────────────────────────────────────────────────────────────────
function AppMockup() {
  return (
    <div className="relative select-none pointer-events-none" aria-hidden>
      {/* Ambient glow behind phone */}
      <div
        className="absolute inset-0 rounded-[40px] opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(255,0,168,0.18) 0%, rgba(255,0,168,0.04) 60%, transparent 80%)",
          filter: "blur(24px)",
          transform: "scale(1.3)",
        }}
      />

      {/* Phone frame */}
      <div
        className="relative w-[200px] rounded-[28px] overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #120819 0%, #08040E 100%)",
          border: "1px solid rgba(255,255,255,0.09)",
          boxShadow:
            "0 24px 64px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,0,168,0.08), inset 0 1px 0 rgba(255,255,255,0.06)",
        }}
      >
        {/* Notch */}
        <div className="flex justify-center pt-3 pb-1">
          <div
            className="w-12 h-[5px] rounded-full"
            style={{ background: "rgba(255,255,255,0.08)" }}
          />
        </div>

        {/* Inner screen */}
        <div className="px-3.5 pb-5 space-y-2.5">
          {/* Anon mode pill */}
          <div
            className="flex items-center gap-2 rounded-full px-3 py-1.5"
            style={{
              background: "rgba(255,0,168,0.08)",
              border: "1px solid rgba(255,0,168,0.20)",
            }}
          >
            <span className="relative flex h-1.5 w-1.5 shrink-0">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-70"
                style={{ background: "#FF00A8" }}
              />
              <span
                className="relative inline-flex rounded-full h-1.5 w-1.5"
                style={{ background: "#FF00A8" }}
              />
            </span>
            <span
              className="text-[9px] font-semibold tracking-widest uppercase"
              style={{ color: "#FF00A8" }}
            >
              Anonymous mode
            </span>
          </div>

          {/* Location line */}
          <div className="flex items-center gap-1.5 px-0.5">
            <svg
              className="w-2.5 h-2.5 shrink-0 opacity-30"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="text-[9px]" style={{ color: "rgba(255,255,255,0.28)" }}>
              Strawberry Fields · 4 km away
            </span>
          </div>

          {/* Alert feed header */}
          <div className="flex items-center justify-between px-0.5 pt-0.5">
            <span
              className="text-[8px] font-semibold uppercase tracking-widest"
              style={{ color: "rgba(255,255,255,0.22)" }}
            >
              Live alerts
            </span>
            <span
              className="text-[8px] font-semibold"
              style={{ color: "#FF00A8", opacity: 0.8 }}
            >
              3 new
            </span>
          </div>

          {/* Alert 1 — high */}
          <div
            className="rounded-xl p-2.5 space-y-1"
            style={{
              background: "rgba(255,0,168,0.07)",
              border: "1px solid rgba(255,0,168,0.16)",
            }}
          >
            <div className="flex items-center justify-between">
              <span
                className="text-[9px] font-bold tracking-wide"
                style={{ color: "#FF00A8" }}
              >
                MDMA · High concern
              </span>
              <span className="text-[8px]" style={{ color: "rgba(255,255,255,0.22)" }}>
                2m
              </span>
            </div>
            <p className="text-[8px] leading-relaxed" style={{ color: "rgba(255,255,255,0.42)" }}>
              Pressed pill — blue star. Unusual press texture. Avoid until tested.
            </p>
          </div>

          {/* Alert 2 — medium */}
          <div
            className="rounded-xl p-2.5 space-y-1"
            style={{
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <div className="flex items-center justify-between">
              <span
                className="text-[9px] font-semibold"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                Ketamine · Area-wide
              </span>
              <span className="text-[8px]" style={{ color: "rgba(255,255,255,0.22)" }}>
                11m
              </span>
            </div>
            <p className="text-[8px] leading-relaxed" style={{ color: "rgba(255,255,255,0.38)" }}>
              Higher-than-expected potency reported. Dose low, go slow.
            </p>
          </div>

          {/* Check-in strip */}
          <div
            className="flex items-center gap-2 rounded-xl px-3 py-2"
            style={{
              background: "rgba(0,255,163,0.05)",
              border: "1px solid rgba(0,255,163,0.12)",
            }}
          >
            <div
              className="h-1.5 w-1.5 rounded-full shrink-0"
              style={{ background: "#00FFA3" }}
            />
            <span className="text-[9px]" style={{ color: "rgba(0,255,163,0.75)" }}>
              2 crew checked in
            </span>
          </div>
        </div>

        {/* Bottom nav bar */}
        <div
          className="flex items-center justify-around px-4 py-2.5"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          {[
            // home
            <svg key="home" className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>,
            // alerts
            <svg key="alerts" className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "#FF00A8" }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>,
            // people
            <svg key="people" className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>,
            // resources
            <svg key="res" className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>,
          ].map((icon, i) => (
            <div
              key={i}
              className="w-7 h-7 flex items-center justify-center rounded-lg"
              style={{
                color: i === 1 ? "#FF00A8" : "rgba(255,255,255,0.25)",
                background: i === 1 ? "rgba(255,0,168,0.10)" : "transparent",
              }}
            >
              {icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Feature card ──────────────────────────────────────────────────────────────
function CPFeatureCard({ title, body, Icon, featured = false }: Feature) {
  if (featured) {
    return (
      <div
        className="relative rounded-card p-6 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,0,168,0.09) 0%, rgba(255,0,168,0.04) 50%, rgba(255,255,255,0.02) 100%)",
          border: "1px solid rgba(255,0,168,0.28)",
          boxShadow:
            "0 0 0 1px rgba(255,0,168,0.08), 0 8px 32px rgba(255,0,168,0.12), 0 0 60px rgba(255,0,168,0.06)",
        }}
      >
        {/* Corner glow */}
        <div
          className="absolute top-0 right-0 w-32 h-32 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at top right, rgba(255,0,168,0.14) 0%, transparent 65%)",
          }}
        />
        {/* Icon */}
        <div
          className="relative inline-flex items-center justify-center w-10 h-10 rounded-xl mb-4"
          style={{
            background: "rgba(255,0,168,0.12)",
            border: "1px solid rgba(255,0,168,0.25)",
            boxShadow: "0 0 16px rgba(255,0,168,0.25)",
          }}
        >
          <Icon
            className="w-5 h-5"
            strokeWidth={1.5}
            style={{ color: "#FF00A8" }}
          />
        </div>
        <div className="relative">
          <div className="flex items-center gap-2 mb-2.5">
            <h3
              className="text-sm font-bold tracking-tight"
              style={{ color: "#FF00A8" }}
            >
              {title}
            </h3>
            <span
              className="text-[9px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full"
              style={{
                color: "rgba(255,0,168,0.7)",
                background: "rgba(255,0,168,0.10)",
                border: "1px solid rgba(255,0,168,0.18)",
              }}
            >
              Core
            </span>
          </div>
          <p
            className="text-sm leading-[1.8]"
            style={{ color: "rgba(255,255,255,0.60)" }}
          >
            {body}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative rounded-card p-5 group transition-all duration-300"
      style={{
        background: "rgba(255,255,255,0.025)",
        border: "1px solid rgba(255,255,255,0.07)",
        boxShadow: "0 1px 8px rgba(0,0,0,0.30), 0 0 0 1px rgba(255,255,255,0.03)",
      }}
      onMouseEnter={() => {}} // static — hover via CSS
    >
      {/* Icon container */}
      <div
        className="inline-flex items-center justify-center w-9 h-9 rounded-xl mb-4 transition-all duration-300"
        style={{
          background: "rgba(255,0,168,0.07)",
          border: "1px solid rgba(255,0,168,0.14)",
        }}
      >
        <Icon
          className="w-4 h-4"
          strokeWidth={1.5}
          style={{ color: "rgba(255,0,168,0.75)" }}
        />
      </div>
      <h3
        className="text-sm font-semibold mb-2.5"
        style={{ color: "#FF00A8" }}
      >
        {title}
      </h3>
      <p
        className="text-sm leading-[1.75]"
        style={{ color: "rgba(255,255,255,0.55)" }}
      >
        {body}
      </p>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function CookedPilotPage() {
  return (
    <>
      {/* Ambient float keyframe — injected once */}
      <style>{`
        @keyframes cp-float {
          0%, 100% { transform: translateY(0px) rotate(0.5deg); }
          50% { transform: translateY(-10px) rotate(-0.5deg); }
        }
        @keyframes cp-glow-pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }
        .cp-mockup-float { animation: cp-float 6s ease-in-out infinite; }
        .cp-glow-pulse { animation: cp-glow-pulse 4s ease-in-out infinite; }
        .cp-feature-card:hover {
          background: rgba(255,255,255,0.045) !important;
          border-color: rgba(255,0,168,0.22) !important;
          box-shadow: 0 0 24px rgba(255,0,168,0.10), 0 1px 8px rgba(0,0,0,0.3) !important;
        }
        .cp-feature-card:hover .cp-icon-wrap {
          background: rgba(255,0,168,0.13) !important;
          border-color: rgba(255,0,168,0.28) !important;
          box-shadow: 0 0 14px rgba(255,0,168,0.20) !important;
        }
      `}</style>

      <div className="min-h-screen">

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden pt-32 pb-16 lg:pt-44 lg:pb-24">
          {/* Background layers */}
          <div className="absolute inset-0 bg-hero-radial-pink pointer-events-none" />
          <div
            className="absolute inset-0 bg-grid-faint bg-grid opacity-[0.32] pointer-events-none"
            style={{
              maskImage:
                "radial-gradient(ellipse 70% 50% at 50% 0%, black 0%, transparent 80%)",
            }}
          />

          {/* Ambient side blobs */}
          <div
            className="cp-glow-pulse absolute -right-32 top-16 w-80 h-80 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse, rgba(255,0,168,0.10) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />
          <div
            className="cp-glow-pulse absolute -left-24 bottom-0 w-64 h-64 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse, rgba(255,0,168,0.07) 0%, transparent 70%)",
              filter: "blur(50px)",
              animationDelay: "2s",
            }}
          />

          <Container>
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 xl:gap-20">

              {/* ── Left: copy ─────────────────────────────────────────────── */}
              <div className="flex-1 max-w-xl">
                <div className="mb-5">
                  <Badge variant="live">Live</Badge>
                </div>
                <div className="mb-6">
                  <Image
                    src="/logos/cookedpilot.svg"
                    alt="Cooked Pilot logo"
                    height={273}
                    width={361}
                    className="h-16 w-auto brightness-110 contrast-105"
                    style={{ width: "auto" }}
                    priority
                  />
                </div>
                <h1 className="text-display-lg text-balance mb-5">Cooked Pilot</h1>
                <p
                  className="text-[17px] leading-relaxed mb-9 max-w-md"
                  style={{ color: "rgba(255,255,255,0.52)" }}
                >
                  Peer-based situational awareness for nights that push the edge.
                  Crew care, early recognition, and safety that doesn&apos;t kill the vibe.
                </p>
                <div className="flex flex-wrap gap-3">
                  <ButtonPrimary href="#" gradient="bg-gradient-cp" className="text-white">
                    Download on iOS
                  </ButtonPrimary>
                  <ButtonGhost href="#">Get on Android</ButtonGhost>
                </div>
              </div>

              {/* ── Right: app mockup ──────────────────────────────────────── */}
              <div className="hidden lg:flex flex-shrink-0 items-start justify-center pt-4 xl:pr-8">
                <div className="cp-mockup-float">
                  <AppMockup />
                </div>
              </div>

            </div>
          </Container>
        </section>

        {/* ── Features ─────────────────────────────────────────────────────── */}
        <Section border>
          <Container>
            {/* Section label */}
            <p
              className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-8"
              style={{ color: "rgba(255,255,255,0.25)" }}
            >
              Built for the night
            </p>

            {/* Feature grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((f) => (
                <div
                  key={f.title}
                  className={f.featured ? undefined : "cp-feature-card"}
                >
                  <CPFeatureCard {...f} />
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* ── Mission ──────────────────────────────────────────────────────── */}
        <Section border>
          <Container>
            <div className="max-w-2xl mx-auto text-center">

              {/* Ambient glow */}
              <div
                className="cp-glow-pulse mx-auto mb-8 w-24 h-px"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,0,168,0.5), transparent)",
                }}
              />

              <h2 className="text-display-md text-balance mb-5">Your crew. Covered.</h2>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "rgba(255,255,255,0.50)" }}
              >
                Cooked Pilot exists because people are going to party. Our job isn&apos;t to stop that —
                it&apos;s to make sure someone&apos;s watching the room, someone recognises the signs early,
                and nobody&apos;s crew gets left behind.
              </p>
            </div>
          </Container>
        </Section>

      </div>
    </>
  );
}
