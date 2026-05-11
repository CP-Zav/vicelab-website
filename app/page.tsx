import Link from "next/link";
import { Container, Section, Eyebrow, ArrowRight, Badge } from "@/components/ui";

const SHOP_URL = "https://vicelab-collective.bigcartel.com/";

const products = [
  {
    name: "Cooked Pilot",
    shortName: "CP",
    logo: "/logos/cookedpilot.svg",
    href: "/cooked-pilot",
    tagline: "Real-time harm reduction for festivals and nightlife.",
    description:
      "Live alerts on bad batches. Anonymous by default. No account, no tracking — just the field information that keeps people safer.",
    badgeVariant: "live" as const,
    badgeLabel: "Live",
    accent: "cp" as const,
    ring: "border-cp-pink/[0.28] bg-cp-pink/[0.045] hover:border-cp-pink/60 hover:shadow-glow-cp",
    text: "text-cp-pink",
    gradient: "from-cp-pink/25 via-cp-pink/[0.08] to-transparent",
  },
  {
    name: "VibeGuard",
    shortName: "VG",
    logo: "/logos/vibeguard.svg",
    href: "/vibeguard",
    tagline: "Crowd safety and compliance tools for event organisers.",
    description:
      "Real-time density monitoring, threshold alerts, and audit-ready reporting — built for the people managing the floor.",
    badgeVariant: "teal" as const,
    badgeLabel: "Coming Soon",
    accent: "vg" as const,
    ring: "border-vg-teal/[0.28] bg-vg-teal/[0.04] hover:border-vg-teal/60 hover:shadow-glow-vg",
    text: "text-vg-teal",
    gradient: "from-vg-teal/20 via-vl-green/[0.07] to-transparent",
  },
  {
    name: "ViceLab",
    shortName: "VL",
    logo: "/logos/vicelab.svg",
    href: "/vicelab",
    tagline: "Research, education, and harm reduction resources.",
    description:
      "Festival safety intelligence, harm reduction education, and operationally honest systems for real-world environments.",
    badgeVariant: "blue" as const,
    badgeLabel: "Research",
    accent: "sig" as const,
    ring: "border-vl-blue/[0.28] bg-vl-blue/[0.045] hover:border-vl-blue/60 hover:shadow-glow-sig",
    text: "text-vl-blue",
    gradient: "from-vl-blue/25 via-vg-teal/[0.07] to-transparent",
  },
  {
    name: "Matrix",
    shortName: "MX",
    logo: null,
    href: "/matrix",
    tagline: "Substance interaction engine for harm reduction practitioners.",
    description:
      "Pharmacological interaction data, risk-stratified by combination type. Built for people who need accurate information fast.",
    badgeVariant: "blue" as const,
    badgeLabel: "In Development",
    accent: "sig" as const,
    ring: "border-vl-blue/[0.24] bg-vl-blue/[0.035] hover:border-vl-blue/55 hover:shadow-glow-sig",
    text: "text-vl-blue",
    gradient: "from-vl-blue/20 via-vl-blue/[0.05] to-transparent",
  },
  {
    name: "ASA",
    shortName: "ASA",
    logo: null,
    href: "/asa",
    tagline: "Altered State Archives — lived experience meets harm reduction science.",
    description:
      "A curated knowledge layer of substance experience data, cross-referenced with pharmacological research and harm reduction practice.",
    badgeVariant: "blue" as const,
    badgeLabel: "In Development",
    accent: "sig" as const,
    ring: "border-vl-blue/[0.24] bg-vl-blue/[0.035] hover:border-vl-blue/55 hover:shadow-glow-sig",
    text: "text-vl-blue",
    gradient: "from-vl-blue/20 via-vl-blue/[0.05] to-transparent",
  },
  {
    name: "SIV",
    shortName: "SIV",
    logo: null,
    href: "/siv",
    tagline: "Safety intelligence infrastructure for high-risk environments.",
    description:
      "Unified safety data connecting field intelligence, pharmacological risk, and operational response protocols.",
    badgeVariant: "teal" as const,
    badgeLabel: "Coming Soon",
    accent: "vg" as const,
    ring: "border-vg-teal/[0.24] bg-vg-teal/[0.035] hover:border-vg-teal/55 hover:shadow-glow-vg",
    text: "text-vg-teal",
    gradient: "from-vg-teal/18 via-vl-green/[0.05] to-transparent",
  },
];

const trustItems = [
  "Research-informed",
  "Peer-developed",
  "Non-preachy",
  "Privacy-conscious",
  "Built for real environments",
];

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-hidden">
      <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-44 lg:pb-28">
        <div className="absolute inset-0 bg-hero-radial-blue pointer-events-none" />
        <div
          className="absolute inset-0 bg-grid-faint bg-grid opacity-40 pointer-events-none"
          style={{ maskImage: "radial-gradient(ellipse 70% 50% at 50% 0%, black 0%, transparent 80%)" }}
        />
        <Container>
          <div className="max-w-3xl">
            <Eyebrow color="blue">Festival Safety Intelligence</Eyebrow>
            <h1 className="text-display-xl text-balance mb-5 leading-none">
              This is not merch.<br />
              This is field intelligence.
            </h1>
            <p className="text-[17px] sm:text-[18px] text-white/58 leading-relaxed mb-8 max-w-xl">
              ViceLab builds safety tools for nightlife and festival culture — real-time,
              non-judgmental, and built for environments where information actually matters.
            </p>
            <div className="flex flex-wrap gap-3 mb-9">
              <Link
                href="#ecosystem"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-[10px] text-sm font-semibold bg-gradient-sig text-white hover:opacity-90 hover:-translate-y-px transition-all duration-200 shadow-glow-sig"
              >
                Explore the ecosystem
                <ArrowRight />
              </Link>
              <a
                href={SHOP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-[10px] text-sm font-semibold text-white/68 border border-white/[0.14] hover:text-white hover:border-cp-pink/45 hover:bg-cp-pink/[0.06] hover:-translate-y-px transition-all duration-200"
              >
                Support the mission
              </a>
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {trustItems.map((item) => (
                <span key={item} className="text-[12px] text-white/38 font-medium">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <Section border className="!py-14 sm:!py-20">
        <Container>
          <div id="ecosystem" className="scroll-mt-24">
            <div className="mb-8 sm:mb-10">
              <h2 className="text-[11px] font-semibold tracking-[0.24em] uppercase text-white/35 mb-3">
                The Ecosystem
              </h2>
              <p className="max-w-2xl text-white/56 text-sm sm:text-base leading-relaxed">
                Logo-led safety infrastructure — each product has its own signal, colour, and role in the field.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {products.map((p) => (
                <Link
                  key={p.name}
                  href={p.href}
                  className={`group relative min-h-[250px] overflow-hidden rounded-card border p-5 sm:p-6 transition-all duration-300 shadow-panel hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 ${p.ring}`}
                >
                  <div className={`absolute inset-x-0 top-0 h-32 bg-gradient-to-b ${p.gradient} opacity-90 pointer-events-none`} />
                  <div className="relative flex h-full flex-col">
                    <div className="mb-6 flex items-start justify-between gap-4">
                      <div className="flex min-h-[76px] items-center gap-3">
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-black/35 shadow-panel group-hover:bg-black/55 transition-colors">
                          {p.logo ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={p.logo}
                              alt=""
                              aria-hidden="true"
                              className="h-14 w-14 object-contain opacity-100 brightness-125 contrast-125 saturate-150 drop-shadow-[0_0_12px_rgba(255,255,255,0.18)]"
                              loading="lazy"
                            />
                          ) : (
                            <span className={`text-lg font-black tracking-tight ${p.text}`}>{p.shortName}</span>
                          )}
                        </div>
                        <div>
                          <p className={`text-2xl font-black tracking-[-0.04em] leading-none ${p.text}`}>
                            {p.name}
                          </p>
                          <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-white/35">
                            {p.accent === "cp" ? "Harm reduction" : p.accent === "vg" ? "Event safety" : "Intelligence layer"}
                          </p>
                        </div>
                      </div>
                      <Badge variant={p.badgeVariant}>{p.badgeLabel}</Badge>
                    </div>

                    <p className="text-white/76 text-[15px] font-semibold leading-snug mb-3">
                      {p.tagline}
                    </p>
                    <p className="text-white/46 text-sm leading-[1.65]">
                      {p.description}
                    </p>
                    <div className="mt-auto pt-5 flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-white/42 group-hover:text-white/75 transition-colors duration-200">
                      Learn more <ArrowRight />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section border className="!py-14 sm:!py-20">
        <Container>
          <div className="relative rounded-card border border-cp-pink/[0.18] bg-white/[0.025] overflow-hidden p-7 sm:p-10 md:p-12 text-center shadow-panel">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse 60% 60% at 50% 100%, rgba(255,0,168,0.12) 0%, transparent 70%)" }}
            />
            <div className="relative">
              <Eyebrow color="pink">Field-tested gear</Eyebrow>
              <h2 className="text-display-md text-balance mb-4">Wear the mission.</h2>
              <p className="text-white/56 text-base leading-relaxed max-w-md mx-auto mb-8">
                Apparel and accessories sit behind the safety work — every piece helps fund the infrastructure.
              </p>
              <a
                href={SHOP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-[10px] text-sm font-semibold bg-gradient-cp text-white hover:opacity-90 hover:-translate-y-px transition-all duration-200 shadow-glow-cp"
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
