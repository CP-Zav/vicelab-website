import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Container, Section, Eyebrow, Badge, ButtonPrimary, ArrowRight } from "@/components/ui";

export const metadata: Metadata = {
  title: "ASA — Altered State Architecture",
  description: "The connected ViceLab intelligence environment containing the S.I.V. substance vault and MATRIX interaction engine.",
};

const modules = [
  { name: "S.I.V.", expandedName: "Substance Intelligence Vault", href: "/siv", image: "/brand/siv-primary-logo-preview.png", imageAlt: "S.I.V. Substance Intelligence Vault logo", description: "The intelligence layer: substance identity, effects, context, evidence, uncertainty and emerging signals.", action: "Enter the vault", accent: "siv" },
  { name: "MATRIX", expandedName: "Interaction & risk engine", href: "/matrix", image: "/brand/matrix-primary-logo-preview.png", imageAlt: "MATRIX interaction engine logo", description: "The analysis layer: substances, medications, health factors, timing and context considered together.", action: "Open MATRIX", accent: "matrix" },
] as const;

export default function AsaPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#06030F] text-white">
      <section className="relative overflow-hidden pb-16 pt-28 lg:pb-24 lg:pt-36">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_62%_18%,rgba(139,92,246,0.22),transparent_28%),radial-gradient(circle_at_36%_54%,rgba(125,249,255,0.10),transparent_30%),linear-gradient(112deg,#06030F,#090318,#06030F)]" />
        <Container className="relative">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-center">
            <div className="max-w-3xl">
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <Eyebrow color="asa">ViceLab intelligence environment</Eyebrow>
                <Badge variant="asa">Unified shell</Badge>
              </div>
              <h1 className="font-cinzel text-[clamp(3rem,9vw,6.6rem)] font-normal leading-[0.9] tracking-[0.16em] text-gradient-asa sm:tracking-[0.24em]">ASA</h1>
              <p className="mt-5 text-[19px] font-semibold leading-snug text-white/85">Altered State Architecture</p>
              <p className="mb-8 mt-4 max-w-2xl text-[16px] leading-relaxed text-white/52 sm:text-[17px]">One connected environment for substance intelligence and interaction analysis. S.I.V. and MATRIX are distinct modules inside ASA—not separate products floating outside it.</p>
              <ButtonPrimary href="#modules" gradient="bg-gradient-asa">Choose a module</ButtonPrimary>
            </div>
            <Image src="/brand/asa-core-vector-eye-512.png" alt="ASA eye mark" width={512} height={512} className="mx-auto h-auto w-full max-w-[390px] drop-shadow-[0_0_38px_rgba(139,92,246,0.28)]" priority />
          </div>
        </Container>
      </section>

      <Section border className="relative">
        <Container>
          <div className="mb-10 max-w-2xl">
            <Eyebrow color="asa">How ASA is organised</Eyebrow>
            <h2 className="text-display-sm mb-4">One architecture. Two connected modules.</h2>
            <p className="text-[15px] leading-relaxed text-white/44">Start with the vault when you need substance intelligence. Move into MATRIX when you need to examine what may happen when multiple inputs and personal factors meet.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-stretch" aria-label="ASA module relationship">
            <div className="rounded-2xl border border-[#7DF9FF]/16 bg-[#071414]/70 p-5"><p className="font-plex text-[11px] uppercase tracking-[0.18em] text-[#7DF9FF]">01 · Intelligence</p><p className="mt-3 text-lg font-semibold">S.I.V.</p><p className="mt-2 text-sm leading-relaxed text-white/42">Structured substance context and evidence.</p></div>
            <div className="flex items-center justify-center py-1 text-white/22" aria-hidden="true"><span className="sm:hidden">↓</span><span className="hidden sm:inline">→</span></div>
            <div className="rounded-2xl border border-[#D8B35A]/16 bg-[#100d07]/70 p-5"><p className="font-plex text-[11px] uppercase tracking-[0.18em] text-[#D8B35A]">02 · Analysis</p><p className="mt-3 text-lg font-semibold">MATRIX</p><p className="mt-2 text-sm leading-relaxed text-white/42">Interaction analysis informed by inputs and context.</p></div>
          </div>
        </Container>
      </Section>

      <Section className="scroll-mt-20">
        <Container>
          <div id="modules" className="scroll-mt-20"><Eyebrow color="asa">Inside ASA</Eyebrow></div>
          <div className="grid gap-5 lg:grid-cols-2">
            {modules.map((module) => (
              <Link key={module.name} href={module.href} className={`group flex min-h-[330px] flex-col overflow-hidden rounded-[28px] border bg-black/35 p-5 transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 sm:p-7 ${module.accent === "siv" ? "border-[#7DF9FF]/14 hover:border-[#7DF9FF]/35 hover:shadow-glow-siv" : "border-[#D8B35A]/14 hover:border-[#D8B35A]/35 hover:shadow-glow-mx"}`}>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/30">ASA module</p>
                <Image src={module.image} alt={module.imageAlt} width={620} height={260} className="my-5 h-24 w-full object-contain object-left" />
                <h2 className="text-lg font-semibold text-white">{module.expandedName}</h2>
                <p className="mt-3 flex-1 text-[14px] leading-relaxed text-white/45">{module.description}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/72 transition group-hover:text-white">{module.action} <ArrowRight className="transition-transform group-hover:translate-x-1" /></span>
              </Link>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-xs leading-relaxed text-white/28">ASA is in development. Its outputs provide harm-reduction context, not medical advice, diagnosis, or a guarantee of safety.</p>
        </Container>
      </Section>
    </div>
  );
}
