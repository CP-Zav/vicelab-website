import Image from "next/image";
import Link from "next/link";
import { Container, Section, Eyebrow, ArrowRight, Badge } from "@/components/ui";

const products = [
  {
    name: "Cooked Pilot",
    href: "/cooked-pilot",
    status: "Live",
    badgeVariant: "live" as const,
    role: "Nightlife navigation",
    tagline: "Real-time field intelligence for nightlife and festival culture.",
    description: "Anonymous-by-default harm reduction tools built for environments where information can change the outcome.",
    logo: "/logos/cookedpilot.svg",
    logoWidth: 361,
    logoHeight: 273,
    logoClass: "h-16",
    panel: "border-cp-pink/40 bg-cp-pink/[0.06] hover:border-cp-pink/80 hover:shadow-glow-cp",
    glow: "bg-cp-pink/25",
    line: "bg-cp-pink",
  },
  {
    name: "VibeGuard",
    href: "/vibeguard",
    status: "Coming Soon",
    badgeVariant: "teal" as const,
    role: "Crowd protection systems",
    tagline: "Operational safety infrastructure for live events.",
    description: "Density awareness, escalation pathways, welfare visibility, and event-level protection systems.",
    logo: "/logos/vibeguard.svg",
    logoWidth: 516,
    logoHeight: 229,
    logoClass: "h-16",
    panel: "border-vg-teal/40 bg-vg-teal/[0.05] hover:border-vg-teal/80 hover:shadow-glow-vg",
    glow: "bg-vg-teal/25",
    line: "bg-vg-teal",
  },
  {
    name: "MATRIX",
    href: "/matrix",
    status: "In Development",
    badgeVariant: "mx" as const,
    role: "Interaction intelligence",
    tagline: "Interactions create outcomes.",
    description: "Maps relationships between substances, medicines, environments, and human variables before situations escalate.",
    logo: "/logos/matrix.svg",
    logoWidth: 120,
    logoHeight: 120,
    logoClass: "h-16",
    panel: "border-[#7A2BFF]/36 bg-[#1E58FF]/[0.045] hover:border-[#7A2BFF]/72 hover:shadow-glow-mx",
    glow: "bg-[#7A2BFF]/22",
    line: "bg-gradient-mx",
  },
  {
    name: "ASA",
    href: "/asa",
    status: "In Development",
    badgeVariant: "asa" as const,
    role: "Altered-state awareness",
    tagline: "The layer that watches consciousness itself.",
    description: "A living archive of altered-state awareness, perception patterns, emotional intelligence, and field observations.",
    logo: "/logos/asa.svg",
    logoWidth: 120,
    logoHeight: 120,
    logoClass: "h-16",
    panel: "border-[#9b5de5]/28 bg-[#1a0533]/[0.35] hover:border-[#9b5de5]/60 hover:shadow-[0_0_32px_rgba(155,93,229,0.20)]",
    glow: "bg-[#9b5de5]/18",
    line: "bg-gradient-to-r from-[#9b5de5] via-[#c084fc] to-[#06b6d4]",
  },
  {
    name: "SIV",
    href: "/siv",
    status: "Coming Soon",
    badgeVariant: "siv" as const,
    role: "Substance Intelligence Vault",
    tagline: "Radical transparency saves lives.",
    description: "A classified archive system for substance identity, appearance, field intelligence, behavioural patterns, and evidence trails.",
    logo: "/logos/siv.svg",
    logoWidth: 120,
    logoHeight: 120,
    logoClass: "h-16",
    panel: "border-[#E6C27A]/32 bg-[#0F2A28]/[0.12] hover:border-[#16F0C6]/62 hover:shadow-glow-siv",
    glow: "bg-[#16F0C6]/18",
    line: "bg-gradient-siv",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-hidden bg-canvas">
      <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-24 lg:pt-48 lg:pb-32">
        <div className="absolute inset-0 bg-hero-radial-blue pointer-events-none" />
        <div className="absolute left-1/2 top-12 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-vl-blue/10 blur-[120px] pointer-events-none" />

        <Container>
          <div className="max-w-5xl">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-vl-blue/30 bg-vl-blue/[0.10] px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em] text-vl-blue shadow-glow-sig">
              <span className="h-1.5 w-1.5 rounded-full bg-vl-blue" />
              VICELAB // FIELD INTELLIGENCE ECOSYSTEM
            </div>

            <h1 className="text-display-xl text-balance mb-8 leading-none">
              Safety infrastructure for nightlife,
              <span className="text-gradient-sig"> festivals, and altered-state environments.</span>
            </h1>

            <p className="max-w-3xl text-[18px] sm:text-[20px] leading-relaxed text-white/62 mb-10">
              VICELAB is an ecosystem of operational tools designed for environments where information, timing, and awareness can change outcomes.
            </p>

            <div className="flex flex-wrap gap-3 mb-12">
              <Link href="#ecosystem" className="inline-flex items-center gap-2 rounded-[14px] bg-gradient-sig px-7 py-3.5 text-sm font-bold text-white shadow-glow-sig transition-all duration-200 hover:-translate-y-px hover:opacity-95">
                Explore the ecosystem
                <ArrowRight />
              </Link>

              <Link href="/help" className="inline-flex items-center gap-2 rounded-[14px] border border-white/12 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-white/72 transition-all duration-200 hover:border-white/22 hover:bg-white/[0.06] hover:text-white">
                Where to get help
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <Section border className="!py-12 sm:!py-18">
        <Container>
          <div id="ecosystem" className="scroll-mt-24">
            <div className="mb-8 max-w-2xl">
              <Eyebrow color="muted">The Ecosystem</Eyebrow>
              <h2 className="text-display-md text-white mb-4">Connected systems designed to work together.</h2>
              <p className="text-white/52 leading-relaxed">Each layer focuses on a different part of nightlife safety, altered-state awareness, interaction intelligence, and operational support.</p>
            </div>

            <div className="mb-6 overflow-hidden rounded-[28px] border border-vl-blue/20 bg-vl-blue/[0.05] p-8 shadow-panel">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <p className="text-[12px] uppercase tracking-[0.22em] text-vl-blue mb-4">Parent Ecosystem</p>
                  <h3 className="text-4xl font-black tracking-tight text-white mb-4">VICELAB</h3>
                  <p className="text-white/58 leading-relaxed">The intelligence layer connecting nightlife guidance, interaction systems, altered-state awareness, and support infrastructure into one coherent ecosystem.</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-black/30 p-8">
                  <Image src="/logos/vicelab.svg" alt="ViceLab logo" width={240} height={240} className="h-24 w-auto" />
                </div>
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
              {products.map((product) => (
                <Link key={product.name} href={product.href} className={`group relative min-h-[285px] overflow-hidden rounded-[24px] border p-6 shadow-panel transition-all duration-300 hover:-translate-y-1 ${product.panel}`}>
                  <div className={`absolute -right-10 -top-10 h-40 w-40 rounded-full blur-[70px] ${product.glow}`} />
                  <div className={`absolute inset-x-5 top-0 h-px ${product.line} opacity-80`} />
                  <div className="relative flex h-full flex-col">
                    <div className="mb-8 flex items-start justify-between gap-4">
                      <div className="min-w-0 flex-1">
                        <div className="mb-4 flex h-24 items-center rounded-2xl border border-white/10 bg-black/30 px-5 py-5 shadow-panel">
                          <Image src={product.logo} alt={`${product.name} logo`} width={product.logoWidth} height={product.logoHeight} className={`${product.logoClass} w-auto max-w-full brightness-110 contrast-105`} style={{ width: "auto" }} />
                        </div>
                        <p className="text-[11px] font-black uppercase tracking-[0.18em] text-white/42">{product.role}</p>
                      </div>
                      <Badge variant={product.badgeVariant}>{product.status}</Badge>
                    </div>
                    <p className="mb-3 text-[16px] font-bold leading-snug text-white/84">{product.tagline}</p>
                    <p className="text-sm leading-[1.68] text-white/54">{product.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
