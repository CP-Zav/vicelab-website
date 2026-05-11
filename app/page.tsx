import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "VICELAB — Safety Infrastructure for Real Environments",
  description:
    "Six interconnected harm reduction systems for nightlife, festivals, and altered environments. Built from real incidents, real debriefs, real outcomes.",
  openGraph: {
    title: "VICELAB — Safety Infrastructure for Real Environments",
    description:
      "Six interconnected harm reduction systems for nightlife, festivals, and altered environments.",
    url: "https://thevicelab.com",
    siteName: "VICELAB",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "VICELAB" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VICELAB — Safety Infrastructure for Real Environments",
    description: "Six interconnected harm reduction systems for nightlife, festivals, and altered environments.",
    images: ["/og-image.png"],
  },
};

// ── System directory ─────────────────────────────────────────────────────────
const systems = [
  {
    index: "01",
    id: "COOKED-PILOT",
    name: "Cooked Pilot",
    href: "/cooked-pilot",
    function: "Peer harm reduction for nightlife and festivals.",
    detail: "Live alerts. Anonymous by default. No account, no tracking.",
    status: "live" as const,
    statusLabel: "LIVE",
    accent: "#FF00A8",
    accentDim: "rgba(255,0,168,0.07)",
  },
  {
    index: "02",
    id: "VIBEGUARD",
    name: "VibeGuard",
    href: "/vibeguard",
    function: "Compliance intelligence for event organisers.",
    detail: "Anonymised crowd telemetry. Duty-of-care reporting.",
    status: "staging" as const,
    statusLabel: "STAGING",
    accent: "#00D5FF",
    accentDim: "rgba(0,213,255,0.07)",
  },
  {
    index: "03",
    id: "ASA",
    name: "ASA",
    href: "/asa",
    function: "Altered State Archive — knowledge intelligence layer.",
    detail: "Lived experience, pharmacological research, harm reduction practice.",
    status: "beta" as const,
    statusLabel: "BETA",
    accent: "#7C3AED",
    accentDim: "rgba(124,58,237,0.07)",
  },
  {
    index: "04",
    id: "MATRIX",
    name: "Matrix",
    href: "/matrix",
    function: "Substance interaction engine.",
    detail: "Pharmacological risk data for harm reduction practitioners.",
    status: "dev" as const,
    statusLabel: "IN DEV",
    accent: "#4F46E5",
    accentDim: "rgba(79,70,229,0.07)",
  },
  {
    index: "05",
    id: "SIV",
    name: "SIV",
    href: "/siv",
    function: "Safety intelligence infrastructure.",
    detail: "Unified field intelligence, risk, and operational response protocols.",
    status: "dev" as const,
    statusLabel: "IN DEV",
    accent: "#06B6D4",
    accentDim: "rgba(6,182,212,0.07)",
  },
  {
    index: "06",
    id: "VICELAB",
    name: "VICELAB",
    href: "/vicelab",
    function: "Research, education, and harm reduction intelligence.",
    detail: "Translational research. Field-tested tools. Evidence-informed infrastructure.",
    status: "live" as const,
    statusLabel: "ACTIVE",
    accent: "#2F6BFF",
    accentDim: "rgba(47,107,255,0.07)",
  },
];

const statusDot = {
  live:    { color: "#00FF9D", pulse: true  },
  staging: { color: "#F59E0B", pulse: false },
  beta:    { color: "#8B5CF6", pulse: false },
  dev:     { color: "rgba(255,255,255,0.2)", pulse: false },
};

const operationalParams = [
  { key: "APPROACH",  value: "Harm reduction" },
  { key: "DESIGN",    value: "Field-embedded" },
  { key: "PRIVACY",   value: "Default — off" },
  { key: "SOURCE",    value: "Real incidents" },
  { key: "INTENT",    value: "Prevention" },
];

// ── Component: Status indicator ──────────────────────────────────────────────
function StatusDot({ status, label }: { status: keyof typeof statusDot; label: string }) {
  const { color, pulse } = statusDot[status];
  return (
    <div className="flex items-center gap-1.5">
      <span className="sys-label" style={{ fontSize: "9px", color: color + "90" }}>{label}</span>
      <span
        className={`w-1.5 h-1.5 rounded-full flex-shrink-0${pulse ? " status-pulse" : ""}`}
        style={{ backgroundColor: color }}
      />
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#080808]">

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-[100svh] flex flex-col justify-center pt-20 pb-16 lg:pt-24 lg:pb-20 overflow-hidden">

        {/* Environmental layers */}
        <div className="absolute inset-0 pointer-events-none">
          {/* HUD grid — barely perceptible */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "linear-gradient(rgba(47,107,255,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(47,107,255,0.022) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          {/* Left ambient bloom */}
          <div
            className="absolute -left-60 top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(47,107,255,0.055) 0%, transparent 70%)" }}
          />
          {/* Right ambient bloom */}
          <div
            className="absolute -right-40 top-1/3 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(255,0,168,0.04) 0%, transparent 70%)" }}
          />
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080808] to-transparent" />
        </div>

        <div className="relative max-w-site mx-auto px-5 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-20 xl:gap-28">

            {/* Left — system identifier */}
            <div className="flex-1 lg:max-w-[520px]">

              {/* System eyebrow */}
              <div className="flex items-center gap-3 mb-10">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9D] status-pulse" />
                <span className="sys-label tracking-[0.28em]">ECOSYSTEM ENTRY POINT</span>
              </div>

              {/* Title */}
              <h1
                className="text-white font-bold leading-[0.93] tracking-tight mb-7"
                style={{
                  fontSize: "clamp(2.6rem, 7vw, 4.75rem)",
                  letterSpacing: "-0.03em",
                }}
              >
                Safety systems
                <br />
                <span className="text-white/40">built for</span>
                <br />
                the real world.
              </h1>

              {/* Body */}
              <p className="text-[15px] text-white/40 leading-[1.75] max-w-sm mb-10">
                Six interconnected systems for nightlife, festivals, and altered environments.
                Built from real incidents, real debriefs, real outcomes.
              </p>

              {/* CTA — operational, not marketing */}
              <Link
                href="#systems"
                className="inline-flex items-center gap-4 group"
              >
                <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-white/45 group-hover:text-white/80 transition-colors duration-200">
                  ACCESS SYSTEMS
                </span>
                <span className="w-10 h-px bg-white/15 group-hover:bg-white/50 transition-all duration-300 group-hover:w-14" />
                <span className="font-mono text-[10px] text-white/30 group-hover:text-white/60 transition-colors duration-200">→</span>
              </Link>
            </div>

            {/* Mobile: compact system status list — below hero copy */}
            <div className="lg:hidden mt-10">
              <div className="tel-panel overflow-hidden" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.04]">
                  <span className="sys-label tracking-[0.22em]" style={{ fontSize: "9px" }}>SYSTEMS</span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#00FF9D] status-pulse" />
                    <span className="sys-label" style={{ fontSize: "8px" }}>LIVE</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 divide-x divide-white/[0.04]">
                  {systems.map((sys) => {
                    const dot = statusDot[sys.status];
                    return (
                      <Link
                        key={sys.id}
                        href={sys.href}
                        className="flex items-center justify-between px-3 py-3 border-b border-white/[0.04] last:border-b-0 hover:bg-white/[0.015] transition-colors"
                      >
                        <span className="font-mono text-[10px] tracking-[0.08em]" style={{ color: sys.accent + "CC" }}>
                          {sys.name}
                        </span>
                        <span
                          className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ml-2${dot.pulse ? " status-pulse" : ""}`}
                          style={{ backgroundColor: dot.color }}
                        />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right — system status telemetry panel (desktop only) */}
            <div className="hidden lg:block flex-shrink-0 w-72 mt-1">
              <div
                className="tel-panel"
                style={{ borderColor: "rgba(255,255,255,0.06)" }}
              >
                {/* Panel header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.05]">
                  <span className="sys-label tracking-[0.22em]">SYSTEM STATUS</span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#00FF9D] status-pulse" />
                    <span className="sys-label" style={{ fontSize: "9px" }}>LIVE</span>
                  </div>
                </div>

                {/* System rows */}
                <div className="divide-y divide-white/[0.04]">
                  {systems.map((sys) => {
                    const dot = statusDot[sys.status];
                    return (
                      <Link
                        key={sys.id}
                        href={sys.href}
                        className="flex items-center justify-between px-4 py-3 group hover:bg-white/[0.015] transition-colors duration-150"
                      >
                        <div>
                          <div className="font-mono text-[11px] tracking-[0.1em] text-white/65 group-hover:text-white/85 transition-colors">
                            {sys.name}
                          </div>
                          <div className="font-mono text-[9px] text-white/22 mt-0.5 tracking-[0.06em]">
                            {sys.id}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[9px] tracking-[0.1em] uppercase" style={{ color: dot.color + "80" }}>
                            {sys.statusLabel}
                          </span>
                          <span
                            className={`w-1.5 h-1.5 rounded-full flex-shrink-0${dot.pulse ? " status-pulse" : ""}`}
                            style={{ backgroundColor: dot.color }}
                          />
                        </div>
                      </Link>
                    );
                  })}
                </div>

                {/* Panel footer */}
                <div className="px-4 py-2.5 border-t border-white/[0.04]">
                  <div className="flex items-center justify-between">
                    <span className="sys-label" style={{ fontSize: "9px" }}>LAST UPDATE</span>
                    <span className="sys-label" style={{ fontSize: "9px", color: "rgba(255,255,255,0.5)" }}>LIVE</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Systems Directory ─────────────────────────────────────────── */}
      <section id="systems" className="relative py-20 lg:py-28">
        <div className="max-w-site mx-auto px-5 sm:px-6 lg:px-8">

          {/* Section header */}
          <div className="flex items-center gap-5 mb-14">
            <span className="sys-label tracking-[0.32em]">SYSTEMS</span>
            <div className="flex-1 h-px bg-white/[0.05]" />
            <span className="sys-label" style={{ fontSize: "9px" }}>06 NODES</span>
          </div>

          {/* Panel grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2.5">
            {systems.map((sys) => {
              return (
                <Link
                  key={sys.id}
                  href={sys.href}
                  className="group relative block tel-panel p-5 overflow-hidden transition-all duration-300 hover:border-white/[0.11]"
                  style={{ borderColor: "rgba(255,255,255,0.055)" }}
                >
                  {/* Hover accent */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                    style={{ background: `radial-gradient(ellipse 70% 100% at 0% 50%, ${sys.accentDim} 0%, transparent 70%)` }}
                  />

                  <div className="relative">
                    {/* Top row */}
                    <div className="flex items-start justify-between mb-3.5">
                      <div className="flex items-center gap-2.5">
                        <span className="sys-label" style={{ fontSize: "9px", color: "rgba(255,255,255,0.18)" }}>
                          [{sys.index}]
                        </span>
                        <span
                          className="font-mono text-[12px] tracking-[0.14em] uppercase font-medium"
                          style={{ color: sys.accent + "CC" }}
                        >
                          {sys.name}
                        </span>
                      </div>
                      <StatusDot status={sys.status} label={sys.statusLabel} />
                    </div>

                    {/* Function */}
                    <p className="text-[14px] text-white/65 leading-[1.5] mb-1.5 group-hover:text-white/80 transition-colors">
                      {sys.function}
                    </p>

                    {/* Detail */}
                    <p className="text-[12px] text-white/27 leading-[1.5] mb-4">
                      {sys.detail}
                    </p>

                    {/* Access */}
                    <div className="flex items-center gap-2 transition-all duration-200 group-hover:gap-3">
                      <span className="font-mono text-[9px] tracking-[0.22em] uppercase text-white/22 group-hover:text-white/45 transition-colors">
                        ACCESS
                      </span>
                      <span className="font-mono text-[9px] text-white/18 group-hover:text-white/38 transition-colors">→</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Operational Brief ─────────────────────────────────────────── */}
      <section className="relative py-20 lg:py-28">
        <div className="max-w-site mx-auto px-5 sm:px-6 lg:px-8">

          <div className="h-px bg-white/[0.04] mb-16 lg:mb-20" />

          <div className="flex flex-col lg:flex-row lg:gap-20 xl:gap-28">

            {/* Left — operational parameters */}
            <div className="flex-shrink-0 lg:w-52 mb-12 lg:mb-0">
              <div className="sys-label tracking-[0.3em] mb-5">PARAMS</div>
              <div className="divide-y divide-white/[0.04]">
                {operationalParams.map((p) => (
                  <div key={p.key} className="flex flex-col py-3">
                    <span className="sys-label mb-1" style={{ fontSize: "9px" }}>{p.key}</span>
                    <span className="font-mono text-[11px] text-white/50">{p.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — system brief */}
            <div className="flex-1 max-w-lg">
              <div className="sys-label tracking-[0.3em] mb-7">SYSTEM BRIEF</div>
              <div className="space-y-5">
                <p className="text-[15px] text-white/42 leading-[1.82]">
                  This is not a product suite. It is an infrastructure layer for environments where conventional safety systems fail.
                </p>
                <p className="text-[15px] text-white/42 leading-[1.82]">
                  Built by people inside the problem — not observers designing from the outside. Every system exists because a real environment required it.
                </p>
                <p className="text-[15px] text-white/55 leading-[1.82]">
                  Nightlife. Festivals. Altered environments. Operational pressure. We build for the people who understand what actually happens.
                </p>
              </div>

              {/* Core positioning line */}
              <div className="mt-10 flex items-center gap-4">
                <div className="w-8 h-px bg-white/15" />
                <span className="sys-label italic" style={{ color: "rgba(255,255,255,0.28)", letterSpacing: "0.18em" }}>
                  This is not merch. This is field intelligence.
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Signal strip ─────────────────────────────────────────────── */}
      <section className="relative py-14 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(47,107,255,0.03) 25%, rgba(47,107,255,0.03) 75%, transparent 100%)",
          }}
        />
        <div className="h-px bg-white/[0.03] mb-14 max-w-site mx-auto px-5 sm:px-6 lg:px-8" />
        <div className="max-w-site mx-auto px-5 sm:px-6 lg:px-8 flex items-center justify-center gap-5">
          <div className="h-px flex-1 max-w-20 bg-white/[0.04]" />
          <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-white/22 text-center">
            This is not merch. This is field intelligence.
          </p>
          <div className="h-px flex-1 max-w-20 bg-white/[0.04]" />
        </div>
      </section>

    </div>
  );
}
