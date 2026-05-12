import Link from "next/link";
import { Container, Section, Eyebrow, ArrowRight, Badge } from "@/components/ui";

const SHOP_URL = "https://vicelab-collective.bigcartel.com/";

const products = [
  {
    name: "Cooked Pilot",
    code: "CP",
    logo: "/logos/cookedpilot.svg",
    href: "/cooked-pilot",
    status: "Live",
    badgeVariant: "live" as const,
    role: "Public harm reduction",
    tagline: "Real-time alerts for festivals, nightlife, and people on the floor.",
    description:
      "Anonymous by default. No account. No tracking. Fast field intelligence when information matters most.",
    accentText: "text-cp-pink",
    panel:
      "border-cp-pink/40 bg-cp-pink/[0.06] hover:border-cp-pink/80 hover:shadow-glow-cp",
    chip: "border-cp-pink/50 bg-cp-pink/[0.12] text-cp-pink",
    glow: "bg-cp-pink/25",
    line: "bg-cp-pink",
  },
  {
    name: "VibeGuard",
    code: "VG",
    logo: "/logos/vibeguard.svg",
    href: "/vibeguard",
    status: "Coming Soon",
    badgeVariant: "teal" as const,
    role: "Crowd safety operations",
    tagline: "Crowd safety and compliance tools for event organisers.",
    description:
      "Density monitoring, threshold alerts, and audit-ready reporting for high-pressure event environments.",
    accentText: "text-vg-teal",
    panel:
      "border-vg-teal/40 bg-vg-teal/[0.05] hover:border-vg-teal/80 hover:shadow-glow-vg",
    chip: "border-vg-teal/50 bg-vg-teal/[0.12] text-vg-teal",
    glow: "bg-vg-teal/25",
    line: "bg-vg-teal",
  },
  {
    name: "ViceLab",
    code: "VL",
    logo: "/logos/vicelab.svg",
    href: "/vicelab",
    status: "Research",
    badgeVariant: "blue" as const,
    role: "Education and systems",
    tagline: "Research, education, and harm reduction resources.",
    description:
      "The intelligence layer behind the ecosystem: non-preachy, privacy-conscious, and field-tested.",
    accentText: "text-vl-blue",
    panel:
      "border-vl-blue/40 bg-vl-blue/[0.06] hover:border-vl-blue/80 hover:shadow-glow-sig",
    chip: "border-vl-blue/50 bg-vl-blue/[0.12] text-vl-blue",
    glow: "bg-vl-blue/25",
    line: "bg-vl-blue",
  },
  {
    name: "Matrix",
    code: "MX",
    logo: null,
    href: "/matrix",
    status: "In Development",
    badgeVariant: "blue" as const,
    role: "Substance interaction engine",
    tagline: "Risk-stratified interaction intelligence for practitioners.",
    description:
      "Built for people who need accurate pharmacological context quickly, without moralising noise.",
    accentText: "text-vl-blue",
    panel:
      "border-vl-blue/28 bg-white/[0.035] hover:border-vl-blue/65 hover:shadow-glow-sig",
    chip: "border-vl-blue/40 bg-vl-blue/[0.10] text-vl-blue",
    glow: "bg-vl-blue/18",
    line: "bg-vl-blue",
  },
  {
    name: "ASA",
    code: "ASA",
    logo: "/logos/asa.svg",
    href: "/asa",
    status: "In Development",
    badgeVariant: "blue" as const,
    role: "Altered State Archives",
    tagline: "Lived experience meets harm reduction science.",
    description:
      "A curated knowledge layer of experience data cross-referenced with research and practice.",
    accentText: "text-vl-blue",
    panel:
      "border-vl-blue/28 bg-white/[0.035] hover:border-vl-blue/65 hover:shadow-glow-sig",
    chip: "border-vl-blue/40 bg-vl-blue/[0.10] text-vl-blue",
    glow: "bg-vl-blue/18",
    line: "bg-vl-blue",
  },
  {
    name: "SIV",
    code: "SIV",
    logo: null,
    href: "/siv",
    status: "Coming Soon",
    badgeVariant: "teal" as const,
    role: "Safety intelligence vehicle",
    tagline: "Infrastructure for high-risk environments and response teams.",
    description:
      "Connects field intelligence, pharmacological risk, and operational response protocols.",
    accentText: "text-vg-teal",
    panel:
      "border-vg-teal/28 bg-white/[0.035] hover:border-vg-teal/65 hover:shadow-glow-vg",
    chip: "border-vg-teal/40 bg-vg-teal/[0.10] text-vg-teal",
    glow: "bg-vg-teal/18",
    line: "bg-vg-teal",
  },
];

const principles = [
  "Research-informed",
  "Peer-developed",
  "Non-preachy",
  "Privacy-conscious",
  "Built for real environments",
];

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-hidden bg-canvas">
      <section className="relative pt-28 pb-14 sm:pt-34 sm:pb-20 lg:pt-44 lg:pb-28">
        <div className="absolute inset-0 bg-hero-radial-blue pointer-events-none" />
        <div className="absolute left-1/2 top-16 h-80 w-80 -translate-x-1/2 rounded-full bg-cp-pink/10 blur-[95px] pointer-events-none" />
        <div
          className="absolute inset-0 bg-grid-faint bg-grid opacity-45 pointer-events-none"
          style={{ maskImage: "radial-gradient(ellipse 75% 55% at 50% 0%, black 0%, transparent 78%)" }}
        />

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
              <a
                href={SHOP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-[12px] border border-cp-pink/35 bg-cp-pink/[0.08] px-6 py-3 text-sm font-bold text-cp-pink transition-all duration-200 hover:-translate-y-px hover:border-cp-pink/65 hover:bg-cp-pink/[0.12]"
              >
                Fund the infrastructure
              </a>
            </div>

            <div className="grid gap-2 sm:flex sm:flex-wrap sm:gap-x-5 sm:gap-y-2">
              {principles.map((item) => (
                <span key={item} className="text-[12px] font-semibold uppercase tracking-[0.12em] text-white/40">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <Section border className="!py-12 sm:!py-18">
        <Container>
          <div id="ecosystem" className="scroll-mt-24">
            <div className="mb-7 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <Eyebrow color="muted">The Ecosystem</Eyebrow>
                <h2 className="text-display-md text-white mb-3">Safety tools with a clear signal.</h2>
                <p className="max-w-2xl text-sm leading-relaxed text-white/54 sm:text-base">
                  Logo-led safety infrastructure. High contrast. Product-coded. Readable on mobile. Built to feel like operational systems, not generic SaaS cards.
                </p>
              </div>
              <div className="hidden rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-white/38 sm:block">
                Live system map
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              {products.map((product) => (
                <Link
                  key={product.name}
                  href={product.href}
                  className={`group relative min-h-[265px] overflow-hidden rounded-[22px] border p-5 shadow-panel transition-all duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/35 sm:p-6 ${product.panel}`}
                >
                  <div className={`absolute -right-10 -top-10 h-40 w-40 rounded-full blur-[70px] ${product.glow}`} />
                  <div className={`absolute inset-x-5 top-0 h-px ${product.line} opacity-80`} />

                  <div className="relative flex h-full flex-col">
                    <div className="mb-7 flex items-start justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className={`flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-2xl border text-[18px] font-black tracking-[-0.08em] shadow-panel ${product.chip}`}>
                          {product.logo ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={product.logo}
                              alt=""
                              aria-hidden="true"
                              className="h-14 w-14 object-contain brightness-125 contrast-125 saturate-150"
                              loading="lazy"
                            />
                          ) : (
                            product.code
                          )}
                        </div>
                        <div>
                          <h3 className={`text-[27px] font-black leading-none tracking-[-0.06em] ${product.accentText}`}>
                            {product.name}
                          </h3>
                          <p className="mt-2 text-[11px] font-black uppercase tracking-[0.18em] text-white/42">
                            {product.role}
                          </p>
                        </div>
                      </div>
                      <Badge variant={product.badgeVariant}>{product.status}</Badge>
                    </div>

                    <p className="mb-3 text-[16px] font-bold leading-snug text-white/84">
                      {product.tagline}
                    </p>
                    <p className="text-sm leading-[1.68] text-white/54">
                      {product.description}
                    </p>

                    <div className="mt-auto pt-6 flex items-center gap-2 text-[12px] font-black uppercase tracking-[0.14em] text-white/44 transition-colors group-hover:text-white/82">
                      Open layer <ArrowRight />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section border className="!py-12 sm:!py-18">
        <Container>
          <div className="relative overflow-hidden rounded-[24px] border border-white/[0.08] bg-white/[0.03] p-7 shadow-panel sm:p-10 lg:p-12">
            <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-cp-pink/[0.13] via-vl-blue/[0.07] to-transparent pointer-events-none" />
            <div className="relative max-w-2xl">
              <Eyebrow color="pink">Field-tested gear</Eyebrow>
              <h2 className="text-display-md mb-4 text-white">Merch funds the mission. It is not the mission.</h2>
              <p className="mb-7 text-base leading-relaxed text-white/58">
                Apparel and accessories sit underneath the safety infrastructure. The website leads with the tools, the intelligence layer, and the field work.
              </p>
              <a
                href={SHOP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-[12px] bg-gradient-cp px-7 py-3.5 text-sm font-bold text-white shadow-glow-cp transition-all duration-200 hover:-translate-y-px hover:opacity-95"
              >
                Shop Now
                <ArrowRight />
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
