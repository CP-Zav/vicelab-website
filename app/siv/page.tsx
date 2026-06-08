import Image from "next/image";
import type { Metadata } from "next";
import { Container, Section, Eyebrow, Badge, FeatureCard, ButtonPrimary, ButtonGhost } from "@/components/ui";

export const metadata: Metadata = {
  title: "SIV — Substance Intelligence Vault",
  description: "An open archive of substance intelligence for radical transparency, context, and harm reduction.",
};

const features = [
  { title: "Identity", body: "What is it really called? Common names, class, known analogues, and how language shifts across scenes." },
  { title: "Appearance", body: "What does it really look like? Forms, variations, markings, textures, and the limits of visual certainty." },
  { title: "Effects", body: "What is it really like? Duration, onset, subjective patterns, body load, and commonly reported experience arcs." },
  { title: "Context", body: "What shapes the experience? Set, setting, dose range, combinations, and environmental risk signals." },
  { title: "Evidence", body: "Every entry carries confidence, source type, update history, and whether the signal is verified or emerging." },
  { title: "Radical transparency", body: "The vault keeps information visible and usable. Knowledge is protection, not permission or judgement." },
];

export default function SIVPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#060708]">
      <section className="relative overflow-hidden pt-28 pb-18 lg:pt-36 lg:pb-24">
        <div className="absolute inset-0 bg-hero-radial-siv pointer-events-none" />
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <div className="relative max-w-xl">
              <div className="mb-5 flex items-center gap-3">
                <Eyebrow color="siv">Substance Intelligence Vault</Eyebrow>
                <Badge variant="siv">Coming Soon</Badge>
              </div>
              <Image src="/brand/siv-primary-logo-preview.png" alt="SIV logo" width={620} height={420} className="mb-7 h-auto w-[min(460px,90vw)]" priority />
              <h1 className="sr-only">SIV</h1>
              <p className="font-plex text-[13px] uppercase tracking-[0.22em] text-[#16F0C6] mb-4">Radical transparency saves lives.</p>
              <p className="max-w-xl text-[17px] text-white/54 leading-relaxed mb-9">
                SIV is an open archive of substance intelligence. A secret-vault interface for names,
                forms, effects, context, evidence, and risk signals — built to make information easier
                to find without flattening the truth.
              </p>
              <div className="flex flex-wrap gap-3">
                <ButtonPrimary href="mailto:hello@thevicelab.com" gradient="bg-gradient-siv text-black">Register interest</ButtonPrimary>
                <ButtonGhost href="/matrix">Explore Matrix</ButtonGhost>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[34px] border border-[#E6C27A]/18 bg-black/40 p-3 shadow-glow-siv">
              <Image src="/brand/siv-asset-preview-board.png" alt="SIV logo and favicon board" width={1600} height={1000} className="h-auto w-full rounded-[26px] object-cover" priority />
            </div>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <Eyebrow color="siv">Archive model</Eyebrow>
          <h2 className="font-cinzel text-display-sm mb-4 max-w-xl tracking-[0.08em] text-[#E6C27A]">Knowledge is protection.</h2>
          <p className="text-white/42 text-[15px] leading-relaxed mb-12 max-w-xl">
            SIV keeps the secret-vault feel while making the archive practical: identity, appearance,
            effects, context, evidence, and updates in one readable intelligence layer.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f) => <FeatureCard key={f.title} title={f.title} body={f.body} accent="siv" />)}
          </div>
        </Container>
      </Section>

      <Section border>
        <Container>
          <div className="max-w-xl">
            <h2 className="font-cinzel text-display-sm mb-5 tracking-[0.08em] text-gradient-siv">Truth is the strongest harm reduction.</h2>
            <p className="text-white/42 text-[15px] leading-relaxed mb-8">
              SIV is being developed as a substance intelligence archive for people who need context without censorship, panic, or false certainty.
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonPrimary href="mailto:hello@thevicelab.com" gradient="bg-gradient-siv text-black">Get in touch</ButtonPrimary>
              <ButtonGhost href="/matrix">Explore Matrix</ButtonGhost>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
