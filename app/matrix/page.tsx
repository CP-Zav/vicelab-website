import Image from "next/image";
import type { Metadata } from "next";
import {
  Container,
  Section,
  Eyebrow,
  Badge,
  FeatureCard,
  ButtonPrimary,
  ButtonGhost,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Matrix — Interaction Engine",
  description:
    "An interaction engine for understanding how inputs combine and create outcomes.",
};

const features = [
  {
    title: "Check",
    body: "Your substances, medications, conditions, and timing mapped before they combine.",
  },
  {
    title: "Analyze",
    body: "Potential interaction pathways surfaced without false certainty or panic language.",
  },
  {
    title: "Assess",
    body: "Outcome language for load, duration, confidence, and risk level.",
  },
  {
    title: "Protect",
    body: "Practical next steps for people, crews, and care teams making live decisions.",
  },
  {
    title: "Emergent outcomes",
    body: "When two or more inputs interact, a new risk profile can emerge.",
  },
  {
    title: "Context aware",
    body: "Matrix keeps set, setting, health, timing, and environment in the frame.",
  },
];

const pillars = [
  { title: "Check", body: "Your medications" },
  { title: "Analyze", body: "Potential interactions" },
  { title: "Assess", body: "Risk level" },
  { title: "Protect", body: "Your health" },
];

export default function MatrixPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#030706] text-white">
      <section className="relative overflow-hidden pt-28 pb-16 lg:pt-40 lg:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_36%,rgba(150,255,72,0.18),transparent_14%),radial-gradient(circle_at_59%_38%,rgba(255,210,58,0.13),transparent_16%),radial-gradient(circle_at_68%_40%,rgba(255,80,88,0.13),transparent_17%),radial-gradient(circle_at_77%_42%,rgba(132,58,255,0.16),transparent_24%),linear-gradient(112deg,rgba(2,7,8,0.98),rgba(8,24,19,0.72),rgba(3,5,7,0.98))]" />
        <div className="absolute inset-0 opacity-45 bg-[radial-gradient(circle_at_12%_8%,rgba(96,132,99,0.28),transparent_20%),radial-gradient(circle_at_86%_12%,rgba(42,78,58,0.26),transparent_22%),radial-gradient(circle_at_18%_88%,rgba(46,87,61,0.23),transparent_23%)]" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#030706] to-transparent" />

        <Container>
          <div className="relative mx-auto max-w-7xl rounded-[38px] border border-[#c9d7bd]/10 bg-black/35 p-6 shadow-glow-mx backdrop-blur-sm lg:p-10">
            <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
              <div>
                <div className="mb-5 flex flex-wrap items-center gap-3">
                  <Eyebrow color="mx">Interaction Engine</Eyebrow>
                  <Badge variant="mx">In Development</Badge>
                </div>

                <Image
                  src="/logos/matrix.svg"
                  alt="Matrix key and lock logo"
                  width={220}
                  height={220}
                  className="mb-6 h-28 w-28 opacity-90"
                  priority
                />

                <h1 className="font-cinzel text-[clamp(3.1rem,8vw,6.7rem)] font-normal leading-[0.9] tracking-[0.2em] text-[#E7E1D0]">
                  MATRIX
                </h1>

                <p className="mt-6 text-[19px] font-semibold leading-snug text-[#C4D8B7]">
                  Understand the interactions. Protect what matters.
                </p>

                <p className="mt-5 max-w-md text-[16px] leading-relaxed text-white/55">
                  Matrix helps you check how substances, medications, conditions,
                  and context interact — so you can make informed decisions with
                  confidence.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <ButtonPrimary
                    href="mailto:hello@thevicelab.com"
                    gradient="bg-gradient-mx"
                  >
                    Check interactions
                  </ButtonPrimary>
                  <ButtonGhost href="/siv">Explore SIV</ButtonGhost>
                </div>
              </div>

              <div className="relative min-h-[460px] overflow-hidden rounded-[34px] border border-[#c9d7bd]/10 bg-[#06100F]/78 p-7 shadow-[0_0_80px_rgba(0,0,0,0.45)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_42%,rgba(30,88,255,0.22),transparent_20%),radial-gradient(circle_at_43%_45%,rgba(150,255,72,0.24),transparent_18%),radial-gradient(circle_at_58%_46%,rgba(255,210,58,0.18),transparent_18%),radial-gradient(circle_at_72%_47%,rgba(255,80,88,0.18),transparent_19%),radial-gradient(circle_at_88%_56%,rgba(132,58,255,0.18),transparent_26%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(3,7,8,0.94),rgba(3,7,8,0.22),rgba(3,7,8,0.9))]" />
                <div className="absolute inset-0 opacity-35 bg-[linear-gradient(90deg,transparent,rgba(196,216,183,0.08),transparent)]" />

                <div className="relative flex min-h-[405px] flex-col justify-between">
                  <div className="flex justify-end">
                    <div className="rounded-full border border-[#C4D8B7]/18 bg-black/38 px-4 py-2 font-plex text-[11px] uppercase tracking-[0.22em] text-[#C4D8B7]/70">
                      forest vault / live model
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-4 sm:gap-6">
                    <div className="relative h-28 w-28 rounded-full border-[5px] border-[#1E58FF] bg-black/45 shadow-[0_0_42px_rgba(30,88,255,0.45)]">
                      <div className="absolute inset-5 rounded-full border border-[#C4D8B7]/25" />
                    </div>

                    <div className="h-8 w-20 rounded-full bg-gradient-to-r from-[#1E58FF] via-[#96FF48] via-[#FFD23A] to-[#FF5058] shadow-[0_0_36px_rgba(150,255,72,0.48)]" />

                    <div className="relative h-32 w-32 rounded-full border-[5px] border-[#FF5058] bg-black/50 shadow-[0_0_42px_rgba(255,80,88,0.34)]">
                      <div className="absolute left-1/2 top-[45%] h-7 w-7 -translate-x-1/2 rounded-full bg-black" />
                      <div className="absolute left-1/2 top-[55%] h-12 w-5 -translate-x-1/2 rounded-b-full bg-black shadow-[0_0_22px_rgba(132,58,255,0.45)]" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {pillars.map((item) => (
                      <div
                        key={item.title}
                        className="rounded-2xl border border-white/10 bg-black/42 p-4 text-center"
                      >
                        <p className="font-plex text-[10px] uppercase tracking-[0.19em] text-[#C4D8B7]/80">
                          {item.title}
                        </p>
                        <p className="mt-2 text-xs text-white/40">{item.body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <Eyebrow color="mx">How it works</Eyebrow>

          <h2 className="font-cinzel text-display-sm mb-4 max-w-xl tracking-[0.04em] text-[#E7E1D0]">
            Check. Analyze. Assess. Protect.
          </h2>

          <p className="mb-12 max-w-xl text-[15px] leading-relaxed text-white/45">
            Matrix keeps the key-lock symbolism and dark forest atmosphere while
            staying practical: inputs, interactions, emergent outcomes, and
            protection.
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                body={feature.body}
                accent="mx"
              />
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
