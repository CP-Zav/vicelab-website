import type { Metadata } from "next";
import Image from "next/image";
import { Container, Section, Badge, ButtonPrimary, ButtonGhost } from "@/components/ui";

export const metadata: Metadata = {
  title: "ASA — Analytical Substance Archive | VICELAB",
  description:
    "A living evidence archive. Pharmacological intelligence, field-calibrated compound records, and operational harm reduction data — built for practitioners, not papers.",
  openGraph: {
    title: "ASA — Analytical Substance Archive | VICELAB",
    description:
      "A living evidence archive. Pharmacological intelligence, field-calibrated compound records, and operational harm reduction data — built for practitioners, not papers.",
    url: "https://thevicelab.com/asa",
    siteName: "VICELAB",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "VICELAB" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ASA — Analytical Substance Archive | VICELAB",
    description:
      "A living evidence archive. Pharmacological intelligence, field-calibrated compound records, and operational harm reduction data — built for practitioners, not papers.",
    images: ["/og-image.png"],
  },
};

// ASA colour tokens — richer spectrum than standard blue
const ASA = {
  violet:  "#7C3AED",
  violetM: "rgba(124,58,237,",
  cyan:    "#00D5FF",
  cyanM:   "rgba(0,213,255,",
  magenta: "#FF00A8",
  magentaM:"rgba(255,0,168,",
  uvBlue:  "#2F6BFF",
} as const;

// ── Intelligence records (features) ─────────────────────────────────────────
const records = [
  {
    title: "Compound intelligence records",
    body: "Full-spectrum compound profiles — pharmacokinetics, effects architecture, harm profile, and real-world use patterns across 150+ substances.",
    accent: ASA.cyan,
  },
  {
    title: "Evidence grading",
    body: "Every data point sourced and graded: anecdotal, observational, or clinical. You always know how confident the data is — and why it matters.",
    accent: ASA.violet,
  },
  {
    title: "Field-calibrated intelligence",
    body: "Archive entries updated from real-world use patterns alongside laboratory data. Dose ranges, routes, and onset windows reflect how compounds actually behave in the field.",
    accent: ASA.uvBlue,
  },
  {
    title: "Operational context layer",
    body: "Harm reduction framing built into every record. ASA is designed for the people in the field: peer workers, event medics, and safety coordinators — not researchers writing papers.",
    accent: ASA.violet,
  },
  {
    title: "Cross-system intelligence API",
    body: "ASA powers Matrix and SIV. It is the knowledge layer the entire VICELAB intelligence stack queries — structured for cross-system use from day one.",
    accent: ASA.cyan,
  },
  {
    title: "Active field signal monitoring",
    body: "Archive flags triggered by emerging field reports and drug checking data. When a novel compound or adulterant enters circulation, the record is updated before it becomes a statistic.",
    accent: ASA.magenta,
    featured: true,
  },
];

// ── Inline eye sigil (hero) ──────────────────────────────────────────────────
function EyeSigil({ size = 160, opacity = 1 }: { size?: number; opacity?: number }) {
  const h = Math.round(size * 0.625);
  return (
    <svg
      width={size}
      height={h}
      viewBox="0 0 160 100"
      fill="none"
      style={{ opacity }}
      aria-hidden
    >
      <defs>
        <linearGradient id={`eg-${size}`} x1="0" y1="0" x2="160" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00D5FF" />
          <stop offset="45%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#FF00A8" />
        </linearGradient>
        <linearGradient id={`eg2-${size}`} x1="160" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00D5FF" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.15" />
        </linearGradient>
        <filter id={`eglow-${size}`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      {/* Corner brackets */}
      <polyline points="2,12 2,2 12,2"      stroke="#00D5FF" strokeWidth="1.2" strokeOpacity="0.45" fill="none" />
      <polyline points="148,2 158,2 158,12"  stroke="#00D5FF" strokeWidth="1.2" strokeOpacity="0.45" fill="none" />
      <polyline points="2,88 2,98 12,98"     stroke="#00D5FF" strokeWidth="1.2" strokeOpacity="0.45" fill="none" />
      <polyline points="148,98 158,98 158,88" stroke="#00D5FF" strokeWidth="1.2" strokeOpacity="0.45" fill="none" />
      {/* Eye vesica */}
      <path d="M14,50 Q80,12 146,50 Q80,88 14,50 Z"
        stroke={`url(#eg-${size})`} strokeWidth="1.6" fill="none" filter={`url(#eglow-${size})`} />
      {/* Iris outer */}
      <circle cx="80" cy="50" r="24" stroke={`url(#eg-${size})`} strokeWidth="1.4" fill="none" filter={`url(#eglow-${size})`} />
      {/* Iris inner detail */}
      <circle cx="80" cy="50" r="18" stroke={`url(#eg2-${size})`} strokeWidth="0.8" fill="none" />
      {/* Pupil ring */}
      <circle cx="80" cy="50" r="10" stroke={`url(#eg-${size})`} strokeWidth="1.4" fill="none" filter={`url(#eglow-${size})`} />
      {/* Pupil core */}
      <circle cx="80" cy="50" r="3.5" fill={`url(#eg-${size})`} filter={`url(#eglow-${size})`} />
      {/* Axis ticks */}
      <line x1="80" y1="24" x2="80" y2="28" stroke="#7C3AED" strokeWidth="0.8" strokeOpacity="0.5" />
      <line x1="80" y1="72" x2="80" y2="76" stroke="#7C3AED" strokeWidth="0.8" strokeOpacity="0.5" />
      <line x1="54" y1="50" x2="58" y2="50" stroke="#7C3AED" strokeWidth="0.8" strokeOpacity="0.5" />
      <line x1="102" y1="50" x2="106" y2="50" stroke="#7C3AED" strokeWidth="0.8" strokeOpacity="0.5" />
    </svg>
  );
}

// ── Archive record card ──────────────────────────────────────────────────────
function ArchiveCard({
  title,
  body,
  accent,
  featured,
  index,
}: {
  title: string;
  body: string;
  accent: string;
  featured?: boolean;
  index: number;
}) {
  const accentRgb = accent === ASA.cyan
    ? "0,213,255" : accent === ASA.violet
    ? "124,58,237" : accent === ASA.magenta
    ? "255,0,168" : "47,107,255";

  return (
    <div
      className="relative rounded-card p-5 overflow-hidden group transition-all duration-300"
      style={{
        background: featured
          ? `rgba(${accentRgb},0.06)`
          : "rgba(255,255,255,0.022)",
        border: featured
          ? `1px solid rgba(${accentRgb},0.25)`
          : "1px solid rgba(255,255,255,0.065)",
        boxShadow: featured
          ? `0 0 32px rgba(${accentRgb},0.10), 0 1px 8px rgba(0,0,0,0.3)`
          : "0 1px 8px rgba(0,0,0,0.28), 0 0 0 1px rgba(255,255,255,0.025)",
      }}
    >
      {/* Subtle eye watermark on featured card */}
      {featured && (
        <div
          className="absolute top-3 right-3 opacity-[0.07] pointer-events-none"
          style={{ transform: "scale(0.8)" }}
        >
          <EyeSigil size={80} opacity={1} />
        </div>
      )}

      {/* Corner brackets — archive motif on all cards */}
      <svg
        className="absolute top-3 left-3 pointer-events-none"
        width="14" height="14" viewBox="0 0 14 14" fill="none"
        style={{ opacity: featured ? 0.4 : 0.18 }}
        aria-hidden
      >
        <polyline points="0,5 0,0 5,0" stroke={accent} strokeWidth="1.2" fill="none" />
      </svg>

      {/* Record index */}
      <div className="flex items-center justify-between mb-4">
        <span
          className="text-[9px] font-semibold tracking-[0.2em] uppercase"
          style={{ color: `rgba(${accentRgb},0.5)` }}
        >
          {String(index + 1).padStart(2, "0")} /{" "}
          <span style={{ color: `rgba(${accentRgb},0.35)` }}>06</span>
        </span>
        {featured && (
          <span
            className="text-[9px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full"
            style={{
              color: `rgba(${accentRgb},0.7)`,
              background: `rgba(${accentRgb},0.10)`,
              border: `1px solid rgba(${accentRgb},0.18)`,
            }}
          >
            Live signal
          </span>
        )}
      </div>

      <h3
        className="text-sm font-semibold mb-2.5 leading-snug"
        style={{ color: accent }}
      >
        {title}
      </h3>
      <p
        className="text-sm leading-[1.78]"
        style={{ color: "rgba(255,255,255,0.55)" }}
      >
        {body}
      </p>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function AsaPage() {
  return (
    <>
      <style>{`
        @keyframes asa-scan {
          0%   { transform: translateY(-8px); opacity: 0.3; }
          50%  { opacity: 0.55; }
          100% { transform: translateY(8px); opacity: 0.3; }
        }
        @keyframes asa-pulse {
          0%, 100% { opacity: 0.35; }
          50%       { opacity: 0.65; }
        }
        @keyframes asa-orbit {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .asa-scan      { animation: asa-scan 8s ease-in-out infinite; }
        .asa-pulse     { animation: asa-pulse 5s ease-in-out infinite; }
        .asa-pulse-slow{ animation: asa-pulse 9s ease-in-out infinite; }
        .asa-card:hover {
          background: rgba(124,58,237,0.05) !important;
          border-color: rgba(124,58,237,0.20) !important;
        }
      `}</style>

      <div className="min-h-screen">

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden pt-32 pb-20 lg:pt-44 lg:pb-28">

          {/* Multi-spectrum ambient background */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: [
                "radial-gradient(ellipse 70% 55% at 30% -5%, rgba(124,58,237,0.18) 0%, transparent 65%)",
                "radial-gradient(ellipse 50% 40% at 80% 30%, rgba(0,213,255,0.10) 0%, transparent 60%)",
                "radial-gradient(ellipse 40% 30% at 10% 80%, rgba(255,0,168,0.07) 0%, transparent 55%)",
              ].join(", "),
            }}
          />

          {/* Grid */}
          <div
            className="absolute inset-0 bg-grid-faint bg-grid opacity-[0.28] pointer-events-none"
            style={{
              maskImage: "radial-gradient(ellipse 75% 55% at 35% 0%, black 0%, transparent 80%)",
            }}
          />

          {/* Scan-line atmospheric layer */}
          <div
            className="asa-scan absolute inset-x-0 pointer-events-none"
            style={{
              top: "30%",
              height: "1px",
              background: "linear-gradient(90deg, transparent 0%, rgba(0,213,255,0.15) 30%, rgba(124,58,237,0.25) 50%, rgba(0,213,255,0.15) 70%, transparent 100%)",
            }}
          />

          {/* Floating ambient dots */}
          {[
            { top: "20%", left: "62%", color: ASA.cyan,    size: 3, delay: "0s"   },
            { top: "45%", left: "78%", color: ASA.violet,  size: 2, delay: "2s"   },
            { top: "65%", left: "55%", color: ASA.magenta, size: 2, delay: "4s"   },
            { top: "15%", left: "88%", color: ASA.uvBlue,  size: 2.5, delay: "1s" },
          ].map((dot, i) => (
            <div
              key={i}
              className="asa-pulse absolute rounded-full pointer-events-none"
              style={{
                top: dot.top, left: dot.left,
                width: dot.size, height: dot.size,
                background: dot.color,
                boxShadow: `0 0 ${dot.size * 4}px ${dot.color}`,
                animationDelay: dot.delay,
              }}
            />
          ))}

          <Container>
            <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16 xl:gap-24">

              {/* ── Left: copy ────────────────────────────────────────── */}
              <div className="flex-1 max-w-xl">
                {/* Eyebrow */}
                <div className="flex items-center gap-3 mb-5">
                  <p
                    className="text-xs font-semibold tracking-[0.18em] uppercase"
                    style={{ color: ASA.violet }}
                  >
                    Intelligence Archive
                  </p>
                  <Badge variant="blue">In Development</Badge>
                </div>

                {/* Logo / wordmark */}
                <div className="mb-5">
                  <Image
                    src="/logos/asa.svg"
                    alt="ASA"
                    width={140}
                    height={140}
                    className="w-20 h-auto"
                    style={{ width: "80px", height: "auto", filter: "brightness(1.2) saturate(1.3)" }}
                    priority
                  />
                </div>

                <h1 className="text-display-lg text-balance mb-3">ASA</h1>

                <p
                  className="text-lg font-semibold mb-5 leading-snug"
                  style={{
                    background: `linear-gradient(135deg, ${ASA.cyan} 0%, ${ASA.violet} 55%, ${ASA.magenta} 100%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Analytical Substance Archive.
                </p>

                <p
                  className="text-[17px] leading-relaxed mb-4"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  A living intelligence archive. Evidence-graded compound records,
                  field-calibrated harm reduction data, and operational knowledge infrastructure —
                  built for practitioners, not papers.
                </p>
                <p
                  className="text-[15px] leading-relaxed mb-9"
                  style={{ color: "rgba(255,255,255,0.38)" }}
                >
                  ASA is the knowledge layer of the VICELAB ecosystem — the analytical
                  foundation that powers Matrix, informs SIV, and grounds every
                  evidence-informed intervention we build.
                </p>

                <div className="flex flex-wrap gap-3">
                  <ButtonPrimary href="mailto:hello@thevicelab.com" gradient="bg-gradient-sig">
                    Register interest
                  </ButtonPrimary>
                  <ButtonGhost href="/vicelab">About VICELAB</ButtonGhost>
                </div>
              </div>

              {/* ── Right: eye sigil panel ─────────────────────────── */}
              <div className="hidden lg:flex flex-shrink-0 items-center justify-center pt-8 xl:pr-4">
                <div className="relative">
                  {/* Outer glow ring */}
                  <div
                    className="asa-pulse-slow absolute inset-0 rounded-full pointer-events-none"
                    style={{
                      background: `radial-gradient(ellipse, ${ASA.violetM}0.12) 0%, transparent 65%)`,
                      filter: "blur(32px)",
                      transform: "scale(1.6)",
                    }}
                  />
                  {/* Eye sigil */}
                  <div className="relative">
                    <EyeSigil size={240} opacity={0.88} />
                  </div>
                  {/* Archive label */}
                  <div className="mt-4 text-center">
                    <p
                      className="text-[9px] font-semibold tracking-[0.25em] uppercase"
                      style={{ color: "rgba(124,58,237,0.45)" }}
                    >
                      ASA · Intelligence Sigil
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </Container>
        </section>

        {/* ── Archive records ───────────────────────────────────────────── */}
        <Section border>
          <Container>

            {/* Section header */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
              <div>
                <p
                  className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-3"
                  style={{ color: "rgba(255,255,255,0.22)" }}
                >
                  Archive records
                </p>
                <h2 className="text-display-md text-balance max-w-sm leading-tight">
                  Substance intelligence.{" "}
                  <span
                    style={{
                      background: `linear-gradient(135deg, ${ASA.cyan}, ${ASA.violet})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Evidence-graded.
                  </span>
                </h2>
              </div>
              <p
                className="text-[14px] leading-relaxed max-w-xs"
                style={{ color: "rgba(255,255,255,0.38)" }}
              >
                ASA is not a summary database. It is a structured intelligence layer
                built from pharmacological literature, field data, and harm reduction
                practice — graded by confidence, updated by what&apos;s in circulation.
              </p>
            </div>

            {/* Records grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {records.map((r, i) => (
                <div key={r.title} className={r.featured ? undefined : "asa-card"}>
                  <ArchiveCard {...r} index={i} />
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* ── Ecosystem positioning ─────────────────────────────────────── */}
        <Section border>
          <Container>
            <div
              className="relative rounded-card overflow-hidden p-8 sm:p-12"
              style={{
                background: "rgba(255,255,255,0.018)",
                border: "1px solid rgba(255,255,255,0.065)",
              }}
            >
              {/* Multi-spectrum corner glows */}
              <div
                className="absolute top-0 left-0 w-64 h-64 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at top left, ${ASA.violetM}0.10) 0%, transparent 65%)`,
                  filter: "blur(20px)",
                }}
              />
              <div
                className="absolute bottom-0 right-0 w-64 h-64 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at bottom right, ${ASA.cyanM}0.07) 0%, transparent 65%)`,
                  filter: "blur(20px)",
                }}
              />

              <div className="relative grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start">
                <div>
                  <p
                    className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-5"
                    style={{ color: "rgba(124,58,237,0.55)" }}
                  >
                    Ecosystem architecture
                  </p>
                  <h2 className="text-display-md text-balance leading-tight mb-6">
                    The brain layer<br />of VICELAB.
                  </h2>
                  {/* Small eye sigil */}
                  <EyeSigil size={96} opacity={0.35} />
                </div>

                <div className="space-y-5">
                  <p
                    className="text-[17px] leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.60)" }}
                  >
                    ASA is not a standalone product. It is the analytical foundation
                    every VICELAB system queries.
                  </p>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.42)" }}
                  >
                    Matrix draws on ASA compound records to calculate interaction
                    risk scores. SIV references ASA harm profiles to contextualise
                    field signals. Every evidence-informed output in the ecosystem
                    traces back to this archive.
                  </p>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.42)" }}
                  >
                    If you work in harm reduction, drug checking, or event safety —
                    and you are tired of referencing sources that were not built for
                    your environment — ASA is what the field has been missing.
                  </p>

                  {/* System links */}
                  <div className="flex flex-wrap gap-3 pt-2">
                    <ButtonPrimary href="mailto:hello@thevicelab.com" gradient="bg-gradient-sig">
                      Get in touch
                    </ButtonPrimary>
                    <ButtonGhost href="/matrix">Explore Matrix</ButtonGhost>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

      </div>
    </>
  );
}
