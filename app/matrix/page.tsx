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
    title: "Understand",
    body: "Clear outcome language for load, duration, confidence, and risk level.",
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

const particles = Array.from({ length: 26 }, (_, i) => i);

export default function MatrixPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#030706] text-white">
      <section className="relative min-h-screen overflow-hidden pt-24 pb-14 lg:pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(115,151,121,0.16),transparent_24%),linear-gradient(180deg,#07100F_0%,#030706_68%,#020403_100%)]" />
        <div className="absolute inset-0 opacity-55 bg-[radial-gradient(circle_at_10%_20%,rgba(79,114,76,0.22),transparent_18%),radial-gradient(circle_at_90%_24%,rgba(46,88,66,0.18),transparent_20%),radial-gradient(circle_at_80%_80%,rgba(20,55,42,0.26),transparent_26%)]" />

        <div className="absolute -left-24 top-0 h-[620px] w-[320px] rotate-12 rounded-full bg-[#10201A]/70 blur-3xl" />
        <div className="absolute -right-28 top-10 h-[680px] w-[360px] -rotate-12 rounded-full bg-[#132219]/70 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#030706] via-[#030706]/82 to-transparent" />

        <Container>
          <div className="relative mx-auto max-w-7xl">
            <div className="absolute left-2 top-0 hidden h-[520px] w-[1px] bg-gradient-to-b from-transparent via-[#BFD3B5]/20 to-transparent lg:block" />
            <div className="absolute right-2 top-0 hidden h-[520px] w-[1px] bg-gradient-to-b from-transparent via-[#BFD3B5]/16 to-transparent lg:block" />

            <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-center">
              <div className="relative z-20 rounded-[34px] border border-[#BFD3B5]/10 bg-black/28 p-7 shadow-[0_30px_90px_rgba(0,0,0,0.55)] backdrop-blur-sm lg:p-9">
                <div className="mb-7 flex items-center gap-3">
                  <Eyebrow color="mx">Interaction Engine</Eyebrow>
                  <Badge variant="mx">Matrix</Badge>
                </div>

                <Image
                  src="/logos/matrix.svg"
                  alt="Matrix key and lock logo"
                  width={170}
                  height={170}
                  className="mb-6 h-20 w-20 opacity-90"
                />

                <h1 className="font-cinzel text-[clamp(3.3rem,8vw,6.8rem)] font-normal leading-[0.88] tracking-[0.22em] text-[#E7E1D0] drop-shadow-[0_0_32px_rgba(231,225,208,0.18)]">
                  MATRIX
                </h1>

                <p className="mt-7 max-w-sm text-[21px] leading-snug text-[#C4D2B8]">
                  Understand drug interactions. Protect what matters.
                </p>

                <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/54">
                  Matrix helps you check how medications, substances, conditions,
                  timing, and context may interact — so you can make informed
                  decisions with confidence.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <ButtonPrimary href="mailto:hello@thevicelab.com" gradient="bg-gradient-mx">
                    Check interactions
                  </ButtonPrimary>
                  <ButtonGhost href="/siv">Explore SIV</ButtonGhost>
                </div>

                <div className="mt-10 grid gap-3">
                  {[
                    ["CHECK", "Your substances and conditions"],
                    ["ANALYZE", "Potential interaction paths"],
                    ["UNDERSTAND", "How they may affect you"],
                    ["PROTECT", "Make safer decisions"],
                  ].map(([title, body]) => (
                    <div
                      key={title}
                      className="grid grid-cols-[58px_1fr] items-center gap-4 border-t border-[#BFD3B5]/10 pt-3"
                    >
cd ~/vicelab-website

cat > app/matrix/page.tsx <<'EOF'
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
    title: "Understand",
    body: "Clear outcome language for load, duration, confidence, and risk level.",
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

const particles = Array.from({ length: 26 }, (_, i) => i);

export default function MatrixPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#030706] text-white">
      <section className="relative min-h-screen overflow-hidden pt-24 pb-14 lg:pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(115,151,121,0.16),transparent_24%),linear-gradient(180deg,#07100F_0%,#030706_68%,#020403_100%)]" />
        <div className="absolute inset-0 opacity-55 bg-[radial-gradient(circle_at_10%_20%,rgba(79,114,76,0.22),transparent_18%),radial-gradient(circle_at_90%_24%,rgba(46,88,66,0.18),transparent_20%),radial-gradient(circle_at_80%_80%,rgba(20,55,42,0.26),transparent_26%)]" />

        <div className="absolute -left-24 top-0 h-[620px] w-[320px] rotate-12 rounded-full bg-[#10201A]/70 blur-3xl" />
        <div className="absolute -right-28 top-10 h-[680px] w-[360px] -rotate-12 rounded-full bg-[#132219]/70 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#030706] via-[#030706]/82 to-transparent" />

        <Container>
          <div className="relative mx-auto max-w-7xl">
            <div className="absolute left-2 top-0 hidden h-[520px] w-[1px] bg-gradient-to-b from-transparent via-[#BFD3B5]/20 to-transparent lg:block" />
            <div className="absolute right-2 top-0 hidden h-[520px] w-[1px] bg-gradient-to-b from-transparent via-[#BFD3B5]/16 to-transparent lg:block" />

            <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-center">
              <div className="relative z-20 rounded-[34px] border border-[#BFD3B5]/10 bg-black/28 p-7 shadow-[0_30px_90px_rgba(0,0,0,0.55)] backdrop-blur-sm lg:p-9">
                <div className="mb-7 flex items-center gap-3">
                  <Eyebrow color="mx">Interaction Engine</Eyebrow>
                  <Badge variant="mx">Matrix</Badge>
                </div>

                <Image
                  src="/logos/matrix.svg"
                  alt="Matrix key and lock logo"
                  width={170}
                  height={170}
                  className="mb-6 h-20 w-20 opacity-90"
                />

                <h1 className="font-cinzel text-[clamp(3.3rem,8vw,6.8rem)] font-normal leading-[0.88] tracking-[0.22em] text-[#E7E1D0] drop-shadow-[0_0_32px_rgba(231,225,208,0.18)]">
                  MATRIX
                </h1>

                <p className="mt-7 max-w-sm text-[21px] leading-snug text-[#C4D2B8]">
                  Understand drug interactions. Protect what matters.
                </p>

                <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/54">
                  Matrix helps you check how medications, substances, conditions,
                  timing, and context may interact — so you can make informed
                  decisions with confidence.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <ButtonPrimary href="mailto:hello@thevicelab.com" gradient="bg-gradient-mx">
                    Check interactions
                  </ButtonPrimary>
                  <ButtonGhost href="/siv">Explore SIV</ButtonGhost>
                </div>

                <div className="mt-10 grid gap-3">
                  {[
                    ["CHECK", "Your substances and conditions"],
                    ["ANALYZE", "Potential interaction paths"],
                    ["UNDERSTAND", "How they may affect you"],
                    ["PROTECT", "Make safer decisions"],
                  ].map(([title, body]) => (
                    <div
                      key={title}
                      className="grid grid-cols-[58px_1fr] items-center gap-4 border-t border-[#BFD3B5]/10 pt-3"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#A4C895]/28 bg-[#07110E]/80 text-[#A4C895]">
                        <span className="h-2 w-2 rounded-full bg-[#8BFF56] shadow-[0_0_18px_rgba(139,255,86,0.7)]" />
                      </div>
                      <div>
                        <p className="font-plex text-[11px] uppercase tracking-[0.22em] text-[#D9D0B8]/78">
                          {title}
                        </p>
                        <p className="mt-1 text-[13px] text-white/42">{body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative min-h-[650px] overflow-hidden rounded-[44px] border border-[#E7E1D0]/10 bg-[#06100E] shadow-[0_40px_120px_rgba(0,0,0,0.72)]">
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,8,7,0.98),rgba(6,14,12,0.45),rgba(4,7,7,0.94)),radial-gradient(circle_at_50%_32%,rgba(139,255,86,0.13),transparent_18%),radial-gradient(circle_at_66%_36%,rgba(255,202,75,0.12),transparent_18%),radial-gradient(circle_at_78%_45%,rgba(255,62,92,0.12),transparent_20%)]" />

                <div className="absolute inset-0 opacity-45">
                  <div className="absolute left-10 top-0 h-72 w-24 rotate-12 rounded-full bg-[#1E2F22] blur-2xl" />
                  <div className="absolute right-16 top-4 h-80 w-24 -rotate-12 rounded-full bg-[#17241D] blur-2xl" />
                  <div className="absolute left-1/2 top-0 h-96 w-52 -translate-x-1/2 bg-gradient-to-b from-[#8FA58C]/16 to-transparent blur-2xl" />
                </div>

                <div className="absolute left-8 top-8 h-24 w-44 rounded-full border border-[#D9D0B8]/10 opacity-40 blur-[1px]" />
                <div className="absolute right-6 top-8 h-28 w-40 rounded-full border border-[#D9D0B8]/10 opacity-35 blur-[1px]" />

                <div className="absolute left-[4%] top-[25%] h-[180px] w-[300px]">
                  <div className="absolute left-0 top-10 h-28 w-28 rounded-full border-[12px] border-[#263529] bg-black/40 shadow-[inset_0_0_34px_rgba(190,220,170,0.14),0_0_28px_rgba(139,255,86,0.08)]" />
                  <div className="absolute left-[94px] top-[82px] h-10 w-[150px] rounded-full bg-gradient-to-r from-[#263529] via-[#586548] to-[#9FD46F] shadow-[0_0_32px_rgba(139,255,86,0.26)]" />
                  <div className="absolute left-[218px] top-[53px] h-28 w-20 rounded-[18px] bg-gradient-to-br from-[#A6C77F] via-[#536043] to-[#18241D] shadow-[inset_0_0_26px_rgba(0,0,0,0.56),0_0_34px_rgba(139,255,86,0.35)]" />
                  <div className="absolute left-[262px] top-[70px] h-8 w-12 rounded-l-full bg-[#06100E]" />
                  <div className="absolute left-[262px] top-[112px] h-8 w-12 rounded-l-full bg-[#06100E]" />
                </div>

                <div className="absolute right-[5%] top-[20%] h-[260px] w-[230px]">
                  <div className="absolute inset-0 rounded-[52%_48%_48%_52%] bg-gradient-to-br from-[#767060] via-[#222923] to-[#080B0A] shadow-[inset_0_0_56px_rgba(0,0,0,0.75),0_0_46px_rgba(255,215,138,0.16)]" />
                  <div className="absolute left-0 top-[74px] h-28 w-24 rounded-r-full bg-[#06100E]" />
                  <div className="absolute left-[92px] top-[96px] h-16 w-20 rounded-full bg-[#06100E]" />
                  <div className="absolute left-[126px] top-[110px] h-20 w-9 rounded-b-full bg-black" />
                  <div className="absolute inset-5 rounded-[52%_48%_48%_52%] border border-[#D9D0B8]/14" />
                </div>

                <div className="absolute left-[44%] top-[38%] h-28 w-44 -translate-x-1/2">
                  <div className="absolute inset-y-10 left-0 right-0 rounded-full bg-gradient-to-r from-[#8BFF56] via-[#FFD84C] to-[#FF4D6F] blur-md opacity-80" />
                  <div className="absolute inset-y-12 left-0 right-0 rounded-full bg-gradient-to-r from-[#8BFF56] via-[#FFD84C] to-[#FF4D6F]" />
                  {particles.map((p) => (
                    <span
                      key={p}
                      className="absolute h-1.5 w-1.5 rounded-full bg-[#F4E7B2] shadow-[0_0_14px_rgba(255,230,150,0.85)]"
                      style={{
                        left: `${8 + ((p * 13) % 86)}%`,
                        top: `${18 + ((p * 19) % 68)}%`,
                        opacity: 0.35 + ((p % 5) * 0.12),
                      }}
                    />
                  ))}
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black via-black/54 to-transparent" />

                <div className="absolute bottom-11 left-1/2 w-full max-w-xl -translate-x-1/2 px-6 text-center">
                  <Image
                    src="/logos/matrix.svg"
                    alt=""
                    width={90}
                    height={90}
                    className="mx-auto mb-3 h-12 w-12 opacity-72"
                  />
                  <p className="font-cinzel text-[42px] tracking-[0.22em] text-[#E7E1D0]">
                    MATRIX
                  </p>
                  <div className="mx-auto my-4 h-px w-40 bg-gradient-to-r from-transparent via-[#D9D0B8]/45 to-transparent" />
                  <p className="text-[20px] leading-snug text-[#C4D2B8]">
                    Interactions create outcomes.
                  </p>
                  <p className="mx-auto mt-3 max-w-md text-[14px] leading-relaxed text-white/48">
                    When two or more inputs interact, new outcomes emerge. This
                    is the Matrix.
                  </p>
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
            Check. Analyze. Understand. Protect.
          </h2>
          <p className="mb-12 max-w-xl text-[15px] leading-relaxed text-white/42">
            Matrix keeps the key-lock symbolism and dark forest atmosphere while
            staying practical: inputs, interactions, emergent outcomes, and
            protection.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <FeatureCard key={f.title} title={f.title} body={f.body} accent="mx" />
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
