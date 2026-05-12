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
  { title: "Understand", body: "Clear outcome language for load, duration, confidence, and risk level." },
  { title: "Protect", body: "Practical next steps for people, crews, and care teams making live decisions." },
  { title: "Emergent outcomes", body: "When two or more inputs interact, a new risk profile can emerge." },
  { title: "Context aware", body: "Matrix keeps set, setting, health, timing, and environment in the frame." },
];

export default function MatrixPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#050808]">
      <section className="relative overflow-hidden pt-28 pb-16 lg:pt-40 lg:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_48%_42%,rgba(139,255,86,0.13),transparent_15%),radial-gradient(circle_at_62%_42%,rgba(255,198,64,0.12),transparent_18%),radial-gradient(circle_at_78%_46%,rgba(122,43,255,0.14),transparent_28%),linear-gradient(110deg,rgba(6,12,11,0.96),rgba(10,20,18,0.64),rgba(4,6,7,0.96))]" />
        <div className="absolute inset-0 opacity-35 bg-[radial-gradient(circle_at_10%_10%,rgba(96,132,99,0.26),transparent_18%),radial-gradient(circle_at_92%_18%,rgba(96,132,99,0.22),transparent_18%),radial-gradient(circle_at_18%_86%,rgba(48,88,58,0.20),transparent_20%)]" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#050808] to-transparent" />
        <Container>
          <div className="relative mx-auto max-w-6xl rounded-[36px] border border-white/10 bg-black/28 p-6 shadow-glow-mx backdrop-blur-sm lg:p-10">
            <div className="grid gap-10 lg:grid-cols-[0.84fr_1.16fr] lg:items-center">
              <div>
                <div className="mb-5 flex items-center gap-3"><Eyebrow color="mx">Interaction Engine</Eyebrow><Badge variant="mx">In Development</Badge></div>
                <Image src="/logos/matrix.svg" alt="Matrix key and lock logo" width={220} height={220} className="mb-6 h-28 w-28" />
                <h1 className="font-cinzel text-[clamp(3.1rem,8vw,6.6rem)] font-normal leading-[0.9] tracking-[0.20em] text-[#E7E1D0]">MATRIX</h1>
                <p className="mt-6 text-[19px] font-semibold leading-snug text-[#BFD3B5]">Understand the interactions. Protect what matters.</p>
                <p className="mt-5 max-w-md text-[16px] leading-relaxed text-white/52">Matrix helps you check how substances, medications, conditions, and context interact — so you can make informed decisions with confidence.</p>
                <div className="mt-8 flex flex-wrap gap-3"><ButtonPrimary href="mailto:hello@thevicelab.com" gradient="bg-gradient-mx">Check interactions</ButtonPrimary><ButtonGhost href="/siv">Explore SIV</ButtonGhost></div>
              </div>
              <div className="relative min-h-[430px] overflow-hidden rounded-[32px] border border-white/10 bg-[#06100F]/72 p-7">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_23%_46%,rgba(30,88,255,0.26),transparent_20%),radial-gradient(circle_at_48%_46%,rgba(120,255,72,0.19),transparent_17%),radial-gradient(circle_at_66%_47%,rgba(255,198,64,0.16),transparent_18%),radial-gradient(circle_at_80%_48%,rgba(255,40,40,0.18),transparent_20%),radial-gradient(circle_at_90%_55%,rgba(122,43,255,0.16),transparent_25%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(3,7,8,0.92),rgba(3,7,8,0.20),rgba(3,7,8,0.88))]" />
                <div className="relative flex min-h-[375px] flex-col justify-between">
                  <div className="flex justify-end"><div className="rounded-full border border-[#BFD3B5]/18 bg-black/38 px-4 py-2 font-plex text-[11px] uppercase tracking-[0.22em] text-[#BFD3B5]/70">forest gate / live model</div></div>
                  <div className="flex items-center justify-center gap-3 sm:gap-5">
                    <div className="h-28 w-28 rounded-full border-[5px] border-[#1E58FF] bg-black/45 shadow-[0_0_42px_rgba(30,88,255,0.45)]" />
                    <div className="h-8 w-16 rounded-full bg-gradient-to-r from-[#1E58FF] via-[#8BFF56] to-[#FFC640] shadow-[0_0_34px_rgba(139,255,86,0.45)]" />
                    <div className="relative h-32 w-32 rounded-full border-[5px] border-[#FF2828] bg-black/50 shadow-[0_0_42px_rgba(255,40,40,0.34)]"><div className="absolute left-1/2 top-1/2 h-12 w-5 -translate-x-1/2 -translate-y-1/2 rounded-b-full bg-black shadow-[0_0_22px_rgba(122,43,255,0.45)]" /></div>
                  </div>
                  <div className="grid grid-cols-4 gap-3">{["Check", "Analyze", "Assess", "Protect"].map((item) => <div key={item} className="rounded-2xl border border-white/10 bg-black/42 p-4 text-center"><p className="font-plex text-[10px] uppercase tracking-[0.19em] text-[#BFD3B5]/76">{item}</p></div>)}</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <Section><Container><Eyebrow color="mx">How it works</Eyebrow><h2 className="font-cinzel text-display-sm mb-4 max-w-xl tracking-[0.04em] text-[#E7E1D0]">Check. Analyze. Assess. Protect.</h2><p className="mb-12 max-w-xl text-[15px] leading-relaxed text-white/42">Matrix keeps the key-lock symbolism and dark forest atmosphere while staying practical: inputs, interactions, emergent outcomes, and protection.</p><div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">{features.map((f) => <FeatureCard key={f.title} title={f.title} body={f.body} accent="mx" />)}</div></Container></Section>
    </div>
  );
}
