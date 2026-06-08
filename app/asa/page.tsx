import Image from "next/image";
import type { Metadata } from "next";
import { Container, Section, Eyebrow, Badge, FeatureCard, ButtonPrimary, ButtonGhost } from "@/components/ui";

export const metadata: Metadata = {
  title: "ASA — Altered State Archive",
  description:
    "A cyber-archive layer for altered-state research, memory, pattern capture, substance intelligence, and field data.",
};

const features = [
  { title: "Substance profiles", body: "Structured pharmacology, effects timelines, forms, names, patterns, and harm-reduction context." },
  { title: "Evidence grading", body: "Every data point carries source type, confidence, and whether the signal is verified, anecdotal, or emerging." },
  { title: "Field-calibrated data", body: "Profiles reflect real-world use patterns, dose ranges, routes, onset windows, and event-environment context." },
  { title: "Practitioner outputs", body: "Built for peer workers, medics, safety teams, and crews who need usable context in the field." },
  { title: "Queryable by systems", body: "ASA supports MATRIX and SIV as a structured knowledge layer across the ViceLab intelligence stack." },
  { title: "Emerging alerts", body: "Flags can be triggered by field reports, drug-checking data, pattern shifts, and new adulterant signals." },
];

export default function AsaPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#06030F]">
      <section className="relative overflow-hidden pt-28 pb-18 lg:pt-36 lg:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_64%_18%,rgba(255,43,234,0.20),transparent_28%),radial-gradient(circle_at_36%_54%,rgba(0,232,255,0.12),transparent_30%),linear-gradient(112deg,#06030F,#090318,#06030F)] pointer-events-none" />
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.84fr_1.16fr] lg:items-center">
            <div className="max-w-2xl">
              <div className="mb-5 flex items-center gap-3">
                <Eyebrow color="asa">Knowledge Archive</Eyebrow>
                <Badge variant="asa">Brand Pack Merged</Badge>
              </div>
              <Image
                src="/brand/asa-master-emblem-flaming-eye-512.png"
                alt="ASA flaming eye emblem"
                width={512}
                height={512}
                className="mb-7 h-auto w-[min(260px,70vw)] drop-shadow-[0_0_34px_rgba(255,43,234,0.34)]"
                priority
              />
              <h1 className="font-cinzel text-[clamp(3.2rem,9vw,6.6rem)] font-normal leading-[0.9] tracking-[0.26em] text-gradient-asa">ASA</h1>
              <p className="mt-5 text-[18px] font-semibold text-white/80 leading-snug">Altered State Archive.</p>
              <p className="mt-4 text-[17px] text-white/48 leading-relaxed mb-9 max-w-xl">
                A cyber-archive layer for altered-state research, memory, pattern capture, substance intelligence, and field data.
              </p>
              <div className="flex flex-wrap gap-3">
                <ButtonPrimary href="mailto:hello@thevicelab.com" gradient="bg-gradient-asa">Register interest</ButtonPrimary>
                <ButtonGhost href="/siv">Explore SIV</ButtonGhost>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[34px] border border-asa-pink/24 bg-black/38 p-4 shadow-glow-asa">
              <Image
                src="/brand/asa-core-vector-eye-512.png"
                alt="ASA eye mark"
                width={512}
                height={512}
                className="mx-auto h-auto w-full max-w-[520px] rounded-[26px] object-contain"
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <Eyebrow color="asa">What it contains</Eyebrow>
          <h2 className="text-display-sm mb-4 max-w-xl">Altered-state intelligence. Evidence-graded.</h2>
          <p className="text-white/40 text-[15px] leading-relaxed mb-12 max-w-xl">
            ASA is a structured archive built from pharmacological literature, field data, lived experience patterns, and harm-reduction practice.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f) => <FeatureCard key={f.title} title={f.title} body={f.body} accent="asa" />)}
          </div>
        </Container>
      </Section>

      <Section border>
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1fr] lg:items-center">
            <Image src="/brand/asa-locked-eye-archive-mark-512.png" alt="ASA locked eye archive mark" width={512} height={512} className="h-auto w-full max-w-[380px] rounded-[28px]" />
            <div className="max-w-xl">
              <h2 className="text-display-sm mb-5">The archive layer harm reduction has been missing.</h2>
              <p className="text-white/40 text-[15px] leading-relaxed mb-8">
                If you work in harm reduction, drug checking, festival safety, research, or peer support — ASA is designed to keep context visible without false certainty.
              </p>
              <div className="flex flex-wrap gap-3">
                <ButtonPrimary href="mailto:hello@thevicelab.com" gradient="bg-gradient-asa">Get in touch</ButtonPrimary>
                <ButtonGhost href="/matrix">Explore Matrix</ButtonGhost>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
