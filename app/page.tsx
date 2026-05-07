import Link from "next/link";
import { Container, Section, Eyebrow, ArrowRight, Badge } from "@/components/ui";

const SHOP_URL = "https://vicelab-collective.bigcartel.com/";

const products = [
  {
    name: "Cooked Pilot",
    logo: "/logos/cookedpilot.svg",
    href: "/cooked-pilot",
    tagline: "Real-time harm reduction for festivals and nightlife.",
    description: "Live alerts on bad batches. Anonymous by default. No account, no tracking — just the information that keeps people safer.",
    badgeVariant: "live" as const,
    badgeLabel: "Live",
    hoverBorder: "hover:border-cp-pink/25",
    accentColor: "text-cp-pink",
  },
  {
    name: "VibeGuard",
    logo: "/logos/vibeguard.svg",
    href: "/vibeguard",
    tagline: "Crowd welfare and compliance infrastructure for event organisers.",
    description: "Anonymised crowd telemetry, zone-level safety visibility, and duty-of-care reporting — built for the people managing the event.",
    badgeVariant: "teal" as const,
    badgeLabel: "Coming Soon",
    hoverBorder: "hover:border-vg-teal/25",
    accentColor: "text-vg-teal",
  },
  {
    name: "VICELAB",
    logo: "/logos/vicelab.svg",
    href: "/vicelab",
    tagline: "Research, education, and harm reduction intelligence.",
    description: "Translational safety research, field-tested harm reduction tools, and evidence-informed infrastructure for real-world environments.",
    badgeVariant: "blue" as const,
    badgeLabel: "Research",
    hoverBorder: "hover:border-vl-blue/25",
    accentColor: "text-vl-blue",
  },
  {
    name: "Matrix",
    logo: null,
    href: "/matrix",
    tagline: "Substance interaction engine for harm reduction practitioners.",
    description: "Pharmacological interaction data, risk-stratified by combination type. Built for people who need accurate information fast.",
    badgeVariant: "blue" as const,
    badgeLabel: "In Development",
    hoverBorder: "hover:border-vl-blue/25",
    accentColor: "text-vl-blue",
  },
  {
    name: "ASA",
    logo: null,
    href: "/asa",
    tagline: "Altered State Archives — lived experience meets harm reduction science.",
    description: "A curated knowledge layer of substance experience data, cross-referenced with pharmacological research and harm reduction practice.",
    badgeVariant: "blue" as const,
    badgeLabel: "In Development",
    hoverBorder: "hover:border-vl-blue/25",
    accentColor: "text-vl-blue",
  },
  {
    name: "SIV",
    logo: null,
    href: "/siv",
    tagline: "Safety intelligence infrastructure for high-risk environments.",
    description: "Unified safety data layer connecting field intelligence, pharmacological risk, and operational response protocols.",
    badgeVariant: "teal" as const,
    badgeLabel: "Coming Soon",
    hoverBorder: "hover:border-vg-teal/25",
    accentColor: "text-vg-teal",
  },
];

const researchPillars = [
  {
    label: "Incident analysis",
    body: "Real-world event debriefs, near-miss reviews, and operational failure mapping inform every system we build.",
    accent: "#2F6BFF",
  },
  {
    label: "Behavioural risk mapping",
    body: "Environmental, social, and pharmacological risk factors analysed to understand where harm concentrates and why.",
    accent: "#8B5CF6",
  },
  {
    label: "Translational research",
    body: "Public health evidence and frontline harm reduction practice translated into deployable operational tools.",
    accent: "#00D5FF",
  },
  {
    label: "Measurable outcomes",
    body: "We design for reduction in preventable incidents — not just better aesthetics or faster workflows.",
    accent: "#FF00A8",
  },
];

const futureSystemsItems = [
  { label: "Operational intelligence infrastructure", status: "Scoping" },
  { label: "Welfare logistics systems", status: "Research" },
  { label: "Environmental monitoring", status: "Research" },
  { label: "Safer-use instrumentation", status: "Design" },
  { label: "Research data platforms", status: "Design" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-44 lg:pb-28">
        <div className="absolute inset-0 bg-hero-radial-blue pointer-events-none" />
        {/* Multi-spectrum ambient — reflects full ecosystem palette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 40% at 80% 20%, rgba(139,92,246,0.07) 0%, transparent 65%), radial-gradient(ellipse 40% 30% at 10% 70%, rgba(255,0,168,0.06) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0 bg-grid-faint bg-grid opacity-[0.3] pointer-events-none"
          style={{ maskImage: "radial-gradient(ellipse 70% 50% at 50% 0%, black 0%, transparent 80%)" }}
        />
        <Container>
          <div className="max-w-2xl">
            <Eyebrow color="blue">Evidence-Informed Safety Infrastructure</Eyebrow>
            <h1 className="text-display-xl text-balance mb-5 leading-none">
              Safety systems<br />
              built for the real world.
            </h1>
            <p className="text-[17px] text-white/50 leading-relaxed mb-9 max-w-lg">
              VICELAB builds harm reduction infrastructure, operational safety tools,
              and evidence-informed interventions — designed for nightlife, festivals,
              and high-risk public environments.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <Link
                href="/vicelab"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-[10px] text-sm font-semibold bg-gradient-sig text-white hover:opacity-90 hover:-translate-y-px transition-all duration-200"
              >
                About VICELAB
                <ArrowRight />
              </Link>
              <a
                href={SHOP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-[10px] text-sm font-semibold text-white/60 border border-white/[0.12] hover:text-white hover:border-white/25 hover:bg-white/[0.04] hover:-translate-y-px transition-all duration-200"
              >
                Shop
              </a>
            </div>
            {/* Ecosystem spectrum bar */}
            <div className="flex items-center gap-2">
              <div
                className="h-px flex-1 max-w-[160px]"
                style={{
                  background:
                    "linear-gradient(90deg, #2F6BFF, #8B5CF6, #00D5FF, #FF00A8)",
                  opacity: 0.4,
                }}
              />
              <span className="text-[11px] text-white/20 font-medium tracking-wide">
                Harm reduction · Research · Infrastructure
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* ── What VICELAB Is ──────────────────────────────────────────────── */}
      <Section border>
        <Container>
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-20 items-start">
            <div>
              <Eyebrow color="blue">What VICELAB is</Eyebrow>
              <h2 className="text-display-md text-balance leading-tight">
                Public health infrastructure.<br />
                Built for culture.
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-[17px] text-white/65 leading-relaxed">
                VICELAB builds evidence-informed safety systems for nightlife, festivals,
                and high-risk public environments.
              </p>
              <p className="text-white/45 text-base leading-relaxed">
                We combine harm reduction research, operational intelligence, and
                real-world incident analysis to design tools, infrastructure, and
                interventions that improve health and safety outcomes — not just
                demonstrate compliance.
              </p>
              <p className="text-white/45 text-base leading-relaxed">
                Our work sits at the intersection of public health practice, systems
                design, and cultural literacy. We understand the environments we build
                for because we&apos;re embedded in them.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {["Evidence-informed", "Privacy-first", "Human-centred", "Non-preachy", "Operationally mature"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-semibold tracking-wide px-3 py-1.5 rounded-full"
                    style={{
                      color: "rgba(47,107,255,0.8)",
                      background: "rgba(47,107,255,0.08)",
                      border: "1px solid rgba(47,107,255,0.15)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Research & Outcomes ──────────────────────────────────────────── */}
      <Section border>
        <Container>
          <div className="mb-12">
            <Eyebrow color="muted">Research &amp; outcomes</Eyebrow>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <h2 className="text-display-md text-balance max-w-lg leading-tight">
                Frontline observations.<br />
                Deployable systems.
              </h2>
              <p className="text-white/45 text-base leading-relaxed max-w-sm lg:text-right">
                We translate incident analysis, operational debriefs, and public health
                research into tools designed to reduce preventable harm.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {researchPillars.map((pillar) => (
              <div
                key={pillar.label}
                className="rounded-card p-5 relative overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div
                  className="w-6 h-6 rounded-lg mb-4 flex items-center justify-center"
                  style={{
                    background: `${pillar.accent}18`,
                    border: `1px solid ${pillar.accent}28`,
                  }}
                >
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: pillar.accent, opacity: 0.9 }}
                  />
                </div>
                <h3
                  className="text-sm font-semibold mb-2.5"
                  style={{ color: pillar.accent }}
                >
                  {pillar.label}
                </h3>
                <p className="text-white/50 text-sm leading-[1.75]">{pillar.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Products / Ecosystem ─────────────────────────────────────────── */}
      <Section border>
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/25">
                The Ecosystem
              </h2>
            </div>
            <p className="text-[12px] text-white/25 max-w-xs sm:text-right">
              Six interconnected systems. One infrastructure layer.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {products.map((p) => (
              <Link
                key={p.name}
                href={p.href}
                className={`
                  group relative rounded-card border border-white/[0.07] bg-white/[0.025]
                  p-5 sm:p-6 transition-all duration-300 shadow-panel
                  hover:bg-white/[0.055] hover:border-white/[0.12] ${p.hoverBorder}
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30
                `}
              >
                <div className="mb-4">
                  <Badge variant={p.badgeVariant}>{p.badgeLabel}</Badge>
                </div>
                <div className="mb-4 h-[40px] flex items-center">
                  {p.logo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={p.logo}
                      alt={p.name}
                      height={40}
                      className="h-[40px] w-auto transition-all duration-300 group-hover:brightness-125"
                      loading="lazy"
                    />
                  ) : (
                    <span className={`text-xl font-bold tracking-tight ${p.accentColor} opacity-90 group-hover:opacity-100 transition-opacity`}>
                      {p.name}
                    </span>
                  )}
                </div>
                <p className="text-white/55 text-sm font-medium mb-3 leading-snug">{p.tagline}</p>
                <p className="text-white/30 text-sm leading-[1.72]">{p.description}</p>
                <div className="mt-5 flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.1em] text-white/35 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Learn more <ArrowRight />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Systems & Infrastructure ─────────────────────────────────────── */}
      <Section border>
        <Container>
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-20 items-start">

            {/* Left: live systems */}
            <div>
              <Eyebrow color="teal">Systems &amp; infrastructure</Eyebrow>
              <h2 className="text-display-md text-balance mb-6 leading-tight">
                Engineered for scale.<br />
                Deployed at ground level.
              </h2>
              <p className="text-white/45 text-base leading-relaxed mb-8">
                The VICELAB ecosystem is designed as interconnected infrastructure —
                not isolated apps. Each system feeds the next: field intelligence
                informs research, research informs tooling, tooling generates operational
                data that feeds the next intervention cycle.
              </p>

              {/* Active systems */}
              <div className="space-y-3">
                <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/20 mb-4">
                  Active systems
                </p>
                {[
                  { name: "Cooked Pilot", desc: "Peer-based attendee safety", color: "#FF00A8", status: "Live" },
                  { name: "VibeGuard", desc: "Organiser welfare infrastructure", color: "#00D5FF", status: "In development" },
                ].map((sys) => (
                  <div
                    key={sys.name}
                    className="flex items-center gap-4 rounded-xl p-4"
                    style={{
                      background: "rgba(255,255,255,0.025)",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    <div
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ background: sys.color, boxShadow: `0 0 8px ${sys.color}80` }}
                    />
                    <div className="flex-1 min-w-0">
                      <span className="text-sm font-semibold text-white/80">{sys.name}</span>
                      <span className="text-sm text-white/30 ml-2">— {sys.desc}</span>
                    </div>
                    <span
                      className="text-[10px] font-semibold uppercase tracking-widest shrink-0"
                      style={{ color: sys.color, opacity: 0.7 }}
                    >
                      {sys.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: future systems */}
            <div>
              <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/20 mb-4">
                Systems in research &amp; design
              </p>
              <div className="space-y-2">
                {futureSystemsItems.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between rounded-xl px-4 py-3.5"
                    style={{
                      background: "rgba(255,255,255,0.018)",
                      border: "1px solid rgba(255,255,255,0.055)",
                    }}
                  >
                    <span className="text-sm text-white/50">{item.label}</span>
                    <span
                      className="text-[10px] font-semibold uppercase tracking-widest ml-4 shrink-0"
                      style={{ color: "rgba(47,107,255,0.5)" }}
                    >
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>

              <div
                className="mt-6 rounded-xl p-5"
                style={{
                  background: "rgba(47,107,255,0.05)",
                  border: "1px solid rgba(47,107,255,0.12)",
                }}
              >
                <p className="text-[13px] text-white/45 leading-relaxed">
                  Infrastructure roadmap is driven by field data, operational gaps,
                  and harm reduction evidence — not market trends.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Trust / Ethics Statement ─────────────────────────────────────── */}
      <Section border>
        <Container>
          <div
            className="relative rounded-card overflow-hidden p-8 sm:p-12"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            {/* Multi-spectrum ambient */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 60% 80% at 0% 50%, rgba(47,107,255,0.05) 0%, transparent 60%), radial-gradient(ellipse 50% 60% at 100% 50%, rgba(0,213,255,0.04) 0%, transparent 60%)",
              }}
            />
            <div className="relative grid lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-16 items-start">
              <div>
                <Eyebrow color="muted">Our position</Eyebrow>
                <h2 className="text-display-md text-balance leading-tight">
                  Harm reduction.<br />
                  Not harm promotion.
                </h2>
              </div>
              <div className="space-y-5">
                <p className="text-white/65 text-base leading-relaxed">
                  VICELAB does not promote or encourage substance use.
                </p>
                <p className="text-white/45 text-base leading-relaxed">
                  Our work focuses on reducing preventable harm, improving operational
                  safety, and translating evidence-informed public health research into
                  practical tools, systems, and interventions. We operate where people
                  already are — not to endorse what they do, but to improve outcomes
                  when risk is present.
                </p>
                <div className="grid sm:grid-cols-3 gap-3 pt-2">
                  {[
                    { title: "Privacy-first", desc: "No surveillance. No tracking. Data minimisation by design." },
                    { title: "Non-judgmental", desc: "Evidence-informed safety without moralising or gatekeeping." },
                    { title: "Human-centred", desc: "Every system is designed around real people in real environments." },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-xl p-4"
                      style={{
                        background: "rgba(255,255,255,0.025)",
                        border: "1px solid rgba(255,255,255,0.07)",
                      }}
                    >
                      <p className="text-[12px] font-semibold text-white/70 mb-1.5">{item.title}</p>
                      <p className="text-[12px] text-white/35 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Shop CTA ─────────────────────────────────────────────────────── */}
      <Section border>
        <Container>
          <div className="relative rounded-card border border-white/[0.07] bg-white/[0.025] overflow-hidden p-8 sm:p-12 md:p-14 text-center shadow-panel">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse 60% 60% at 50% 100%, rgba(255,0,168,0.08) 0%, transparent 70%)" }}
            />
            <div className="relative">
              <Eyebrow color="pink">Field-tested gear</Eyebrow>
              <h2 className="text-display-md text-balance mb-4">Wear the mission.</h2>
              <p className="text-white/38 text-base leading-relaxed max-w-md mx-auto mb-8">
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
