import Image from "next/image";
import Link from "next/link";
import { Container, Section, Eyebrow, ArrowRight, Badge } from "@/components/ui";

const SHOP_URL = "https://vicelab-collective.bigcartel.com/";

const products = [
  {
    name: "Cooked Pilot",
    logo: "/logos/cookedpilot.png",
    href: "/cooked-pilot",
    tagline: "Real-time harm reduction for festivals and nightlife.",
    description:
      "Live alerts on bad batches. Anonymous by default. No account, no tracking — just the information that keeps people safer.",
    badgeVariant: "live" as const,
    badgeLabel: "Live",
    accent: "text-cp-pink",
    border: "hover:border-cp-pink/25",
  },
  {
    name: "VibeGuard",
    logo: "/logos/vibeguard.png",
    href: "/vibeguard",
    tagline: "Crowd safety and compliance tools for event organisers.",
    description:
      "Real-time density monitoring, automated threshold alerts, and audit-ready reporting — built for the people managing the event.",
    badgeVariant: "teal" as const,
    badgeLabel: "Coming Soon",
    accent: "text-vg-teal",
    border: "hover:border-vg-teal/25",
  },
  {
    name: "ViceLab",
    logo: "/logos/vicelab.png",
    href: "/vicelab",
    tagline: "Research, education, and harm reduction resources.",
    description:
      "Festival safety intelligence, harm reduction education, and operationally honest safety systems built for real-world environments.",
    badgeVariant: "blue" as const,
    badgeLabel: "Research",
    accent: "text-vl-blue",
    border: "hover:border-vl-blue/25",
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
    <div className="min-h-screen">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-36 pb-24 lg:pt-48 lg:pb-32">
        {/* Radial glow */}
        <div className="absolute inset-0 bg-hero-radial-blue pointer-events-none" />
        {/* Grid */}
        <div
          className="absolute inset-0 bg-grid-faint bg-grid opacity-[0.35] pointer-events-none"
          style={{ maskImage: "radial-gradient(ellipse 70% 50% at 50% 0%, black 0%, transparent 80%)" }}
        />
        <Container>
          <div className="max-w-2xl">
            <Eyebrow color="blue">Festival Safety Intelligence</Eyebrow>
            <h1 className="text-display-xl text-balance mb-6 leading-none">
              This is not merch.<br />
              This is field intelligence.
            </h1>
            <p className="text-lg text-white/50 leading-relaxed mb-10 max-w-lg">
              ViceLab builds safety tools for nightlife and festival culture — real-time,
              non-judgmental, and built for environments where information actually matters.
            </p>
            <div className="flex flex-wrap gap-3 mb-12">
              <a
                href={SHOP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-[10px] text-sm font-semibold bg-cp-pink text-white hover:opacity-90 hover:-translate-y-px transition-all duration-200"
              >
                Shop Now
                <ArrowRight />
              </a>
            </div>
            {/* Trust strip */}
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {trustItems.map((item) => (
                <span key={item} className="text-[12px] text-white/25 font-medium">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── Products ─────────────────────────────────────────────────────── */}
      <Section border>
        <Container>
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/30 mb-8">
            The Ecosystem
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {products.map((p) => (
              <Link
                key={p.name}
                href={p.href}
                className={`
                  group relative rounded-card border border-white/[0.07] bg-white/[0.03]
                  p-6 transition-all duration-300
                  hover:bg-white/[0.06] hover:border-white/[0.12] ${p.border}
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30
                `}
              >
                <div className="mb-4">
                  <Badge variant={p.badgeVariant}>{p.badgeLabel}</Badge>
                </div>
                <div className="mb-3">
                  <Image
                    src={p.logo}
                    alt={p.name}
                    height={32}
                    width={128}
                    className="h-8 w-auto"
                  />
                </div>
                <p className="text-white/60 text-sm font-medium mb-3 leading-snug">{p.tagline}</p>
                <p className="text-white/35 text-sm leading-[1.7]">{p.description}</p>
                <div className={`mt-5 flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.1em] ${p.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-200`}>
                  Learn more <ArrowRight />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Shop CTA ─────────────────────────────────────────────────────── */}
      <Section border>
        <Container>
          <div className="relative rounded-card border border-white/[0.07] bg-white/[0.03] overflow-hidden p-10 md:p-14 text-center">
            {/* Background glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse 60% 60% at 50% 100%, rgba(244,114,182,0.08) 0%, transparent 70%)" }}
            />
            <div className="relative">
              <Eyebrow color="pink">Field-tested gear</Eyebrow>
              <h2 className="text-display-md text-balance mb-5">
                Wear the mission.
              </h2>
              <p className="text-white/40 text-base leading-relaxed max-w-md mx-auto mb-8">
                Apparel and accessories built for the people who show up. Every piece funds the infrastructure.
              </p>
              <a
                href={SHOP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-[10px] text-sm font-semibold bg-cp-pink text-white hover:opacity-90 hover:-translate-y-px transition-all duration-200"
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
