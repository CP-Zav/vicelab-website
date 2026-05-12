import Link from "next/link";
import { Container, Section, Eyebrow, ArrowRight, Badge } from "@/components/ui";

const products = [
  {
    name: "Cooked Pilot",
    href: "/cooked-pilot",
    status: "Live",
    badgeVariant: "live" as const,
    role: "Public harm reduction",
    tagline: "Real-time alerts for festivals, nightlife, and people on the floor.",
    description:
      "Anonymous by default. No account. No tracking. Fast field intelligence when information matters most.",
    logoClass: "text-cp-pink",
    panel:
      "border-cp-pink/40 bg-cp-pink/[0.06] hover:border-cp-pink/80 hover:shadow-glow-cp",
    glow: "bg-cp-pink/25",
    line: "bg-cp-pink",
  },
  {
    name: "VibeGuard",
    href: "/vibeguard",
    status: "Coming Soon",
    badgeVariant: "teal" as const,
    role: "Crowd safety operations",
    tagline: "Crowd safety and compliance tools for event organisers.",
    description:
      "Density monitoring, threshold alerts, and audit-ready reporting for high-pressure event environments.",
    logoClass: "text-transparent bg-clip-text bg-gradient-to-r from-[#5CFF75] to-[#00E9FF]",
    panel:
      "border-vg-teal/40 bg-vg-teal/[0.05] hover:border-vg-teal/80 hover:shadow-glow-vg",
    glow: "bg-vg-teal/25",
    line: "bg-vg-teal",
  },
  {
    name: "ViceLab",
    href: "/vicelab",
    status: "Research",
    badgeVariant: "blue" as const,
    role: "Education and systems",
    tagline: "Research, education, and harm reduction resources.",
    description:
      "The intelligence layer behind the ecosystem: non-preachy, privacy-conscious, and field-tested.",
    logoClass: "text-vl-blue",
    panel:
      "border-vl-blue/40 bg-vl-blue/[0.06] hover:border-vl-blue/80 hover:shadow-glow-sig",
    glow: "bg-vl-blue/25",
    line: "bg-vl-blue",
  },
  {
    name: "Matrix",
    href: "/matrix",
    status: "In Development",
    badgeVariant: "blue" as const,
    role: "Substance interaction engine",
    tagline: "Risk-stratified interaction intelligence for practitioners.",
    description:
      "Built for people who need accurate pharmacological context quickly, without moralising noise.",
    logoClass: "text-vl-blue",
    panel:
      "border-vl-blue/28 bg-white/[0.035] hover:border-vl-blue/65 hover:shadow-glow-sig",
    glow: "bg-vl-blue/18",
    line: "bg-vl-blue",
  },
  {
    name: "ASA",
    href: "/asa",
    status: "In Development",
    badgeVariant: "blue" as const,
    role: "Altered State Archives",
    tagline: "Lived experience meets harm reduction science.",
    description:
      "A curated knowledge layer of experience data cross-referenced with research and practice.",
    logoClass: "text-vl-blue",
    panel:
      "border-vl-blue/28 bg-white/[0.035] hover:border-vl-blue/65 hover:shadow-glow-sig",
    glow: "bg-vl-blue/18",
    line: "bg-vl-blue",
  },
  {
    name: "SIV",
    href: "/siv",
    status: "Coming Soon",
    badgeVariant: "teal" as const,
    role: "Safety intelligence vehicle",
    tagline: "Infrastructure for high-risk environments and response teams.",
    description:
      "Connects field intelligence, pharmacological risk, and operational response protocols.",
    logoClass: "text-vg-teal",
    panel:
      "border-vg-teal/28 bg-white/[0.035] hover:border-vg-teal/65 hover:shadow-glow-vg",
    glow: "bg-vg-teal/18",
    line: "bg-vg-teal",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-hidden bg-canvas">
      <section className="relative pt-28 pb-14 sm:pt-34 sm:pb-20 lg:pt-44 lg:pb-28">
        <div className="absolute inset-0 bg-hero-radial-blue pointer-events-none" />
        <div className="absolute left-1/2 top-16 h-80 w-80 -translate-x-1/2 rounded-full bg-cp-pink/10 blur-[95px] pointer-events-none" />

        <Container>
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-vl-blue/30 bg-vl-blue/[0.10] px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.22em] text-vl-blue shadow-glow-sig">
              <span className="h-1.5 w-1.5 rounded-full bg-vl-blue" />
              ViceLab // Field Intelligence Build
            </div>

            <h1 className="text-display-xl text-balance mb-6 leading-none">
              This is not merch.<br />
              <span className="text-gradient-sig">This is field intelligence.</span>
            </h1>

            <p className="max-w-2xl text-[17px] sm:text-[19px] leading-relaxed text-white/66 mb-8">
              ViceLab builds safety infrastructure for nightlife and festival culture — real-time,
              non-judgmental, privacy-conscious tools for environments where information can change the outcome.
            </p>

            <div className="flex flex-wrap gap-3 mb-9">
              <Link
                href="#ecosystem"
                className="inline-flex items-center gap-2 rounded-[12px] bg-gradient-sig px-6 py-3 text-sm font-bold text-white shadow-glow-sig transition-all duration-200 hover:-translate-y-px hover:opacity-95"
              >
                Enter the ecosystem
                <ArrowRight />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <Section border className="!py-12 sm:!py-18">
        <Container>
          <div id="ecosystem" className="scroll-mt-24">
            <div className="mb-7">
              <Eyebrow color="muted">The Ecosystem</Eyebrow>
              <h2 className="text-display-md text-white mb-3">Operational systems, not placeholder cards.</h2>
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              {products.map((product) => (
                <Link
                  key={product.name}
                  href={product.href}
                  className={`group relative min-h-[285px] overflow-hidden rounded-[22px] border p-6 shadow-panel transition-all duration-300 hover:-translate-y-1 ${product.panel}`}
                >
                  <div className={`absolute -right-10 -top-10 h-40 w-40 rounded-full blur-[70px] ${product.glow}`} />
                  <div className={`absolute inset-x-5 top-0 h-px ${product.line} opacity-80`} />

                  <div className="relative flex h-full flex-col">
                    <div className="mb-8 flex items-start justify-between gap-4">
                      <div className="min-w-0 flex-1">
                        <div className="mb-4 rounded-2xl border border-white/10 bg-black/30 px-5 py-5 shadow-panel">
                          <div className={`font-black leading-none tracking-[-0.08em] text-[38px] sm:text-[44px] ${product.logoClass}`}>
                            {product.name}
                          </div>
                        </div>
                        <p className="text-[11px] font-black uppercase tracking-[0.18em] text-white/42">
                          {product.role}
                        </p>
                      </div>
                      <Badge variant={product.badgeVariant}>{product.status}</Badge>
                    </div>

                    <p className="mb-3 text-[16px] font-bold leading-snug text-white/84">
                      {product.tagline}
                    </p>
                    <p className="text-sm leading-[1.68] text-white/54">
                      {product.description}
                    </p>
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
