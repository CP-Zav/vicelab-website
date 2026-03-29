import Link from "next/link";
import { Container, Section, Eyebrow, Badge, ArrowRight } from "@/components/ui";

export default function HomePage() {
  const products = [
    {
      name: "Cooked Pilot",
      href: "/cooked-pilot",
      tagline: "Real-time safety for festivals, raves, and nights that stretch to next light.",
      description:
        "Live alerts on bad batches and contamination warnings. Location-aware. Anonymous by default. No account, no tracking — just the information that keeps people safer.",
      badge: "live" as const,
      badgeLabel: "Live",
      accent: "text-cp-pink",
      border: "hover:border-cp-pink/25",
    },
    {
      name: "VibeGuard",
      href: "/vibeguard",
      tagline: "Crowd safety and compliance tools for event organisers.",
      description:
        "Real-time density monitoring, automated threshold alerts, and audit-ready reporting — built for the people managing the event, not attending it.",
      badge: "teal" as const,
      badgeLabel: "Coming Soon",
      accent: "text-vg-teal",
      border: "hover:border-vg-teal/25",
    },
    {
      name: "ViceLab",
      href: "/vicelab",
      tagline: "Research, education, and harm reduction resources.",
      description:
        "Drug information sheets, printable safety guides, and evidence-based resources — for crews, community workers, and anyone who wants to know more.",
      badge: "blue" as const,
      badgeLabel: "Open",
      accent: "text-vl-blue",
      border: "hover:border-vl-blue/25",
    },
  ];

  const pillars = [
    { label: "Peer-led" },
    { label: "Evidence-based" },
    { label: "Privacy-first" },
    { label: "Non-judgmental" },
  ];

  return (
    <div className="min-h-screen">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-36 pb-28 lg:pt-44 lg:pb-36">
        {/* ViceLab electric blue radial */}
        <div className="absolute inset-0 bg-hero-radial-blue pointer-events-none" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 bg-grid-faint bg-grid opacity-[0.5] pointer-events-none"
          style={{ maskImage: "radial-gradient(ellipse 70% 60% at 50% 0%, black 0%, transparent 80%)" }}
        />

        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Eyebrow color="blue">ViceLab</Eyebrow>

            <h1 className="text-display-xl text-balance mb-6">
              Safety culture,{" "}
              <span className="text-gradient-blue">
                built for the culture.
              </span>
            </h1>

            <p className="text-lg text-white/50 max-w-xl mx-auto leading-relaxed mb-10">
              Tools for festivals, raves, and nightlife — grounded in harm
              reduction, not moralising.
            </p>

            {/* Pillars */}
            <div className="flex flex-wrap justify-center gap-2">
              {pillars.map((p) => (
                <span
                  key={p.label}
                  className="px-3.5 py-1 text-[13px] font-normal text-white/35 border border-white/[0.07] rounded-full tracking-wide"
                >
                  {p.label}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── Products ─────────────────────────────────────────────────────── */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((product) => (
              <Link
                key={product.name}
                href={product.href}
                className={`
                  group relative rounded-card border border-white/[0.07] bg-white/[0.03]
                  p-8 flex flex-col transition-all duration-300
                  hover:bg-white/[0.055] hover:border-white/[0.12]
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vl-blue/50
                  ${product.border}
                `}
              >
                <div className="mb-5">
                  <Badge variant={product.badge}>{product.badgeLabel}</Badge>
                </div>

                <h2 className="text-[22px] font-bold tracking-tight mb-2">
                  {product.name}
                </h2>
                <p className={`text-sm font-medium mb-4 ${product.accent}`}>
                  {product.tagline}
                </p>
                <p className="text-white/50 text-sm leading-[1.75]">
                  {product.description}
                </p>

                <div className="mt-auto pt-8 flex items-center gap-1.5 text-[13px] text-white/30 group-hover:text-white/70 transition-colors">
                  Learn more
                  <ArrowRight className="group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Mission ──────────────────────────────────────────────────────── */}
      <Section border>
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-display-md text-balance mb-5">
              Built for real conditions.
            </h2>
            <p className="text-white/50 text-lg leading-relaxed">
              Nightlife isn&apos;t going anywhere. Neither is risk. We don&apos;t
              moralise about that — we build tools that put accurate information
              in people&apos;s hands, fast. In the field. Before it matters.
            </p>
          </div>
        </Container>
      </Section>
    </div>
  );
}
