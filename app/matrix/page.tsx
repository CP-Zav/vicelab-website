import Image from "next/image";
import type { Metadata } from "next";
import { Container, Section, Eyebrow, Badge, FeatureCard, ButtonPrimary, ButtonGhost } from "@/components/ui";

export const metadata: Metadata = {
  title: "Matrix — Interaction Engine",
  description: "An interaction engine for understanding how inputs combine and create outcomes.",
};

const features = [
  { title: "Check", body: "Your substances, medications, conditions, and timing mapped before they combine." },
  { title: "Analyze", body: "Potential interaction pathways surfaced without false certainty or panic language." },
  { title: "Assess", body: "Outcome language for load, duration, confidence, and risk level." },
  { title: "Protect", body: "Practical next steps for people, crews, and care teams making live decisions." },
  { title: "Emergent outcomes", body: "When two or more inputs interact, a new risk profile can emerge." },
  { title: "Context aware", body: "Matrix keeps set, setting, health, timing, and environment in the frame." },
];

export default function MatrixPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#030706] text-white">
      <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_36%,rgba(150,255,72,0.18),transparent_14%),radial-gradient(circle_at_59%_38%,rgba(255,210,58,0.13),transparent_16%),radial-gradient(circle_at_68%_40%,rgba(255,80,88,0.13),transparent_17%),radial-gradient(circle_at_77%_42%,rgba(132,58,255,0.16),transparent_24%),linear-gradient(112deg,rgba(2,7,8,0.98),rgba(8,24,19,0.72),rgba(3,5,7,0.98))]" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#030706] to-transparent" />
        <Container>
          <div className="relative mx-auto max-w-7xl rounded-[38px] border border-[#c9d7bd]/10 bg-black/35 p-5 shadow-glow-mx backdrop-blur-sm lg:p-8">
            <div className="grid gap-9 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
              <div>
                <div className="mb-5 flex flex-wrap items-center gap-3">
                  <Eyebrow color="mx">Interaction Engine</Eyebrow>
                  <Badge variant="mx">In Development</Badge>
                </div>
                <Image src="/brand/matrix-primary-logo-preview.png" alt="MATRIX logo" width={520} height={220} className="mb-7 h-auto w-[min(420px,90vw)]" priority />
                <h1 className="sr-only">MATRIX</h1>
                <p className="mt-5 max-w-md text-[16px] leading-relaxed text-white/55">
                  Matrix helps you check how substances, medications, conditions, and context interact — so you can make informed decisions with confidence.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <ButtonPrimary href="mailto:hello@thevicelab.com" gradient="bg-gradient-mx">Check interactions</ButtonPrimary>
                  <ButtonGhost href="/siv">Explore SIV</ButtonGhost>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-[34px] border border-[#c9d7bd]/10 bg-[#06100F]/78 p-3 shadow-[0_0_80px_rgba(0,0,0,0.45)]">
                <Image src="/brand/matrix-asset-preview-board.png" alt="MATRIX lock and key visual identity board" width={1600} height={1000} className="h-auto w-full rounded-[26px] object-cover" priority />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <Eyebrow color="mx">How it works</Eyebrow>
          <h2 className="font-cinzel text-display-sm mb-4 max-w-xl tracking-[0.04em] text-[#E7E1D0]">Check. Analyze. Assess. Protect.</h2>
          <p className="mb-12 max-w-xl text-[15px] leading-relaxed text-white/45">
            Matrix keeps the key-lock symbolism and dark forest atmosphere while staying practical: inputs, interactions, emergent outcomes, and protection.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => <FeatureCard key={feature.title} title={feature.title} body={feature.body} accent="mx" />)}
          </div>
        </Container>
      </Section>
    </div>
  );
}
