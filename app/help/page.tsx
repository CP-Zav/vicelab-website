import type { Metadata } from "next";
import { Container, Section, Eyebrow, Card, ButtonPrimary } from "@/components/ui";

export const metadata: Metadata = {
  title: "Where To Get Help",
  description: "Location-based support pathways for crisis, harm reduction, welfare, and mental health.",
};

const categories = ["Crisis","Mental Health","Harm Reduction","Drug Checking","Medical","Festival Welfare","Domestic Violence","LGBTQIA+","Youth","Indigenous","Emergency"];

export default function HelpPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#06070B] text-white">
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-44 lg:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(55,230,255,0.16),transparent_55%)]" />
        <Container>
          <div className="max-w-3xl">
            <Eyebrow color="teal">Support Pathways</Eyebrow>
            <h1 className="font-cinzel text-[clamp(3rem,8vw,6rem)] leading-[0.92] tracking-[0.08em] text-white">WHERE TO GET HELP</h1>
            <p className="mt-8 max-w-2xl text-[18px] leading-relaxed text-white/58">Calm, location-based support pathways for people needing help, guidance, welfare, or crisis support.</p>
            <div className="mt-12 rounded-[28px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
              <p className="text-[13px] uppercase tracking-[0.22em] text-[#37E6FF]">Where are you located?</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <button className="rounded-2xl border border-white/10 bg-black/30 px-5 py-5 text-left transition-all hover:border-[#37E6FF]/30 hover:bg-white/[0.04]"><p className="text-lg font-semibold">Australia</p><p className="mt-2 text-sm text-white/40">National and state-based support pathways.</p></button>
                <button className="rounded-2xl border border-white/10 bg-black/30 px-5 py-5 text-left transition-all hover:border-[#37E6FF]/30 hover:bg-white/[0.04]"><p className="text-lg font-semibold">Use my location</p><p className="mt-2 text-sm text-white/40">Find nearby services and support.</p></button>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <Section>
        <Container>
          <Eyebrow color="teal">Support categories</Eyebrow>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">{categories.map((item) => (<Card key={item} accent="teal"><h3 className="text-lg font-semibold text-[#37E6FF]">{item}</h3><p className="mt-3 text-sm leading-relaxed text-white/42">Region-aware support routing for {item.toLowerCase()} pathways.</p></Card>))}</div>
          <div className="mt-14 max-w-2xl rounded-[30px] border border-white/10 bg-white/[0.03] p-7"><p className="text-sm leading-relaxed text-white/50">This system is being designed to scale globally using region-aware support routing across countries, states, cities, welfare services, and emergency pathways.</p><div className="mt-7"><ButtonPrimary href="mailto:hello@thevicelab.com" gradient="bg-gradient-vg">Suggest a support service</ButtonPrimary></div></div>
        </Container>
      </Section>
    </div>
  );
}
