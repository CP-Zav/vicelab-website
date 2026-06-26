import type { Metadata } from "next";
import { Container, Eyebrow, Badge } from "@/components/ui";
import { BeliefCard } from "@/components/belief-engine/BeliefCard";
import { BELIEFS } from "@/lib/belief-engine";

export const metadata: Metadata = {
  title: "Rumour Has It — Belief Engine",
  description:
    "The front door to the Substance Intelligence Vault. Start with a belief, leave with understanding — evidence-based, festival-focused harm reduction.",
};

export default function RumourHasItPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#060708]">
      <section className="relative overflow-hidden pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="absolute inset-0 bg-hero-radial-siv pointer-events-none" />
        <Container>
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3">
              <Eyebrow color="siv">Belief Engine</Eyebrow>
              <Badge variant="siv">Front door to SIV</Badge>
            </div>
            <h1 className="mb-4 font-cinzel text-display-md tracking-[0.04em] text-gradient-siv">
              Rumour Has It
            </h1>
            <p className="text-[16px] leading-relaxed text-white/55">
              You arrived because of a belief. Leave with understanding. Every card takes under a
              minute: what people say, what we actually know, and what we&apos;d want a mate to
              know &mdash; first.
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-section">
        <Container>
          <div className="mx-auto max-w-3xl space-y-4">
            {BELIEFS.map((b) => (
              <BeliefCard key={b.id} belief={b} />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
