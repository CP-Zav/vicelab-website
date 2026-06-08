import type { Metadata } from "next";
import Image from "next/image";
import { Container, Section, Eyebrow, Badge, FeatureCard, ButtonPrimary, ButtonGhost } from "@/components/ui";

export const metadata: Metadata = {
  title: "VibeGuard — Event Compliance & Crowd Safety | ViceLab",
  description:
    "Event compliance and crowd-safety infrastructure for nightlife, festivals, venues, and live environments.",
  openGraph: {
    title: "VibeGuard — Event Compliance & Crowd Safety | ViceLab",
    description:
      "Operational infrastructure for incident visibility, welfare workflows, escalation pathways, crowd/site awareness, and post-event reporting.",
    url: "https://thevicelab.com/vibeguard",
    siteName: "ViceLab",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "ViceLab" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VibeGuard — Event Compliance & Crowd Safety | ViceLab",
    description:
      "Operational infrastructure for incident visibility, welfare workflows, escalation pathways, crowd/site awareness, and post-event reporting.",
    images: ["/og-image.png"],
  },
};

const features = [
  { title: "Compliance oversight", body: "Keep key event safety obligations visible before, during, and after operations." },
  { title: "Incident logging", body: "Capture welfare, security, medical, patron, and environmental incidents in one structured flow." },
  { title: "Escalation pathways", body: "Route issues to the right person or team before small problems become operational failures." },
  { title: "Crowd and site awareness", body: "Support density checks, zone monitoring, welfare visibility, and risk-pattern recognition." },
  { title: "Post-event reporting", body: "Turn event activity into clean records for review, compliance, and continuous improvement." },
  { title: "Audit-ready records", body: "Maintain a clear operational trail for internal governance, venue requirements, and event safety review." },
];

export default function VibeGuardPage() {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden pt-28 pb-18 lg:pt-36 lg:pb-24">
        <div className="absolute inset-0 bg-hero-radial-teal pointer-events-none" />
        <div
          className="absolute inset-0 bg-grid-faint bg-grid opacity-[0.35] pointer-events-none"
          style={{ maskImage: "radial-gradient(ellipse 70% 50% at 50% 0%, black 0%, transparent 80%)" }}
        />
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
            <div className="max-w-2xl">
              <Eyebrow color="teal">Crowd Safety Infrastructure</Eyebrow>
              <div className="my-5"><Badge variant="teal">Coming Soon</Badge></div>
              <Image
                src="/brand/vibeguard-polished.png"
                alt="VibeGuard logo"
                height={520}
                width={900}
                className="mb-8 h-auto w-[min(560px,92vw)] brightness-110 contrast-105"
                priority
              />
              <h1 className="sr-only">VibeGuard</h1>
              <p className="text-[17px] text-white/50 leading-relaxed mb-6 max-w-xl">
                Event compliance and crowd-safety infrastructure for nightlife, festivals,
                venues, and live environments. Built for incident visibility, welfare workflows,
                escalation pathways, crowd/site awareness, and post-event reporting.
              </p>
              <div className="rounded-2xl border border-vg-teal/20 bg-vg-teal/[0.05] px-5 py-4 text-sm leading-relaxed text-white/56 mb-9">
                Operational accountability — not biometric tracking.
              </div>
              <div className="flex flex-wrap gap-3">
                <ButtonPrimary href="mailto:hello@thevicelab.com" gradient="bg-gradient-vg">Get early access</ButtonPrimary>
                <ButtonGhost href="/cooked-pilot">Explore Cooked Pilot</ButtonGhost>
              </div>
            </div>
            <div className="rounded-[34px] border border-vg-teal/18 bg-black/28 p-4 shadow-glow-vg">
              <Image src="/brand/vibeguard-polished.png" alt="VibeGuard polished identity asset" width={1000} height={720} className="h-auto w-full rounded-[26px] object-contain" priority />
            </div>
          </div>
        </Container>
      </section>

      <Section border>
        <Container>
          <h2 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/25 mb-8">What it does</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f) => <FeatureCard key={f.title} title={f.title} body={f.body} accent="teal" />)}
          </div>
        </Container>
      </Section>

      <Section border>
        <Container>
          <div className="relative rounded-card border border-white/[0.07] bg-white/[0.025] overflow-hidden p-8 sm:p-12 md:p-14 text-center shadow-panel">
            <div className="relative">
              <Eyebrow color="teal">In Development</Eyebrow>
              <h2 className="text-display-md text-balance mb-4">Safety operations without noise.</h2>
              <p className="text-white/38 text-base leading-relaxed max-w-md mx-auto mb-8">
                VibeGuard is in active development. If you work in harm reduction, events,
                compliance, venue operations, or festival safety — we want to hear from you.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <ButtonPrimary href="mailto:hello@thevicelab.com" gradient="bg-gradient-vg">Get in touch</ButtonPrimary>
                <ButtonGhost href="/vicelab">About ViceLab</ButtonGhost>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
