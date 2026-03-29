import Link from "next/link";
import { Container, Section, Eyebrow, Badge, ArrowRight } from "@/components/ui";

export default function HomePage() {
  const products = [
    {
      name: "Cooked Pilot",
      href: "/cooked-pilot",
      tagline: "Real-time harm reduction for festivals & nightlife.",
      description:
        "Get live alerts on bad batches, contamination warnings, and safety info — all based on your location. Non-judgmental. Anonymous. Always on.",
      badge: "live" as const,
      badgeLabel: "Live",
      accent: "text-cp-cyan",
      border: "hover:border-cp-cyan/25",
    },
    {
      name: "VibeGuard",
      href: "/vibeguard",
      tagline: "AI-powered crowd safety for events.",
      description:
        "Real-time crowd density monitoring and automated safety alerts for event organisers, security teams, and venue managers.",
      badge: "violet" as const,
      badgeLabel: "Coming Soon",
      accent: "text-vg-violet",
      border: "hover:border-vg-violet/25",
    },
  ];

  const pillars = [
    { label: "Peer-led" },
    { label: "Evidence-informed" },
    { label: "Privacy-conscious" },
    { label: "Non-judgmental" },
  ];

  return (
    <div className="min-h-screen">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-36 pb-28 lg:pt-44 lg:pb-36">
        {/* Background radial glow */}
        <div className="absolute inset-0 bg-hero-radial pointer-events-none" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 bg-grid-faint bg-grid opacity-[0.5] pointer-events-none"
          style={{ maskImage: "radial-gradient(ellipse 70% 60% at 50% 0%, black 0%, transparent 80%)" }}
        />

        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Eyebrow color="violet">ViceLab</Eyebrow>

            <h1 className="text-display-xl text-balance mb-6">
              Safety tech for{" "}
              <span className="text-gradient-violet">
                the night.
              </span>
            </h1>

            <p className="text-lg text-white/50 max-w-xl mx-auto leading-relaxed mb-10">
              We build tools that keep people safer in festivals, clubs, and
              nightlife — without judgment, without friction.
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
          <div className="grid md:grid-cols-2 gap-5">
            {products.map((product) => (
              <Link
                key={product.name}
                href={product.href}
                className={`
                  group relative rounded-card border border-white/[0.07] bg-white/[0.03]
                  p-8 flex flex-col transition-all duration-300
                  hover:bg-white/[0.055] hover:border-white/[0.12]
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vg-violet/60
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
              Why we build this
            </h2>
            <p className="text-white/50 text-lg leading-relaxed">
              Nightlife isn&apos;t going away. Neither is risk. We believe the
              answer isn&apos;t shame or restriction — it&apos;s better
              information, smarter tools, and technology that meets people where
              they are.
            </p>
          </div>
        </Container>
      </Section>
    </div>
  );
}
