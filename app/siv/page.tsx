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

const categories = ["Psychedelics", "Empathogens", "Stimulants", "Depressants", "Dissociatives", "Cannabinoids", "Opioids", "Research Chemicals"];

export default function SIVPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#060708]">
      <section className="relative overflow-hidden pt-32 pb-18 lg:pt-44 lg:pb-24">
        <div className="absolute inset-0 bg-hero-radial-siv pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_24%,rgba(22,240,198,0.16),transparent_28%),radial-gradient(circle_at_50%_84%,rgba(230,194,122,0.08),transparent_36%),linear-gradient(rgba(230,194,122,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(22,240,198,0.02)_1px,transparent_1px)] bg-[length:100%_100%,100%_100%,56px_56px,56px_56px] opacity-90 pointer-events-none" />
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
            <div className="relative max-w-xl">
              <div className="mb-5 flex items-center gap-3">
                <Eyebrow color="siv">Substance Intelligence Vault</Eyebrow>
                <Badge variant="siv">Coming Soon</Badge>
              </div>
              <div className="mb-7 flex items-center gap-5">
                <Image src="/logos/siv.svg" alt="SIV logo" width={104} height={104} className="h-24 w-24" />
                <div>
                  <h1 className="font-cinzel text-[clamp(3.4rem,9vw,7rem)] font-normal leading-[0.9] tracking-[0.32em] text-[#E6C27A]">
                    SIV
                  </h1>
                  <p className="mt-3 font-plex text-[11px] uppercase tracking-[0.28em] text-[#E6C27A]/70">Substance Intelligence Vault</p>
                </div>
              </div>
              <p className="font-plex text-[13px] uppercase tracking-[0.22em] text-[#16F0C6] mb-4">
                Radical transparency saves lives.
              </p>
              <p className="max-w-xl text-[17px] text-white/54 leading-relaxed mb-9">
                SIV is an open archive of substance intelligence. A secret-vault interface for names,
                forms, effects, context, evidence, and risk signals — built to make information easier
                to find without flattening the truth.
              </p>
              <div className="flex flex-wrap gap-3">
                <ButtonPrimary href="mailto:hello@thevicelab.com" gradient="bg-gradient-siv text-black">
                  Register interest
                </ButtonPrimary>
                <ButtonGhost href="/matrix">Explore Matrix</ButtonGhost>
              </div>
            </div>

            <div className="relative min-h-[460px] overflow-hidden rounded-[34px] border border-[#E6C27A]/18 bg-[#06100F]/78 p-6 shadow-glow-siv">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_56%_44%,rgba(22,240,198,0.18),transparent_22%),radial-gradient(circle_at_34%_72%,rgba(230,194,122,0.10),transparent_30%)]" />
              <div className="absolute right-[-4rem] top-10 h-72 w-72 rounded-full border border-[#16F0C6]/16" />
              <div className="absolute right-2 top-24 h-44 w-44 rounded-full border border-[#E6C27A]/18" />
              <div className="relative grid h-full min-h-[410px] gap-4 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="rounded-2xl border border-[#E6C27A]/14 bg-black/42 p-5">
                  <p className="font-cinzel text-2xl tracking-[0.22em] text-[#E6C27A]">VAULT</p>
                  <p className="mt-4 text-sm leading-relaxed text-white/52">Knowledge is power. Truth is the strongest harm reduction.</p>
                  <div className="mt-8 grid gap-3">
                    {categories.slice(0, 4).map((item) => (
                      <div key={item} className="rounded-xl border border-[#16F0C6]/12 bg-[#0F2A28]/28 px-4 py-3 font-plex text-[11px] uppercase tracking-[0.16em] text-white/64">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4 rounded-2xl border border-[#16F0C6]/14 bg-black/38 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-cinzel text-3xl text-white/88">LSD</p>
                      <p className="text-sm text-white/42">Lysergic Acid Diethylamide</p>
                    </div>
                    <span className="text-[#E6C27A]">☆</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {["Blotter", "Crystal", "Liquid", "Gel tab"].map((item) => (
                      <div key={item} className="rounded-xl border border-white/10 bg-[#06100F]/70 p-3">
                        <div className="mb-3 h-16 rounded-lg border border-[#E6C27A]/10 bg-[radial-gradient(circle_at_50%_50%,rgba(22,240,198,0.18),transparent_55%)]" />
                        <p className="font-plex text-[10px] uppercase tracking-[0.14em] text-white/54">{item}</p>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-xl border border-[#E6C27A]/12 bg-black/34 p-4">
                    <p className="font-plex text-[10px] uppercase tracking-[0.2em] text-[#16F0C6]">verified information</p>
                    <p className="mt-3 text-sm leading-relaxed text-white/54">Appearance alone cannot confirm identity. Treat entries as context, not certainty.</p>
                  </div>
                </div>
              </div>
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
