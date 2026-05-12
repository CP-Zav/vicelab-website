import Image from "next/image";
import type { Metadata } from "next";
import { Container, Section, Eyebrow, Badge, FeatureCard, ButtonPrimary, ButtonGhost } from "@/components/ui";

export const metadata: Metadata = {
  title: "Matrix — Interaction Engine",
  description: "An interaction engine for understanding how inputs combine and create outcomes.",
};

const features = [
  { title: "Check", body: "Map inputs, conditions, timing, and context before they combine." },
  { title: "Analyze", body: "Surface likely pathways without flattening uncertainty." },
  { title: "Understand", body: "Translate complex signals into readable outcomes." },
  { title: "Protect", body: "Support practical next steps for high-pressure environments." },
  { title: "Emergent outcomes", body: "Show how combined inputs can create a new profile." },
  { title: "Evidence trace", body: "Keep confidence and source context visible." },
];

export default function MatrixPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#070A0B]">
      <section className="relative overflow-hidden pt-32 pb-18 lg:pt-44 lg:pb-24">
        <div className="absolute inset-0 bg-hero-radial-mx pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(122,43,255,0.18),transparent_32%),radial-gradient(circle_at_28%_44%,rgba(30,88,255,0.13),transparent_28%)] pointer-events-none" />
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
            <div className="relative max-w-xl">
              <div className="mb-5 flex items-center gap-3"><Eyebrow color="mx">Interaction Engine</Eyebrow><Badge variant="mx">In Development</Badge></div>
              <div className="mb-6 flex items-center gap-5"><Image src="/logos/matrix.svg" alt="Matrix logo" width={92} height={92} className="h-20 w-20" /><h1 className="font-cinzel text-[clamp(3.2rem,8vw,6.6rem)] font-normal leading-[0.9] tracking-[0.18em] text-white/90">MATRIX</h1></div>
              <p className="text-[19px] font-semibold text-white/78 leading-snug mb-4">Interactions create outcomes.</p>
              <p className="max-w-xl text-[17px] text-white/52 leading-relaxed mb-9">A dark key-lock system for understanding how multiple inputs interact before outcomes change.</p>
              <div className="flex flex-wrap gap-3"><ButtonPrimary href="mailto:hello@thevicelab.com" gradient="bg-gradient-mx">Check interactions</ButtonPrimary><ButtonGhost href="/siv">Explore SIV</ButtonGhost></div>
            </div>
            <div className="relative min-h-[420px] overflow-hidden rounded-[32px] border border-white/10 bg-black/40 p-6 shadow-glow-mx">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_50%,rgba(30,88,255,0.24),transparent_24%),radial-gradient(circle_at_54%_50%,rgba(255,40,40,0.20),transparent_22%),radial-gradient(circle_at_78%_50%,rgba(122,43,255,0.26),transparent_26%)]" />
              <div className="relative flex min-h-[380px] flex-col justify-between"><div className="flex justify-end"><div className="rounded-full border border-[#7A2BFF]/30 bg-[#7A2BFF]/10 px-4 py-2 font-plex text-[11px] uppercase tracking-[0.22em] text-white/62">portal unlocked</div></div><div className="grid items-center gap-4 sm:grid-cols-[1fr_auto_1fr_auto_1fr]"><div className="h-24 w-24 rounded-full border border-[#1E58FF] bg-black/45 shadow-[0_0_34px_rgba(30,88,255,0.4)]" /><span className="hidden text-3xl text-white/34 sm:block">+</span><div className="h-24 w-24 rounded-full border border-[#FF2828] bg-black/45 shadow-[0_0_34px_rgba(255,40,40,0.4)]" /><span className="hidden text-3xl text-white/34 sm:block">=</span><div className="h-24 w-24 rounded-full border border-[#7A2BFF] bg-black/45 shadow-[0_0_34px_rgba(122,43,255,0.4)]" /></div></div>
            </div>
          </div>
        </Container>
      </section>
      <Section><Container><Eyebrow color="mx">How it works</Eyebrow><h2 className="font-cinzel text-display-sm mb-4 max-w-xl tracking-[0.04em]">Check. Analyze. Understand. Protect.</h2><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">{features.map((f) => <FeatureCard key={f.title} title={f.title} body={f.body} accent="mx" />)}</div></Container></Section>
    </div>
  );
}
