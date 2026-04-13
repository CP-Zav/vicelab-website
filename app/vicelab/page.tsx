import type { Metadata } from "next";
import {
  Container,
  Section,
  Eyebrow,
  SectionHeader,
  Card,
  ButtonPrimary,
  ButtonGhost,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "About ViceLab — Festival Safety Intelligence",
  description:
    "Festival safety intelligence, harm reduction education, and operationally honest safety systems built for real-world environments.",
};

const values = [
  {
    title: "No judgment",
    body: "We don't moralize. We give people the information they need to make their own choices.",
  },
  {
    title: "Privacy first",
    body: "No accounts required. Minimal data. We don't track users or share information.",
  },
  {
    title: "Real-time or nothing",
    body: "Stale info is useless in a live setting. Everything we build is designed for real-time.",
  },
  {
    title: "Built for the margins",
    body: "We build for the people mainstream safety tech ignores: festival-goers, ravers, nightlife communities.",
  },
];

export default function ViceLabPage() {
  return (
    <div className="min-h-screen">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-36 pb-20 lg:pt-44 lg:pb-24">
        <div className="absolute inset-0 bg-hero-radial-blue pointer-events-none" />
        <Container>
          <div className="max-w-2xl">
            <Eyebrow color="blue">About</Eyebrow>
            <h1 className="text-display-lg text-balance mb-6">ViceLab</h1>
            <p className="text-lg text-white/50 leading-relaxed">
              Festival safety intelligence, harm reduction education, and operationally
              honest safety systems built for real-world environments. Non-preachy.
              Evidence-informed. Built for the people who actually show up.
            </p>
          </div>
        </Container>
      </section>

      {/* ── Values ───────────────────────────────────────────────────────── */}
      <Section>
        <Container>
          <SectionHeader>What we stand for</SectionHeader>
          <div className="grid sm:grid-cols-2 gap-4">
            {values.map((v) => (
              <Card key={v.title} accent="blue">
                <h3 className="text-sm font-semibold text-vl-blue mb-2">{v.title}</h3>
                <p className="text-white/50 text-sm leading-[1.75]">{v.body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Products CTA ─────────────────────────────────────────────────── */}
      <Section border>
        <Container>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 lg:gap-16">
            <div>
              <h2 className="text-display-md text-balance mb-2">
                Explore our products
              </h2>
              <p className="text-white/40 text-sm">
                See what we&apos;re building and why.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <ButtonPrimary href="/cooked-pilot" gradient="bg-cp-pink">
                Cooked Pilot
              </ButtonPrimary>
              <ButtonGhost href="/vibeguard">
                VibeGuard
              </ButtonGhost>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
