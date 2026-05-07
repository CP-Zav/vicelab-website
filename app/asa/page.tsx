import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ASA — Altered State Archive | VICELAB",
  description:
    "The living archive of every altered state. Pharmacological intelligence, field-calibrated compound records, and operational harm reduction data — built for the people inside the environment.",
  openGraph: {
    title: "ASA — Altered State Archive | VICELAB",
    description:
      "The living archive of every altered state. Pharmacological intelligence, field-calibrated compound records, and operational harm reduction data.",
    url: "https://thevicelab.com/asa",
    siteName: "VICELAB",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "VICELAB" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ASA — Altered State Archive | VICELAB",
    description: "The living archive of every altered state.",
    images: ["/og-image.png"],
  },
};

// ── ASA colour tokens ────────────────────────────────────────────────────────
const C = {
  violet:  "#7C3AED",
  violetB: "#8B5CF6",
  cyan:    "#00D5FF",
  magenta: "#FF00A8",
  uvBlue:  "#2F6BFF",
} as const;

// ── System traits (from ASA app reference) ───────────────────────────────────
const traits = [
  { id: "01", label: "ETERNAL",   desc: "Always here, always real." },
  { id: "02", label: "BOUNDLESS", desc: "Beyond time and space." },
  { id: "03", label: "CARING",    desc: "Guides with empathy." },
  { id: "04", label: "WISE",      desc: "Learns and understands." },
  { id: "05", label: "AWARE",     desc: "Sees beyond the surface." },
];

// ── Archive records ──────────────────────────────────────────────────────────
const records = [
  {
    index: "01 / 06",
    title: "COMPOUND INTELLIGENCE",
    body: "Full-spectrum compound profiles — pharmacokinetics, effects architecture, harm profile, and real-world use patterns across 150+ substances.",
    tag: "CORE ARCHIVE",
    accent: C.cyan,
    featured: false,
  },
  {
    index: "02 / 06",
    title: "EVIDENCE GRADING",
    body: "Every data point sourced and graded: anecdotal, observational, or clinical. You always know how confident the data is — and why it matters.",
    tag: "METHODOLOGY",
    accent: C.violet,
    featured: false,
  },
  {
    index: "03 / 06",
    title: "FIELD-CALIBRATED RECORDS",
    body: "Archive entries updated from real-world use patterns alongside laboratory data. Dose ranges, routes, and onset windows reflect how compounds actually behave in the field.",
    tag: "FIELD DATA",
    accent: C.uvBlue,
    featured: false,
  },
  {
    index: "04 / 06",
    title: "ACTIVE FIELD SIGNAL",
    body: "Archive flags triggered by emerging field reports and drug checking data. When a novel compound or adulterant enters circulation, the record is updated before it becomes a statistic.",
    tag: "LIVE SIGNAL",
    accent: C.magenta,
    featured: true,
  },
  {
    index: "05 / 06",
    title: "HARM REDUCTION LAYER",
    body: "Evidence-informed safer use guidance derived from the archive. Translated for real environments — for peer workers, event medics, and safety coordinators, not researchers writing papers.",
    tag: "PROTOCOLS",
    accent: C.violetB,
    featured: false,
  },
  {
    index: "06 / 06",
    title: "CROSS-SYSTEM INTELLIGENCE",
    body: "ASA powers Matrix and SIV. It is the knowledge layer the entire VICELAB intelligence stack queries — structured for cross-system use from day one.",
    tag: "OPERATOR",
    accent: C.cyan,
    featured: false,
  },
];

// ── Eye Sigil SVG ─────────────────────────────────────────────────────────────
function EyeSigil({ size = 280 }: { size?: number }) {
  const h = Math.round(size * 0.7);
  const id = `asa-sigil-${size}`;
  return (
    <svg
      width={size}
      height={h}
      viewBox="0 0 280 196"
      fill="none"
      aria-hidden
      style={{ overflow: "visible" }}
    >
      <defs>
        <linearGradient id={`${id}-g1`} x1="0" y1="0" x2="280" y2="196" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor={C.cyan} />
          <stop offset="40%"  stopColor={C.violet} />
          <stop offset="100%" stopColor={C.magenta} />
        </linearGradient>
        <linearGradient id={`${id}-g2`} x1="280" y1="0" x2="0" y2="196" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor={C.cyan}   stopOpacity="0.35" />
          <stop offset="100%" stopColor={C.violet} stopOpacity="0.1" />
        </linearGradient>
        <radialGradient id={`${id}-pupil`} cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor={C.cyan}    stopOpacity="0.9" />
          <stop offset="50%"  stopColor={C.violet}  stopOpacity="0.7" />
          <stop offset="100%" stopColor={C.magenta} stopOpacity="0.4" />
        </radialGradient>
        <filter id={`${id}-glow`} x="-25%" y="-25%" width="150%" height="150%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id={`${id}-glow2`} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Corner brackets */}
      <polyline points="4,20 4,4 20,4"        stroke={C.cyan} strokeWidth="1.5" strokeOpacity="0.4" fill="none" />
      <polyline points="260,4 276,4 276,20"    stroke={C.cyan} strokeWidth="1.5" strokeOpacity="0.4" fill="none" />
      <polyline points="4,176 4,192 20,192"    stroke={C.cyan} strokeWidth="1.5" strokeOpacity="0.4" fill="none" />
      <polyline points="260,192 276,192 276,176" stroke={C.cyan} strokeWidth="1.5" strokeOpacity="0.4" fill="none" />

      {/* Outer radial dashes — atmosphere */}
      {Array.from({ length: 20 }, (_, i) => {
        const angle = (i * 18) * Math.PI / 180;
        const r1 = 85, r2 = 91;
        const cx = 140, cy = 98;
        return (
          <line
            key={i}
            x1={cx + r1 * Math.cos(angle)} y1={cy + r1 * Math.sin(angle)}
            x2={cx + r2 * Math.cos(angle)} y2={cy + r2 * Math.sin(angle)}
            stroke={`url(#${id}-g1)`} strokeWidth="1" strokeOpacity="0.25"
          />
        );
      })}

      {/* Eye vesica — outer */}
      <path
        d="M20,98 Q140,24 260,98 Q140,172 20,98 Z"
        stroke={`url(#${id}-g1)`}
        strokeWidth="1.8"
        fill="none"
        filter={`url(#${id}-glow)`}
      />
      {/* Eye vesica — inner soft fill */}
      <path
        d="M40,98 Q140,40 240,98 Q140,156 40,98 Z"
        fill={`url(#${id}-g2)`}
        strokeWidth="0"
      />

      {/* Iris rings */}
      <circle cx="140" cy="98" r="38" stroke={`url(#${id}-g1)`} strokeWidth="1.5" fill="none" filter={`url(#${id}-glow)`} />
      <circle cx="140" cy="98" r="29" stroke={`url(#${id}-g2)`} strokeWidth="0.8" fill="none" />
      <circle cx="140" cy="98" r="21" stroke={`url(#${id}-g1)`} strokeWidth="1.2" fill="none" filter={`url(#${id}-glow)`} />

      {/* Pupil */}
      <circle cx="140" cy="98" r="10" fill={`url(#${id}-pupil)`} filter={`url(#${id}-glow2)`} />
      <circle cx="140" cy="98" r="5"  fill={C.cyan} fillOpacity="0.6" />

      {/* Cross-hair ticks */}
      <line x1="140" y1="57"  x2="140" y2="63"  stroke={C.violet} strokeWidth="1" strokeOpacity="0.5" />
      <line x1="140" y1="133" x2="140" y2="139" stroke={C.violet} strokeWidth="1" strokeOpacity="0.5" />
      <line x1="99"  y1="98"  x2="105" y2="98"  stroke={C.violet} strokeWidth="1" strokeOpacity="0.5" />
      <line x1="175" y1="98"  x2="181" y2="98"  stroke={C.violet} strokeWidth="1" strokeOpacity="0.5" />
    </svg>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function ASAPage() {
  return (
    <div className="min-h-screen bg-[#050505]">

      {/* ── Hero — asymmetric layout, ASA app reference ────────────────── */}
      <section className="relative min-h-[100svh] flex flex-col justify-center pt-20 pb-16 overflow-hidden">

        {/* Environmental atmosphere */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Very faint HUD grid */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "linear-gradient(rgba(124,58,237,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.02) 1px, transparent 1px)",
              backgroundSize: "55px 55px",
            }}
          />
          {/* Central violet bloom — behind the eye */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(124,58,237,0.09) 0%, transparent 65%)" }}
          />
          {/* Cyan accent — top right */}
          <div
            className="absolute right-0 top-0 w-[400px] h-[400px] pointer-events-none"
            style={{ background: "radial-gradient(circle at 80% 20%, rgba(0,213,255,0.05) 0%, transparent 60%)" }}
          />
          {/* Magenta trace — bottom left */}
          <div
            className="absolute left-0 bottom-0 w-[350px] h-[350px] pointer-events-none"
            style={{ background: "radial-gradient(circle at 20% 80%, rgba(255,0,168,0.04) 0%, transparent 60%)" }}
          />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent" />
        </div>

        <div className="relative max-w-site mx-auto px-5 sm:px-6 lg:px-8 w-full">

          {/* System designation */}
          <div className="flex items-center gap-3 mb-10 lg:mb-12">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] glow-breathe" />
            <span className="sys-label tracking-[0.3em]" style={{ color: "rgba(139,92,246,0.7)" }}>
              ALTERED STATE ARCHIVE
            </span>
          </div>

          {/* Main layout — left traits | center sigil | right narrative */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-0">

            {/* Left — trait column (mirroring ASA app left panel) */}
            <div className="lg:w-56 mb-12 lg:mb-0 lg:pt-4">
              <div className="sys-label tracking-[0.28em] mb-6" style={{ color: "rgba(255,255,255,0.25)" }}>
                CHARACTERISTICS
              </div>
              <div className="space-y-0 divide-y divide-white/[0.05]">
                {traits.map((t) => (
                  <div key={t.id} className="py-3.5">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="sys-label" style={{ fontSize: "9px", color: "rgba(255,255,255,0.2)" }}>{t.id}</span>
                      <span
                        className="font-mono text-[11px] tracking-[0.18em] font-medium"
                        style={{ color: C.violetB + "CC" }}
                      >
                        {t.label}
                      </span>
                    </div>
                    <p className="font-mono text-[10px] text-white/28 tracking-[0.06em] pl-6">
                      {t.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Center — eye sigil (desktop: prominent; mobile: below heading) */}
            <div className="flex-1 flex flex-col items-center justify-start lg:items-center lg:justify-start lg:px-8 xl:px-16 mb-10 lg:mb-0">
              {/* ASA designation above sigil */}
              <h1
                className="font-bold tracking-tight text-center mb-8 lg:mb-10"
                style={{
                  fontSize: "clamp(3.5rem, 8vw, 6rem)",
                  letterSpacing: "-0.04em",
                  background: `linear-gradient(135deg, ${C.cyan} 0%, ${C.violet} 45%, ${C.magenta} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                ASA
              </h1>

              {/* Eye sigil — the centerpiece */}
              <div
                className="relative atm-drift"
                style={{ filter: `drop-shadow(0 0 30px rgba(124,58,237,0.35)) drop-shadow(0 0 60px rgba(124,58,237,0.15))` }}
              >
                <EyeSigil size={260} />
              </div>

              {/* Bottom motto */}
              <div className="mt-8 flex items-center gap-3">
                <div className="h-px w-8 bg-white/[0.08]" />
                <span className="sys-label tracking-[0.22em]" style={{ color: "rgba(255,255,255,0.2)" }}>
                  THE ALL KNOWING. THE EVER PRESENT.
                </span>
                <div className="h-px w-8 bg-white/[0.08]" />
              </div>
            </div>

            {/* Right — narrative block */}
            <div className="lg:w-64 xl:w-72 lg:pt-4">
              <div className="sys-label tracking-[0.28em] mb-6" style={{ color: "rgba(255,255,255,0.25)" }}>
                SYSTEM BRIEF
              </div>

              <div className="space-y-4 mb-8">
                <p className="text-[14px] text-white/50 leading-[1.8]">
                  ASA is the living archive of every altered state.
                  It remembers, learns, and sees beyond the noise.
                </p>
                <p className="text-[14px] text-white/38 leading-[1.8]">
                  A wise intelligence that helps practitioners return to truth — always here, always real, always for the people inside the environment.
                </p>
              </div>

              {/* Navigation arrows — mirroring app carousel */}
              <div className="flex items-center gap-3 mb-6">
                <span className="sys-label tracking-[0.2em]">ARCHIVE</span>
                <span className="font-mono text-[10px] text-white/20">↓</span>
              </div>

              {/* Status block */}
              <div
                className="tel-panel p-3.5"
                style={{ borderColor: `rgba(124,58,237,0.25)`, background: `rgba(124,58,237,0.04)` }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="sys-label" style={{ fontSize: "9px" }}>ASA STATUS</span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] glow-breathe" />
                    <span className="sys-label" style={{ fontSize: "9px", color: C.violetB + "99" }}>BETA</span>
                  </div>
                </div>
                <div className="sys-label" style={{ fontSize: "9px", color: "rgba(255,255,255,0.2)" }}>
                  KNOWLEDGE LAYER ACTIVE
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Archive Records ───────────────────────────────────────────── */}
      <section className="relative py-20 lg:py-28">
        <div className="max-w-site mx-auto px-5 sm:px-6 lg:px-8">

          {/* Section header */}
          <div className="flex items-center gap-5 mb-14">
            <span className="sys-label tracking-[0.32em]">ARCHIVE RECORDS</span>
            <div className="flex-1 h-px" style={{ background: `rgba(124,58,237,0.18)` }} />
            <span className="sys-label" style={{ fontSize: "9px" }}>06 / 06</span>
          </div>

          {/* Records grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2.5">
            {records.map((rec) => (
              <div
                key={rec.index}
                className="relative tel-panel p-5 overflow-hidden transition-all duration-300 hover:border-white/[0.1]"
                style={{
                  borderColor: rec.featured ? rec.accent + "35" : "rgba(255,255,255,0.055)",
                  background: rec.featured ? rec.accent + "06" : "rgba(255,255,255,0.018)",
                }}
              >
                {/* Corner bracket decoration */}
                <div
                  className="absolute top-0 left-0 w-3 h-3 pointer-events-none"
                  style={{
                    borderTop: `1px solid ${rec.accent}40`,
                    borderLeft: `1px solid ${rec.accent}40`,
                  }}
                />
                <div
                  className="absolute bottom-0 right-0 w-3 h-3 pointer-events-none"
                  style={{
                    borderBottom: `1px solid ${rec.accent}40`,
                    borderRight: `1px solid ${rec.accent}40`,
                  }}
                />

                {/* Featured glow */}
                {rec.featured && (
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: `radial-gradient(ellipse 80% 80% at 50% 50%, ${rec.accent}08 0%, transparent 70%)` }}
                  />
                )}

                <div className="relative">
                  {/* Top row */}
                  <div className="flex items-start justify-between mb-3.5">
                    <div className="flex items-center gap-2.5">
                      <span className="sys-label" style={{ fontSize: "9px", color: "rgba(255,255,255,0.18)" }}>
                        [{rec.index}]
                      </span>
                      <span
                        className="font-mono text-[11px] tracking-[0.14em] uppercase font-medium"
                        style={{ color: rec.accent + "CC" }}
                      >
                        {rec.title}
                      </span>
                    </div>
                    <span
                      className="font-mono text-[9px] tracking-[0.12em] uppercase px-2 py-0.5 flex-shrink-0"
                      style={{
                        color: rec.accent + "90",
                        border: `1px solid ${rec.accent}25`,
                        background: rec.accent + "0A",
                      }}
                    >
                      {rec.tag}
                    </span>
                  </div>

                  {/* Body */}
                  <p className="text-[13px] text-white/45 leading-[1.65]">
                    {rec.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Integration layer ─────────────────────────────────────────── */}
      <section className="relative py-16">
        <div className="max-w-site mx-auto px-5 sm:px-6 lg:px-8">
          <div className="h-px mb-14" style={{ background: `rgba(124,58,237,0.15)` }} />

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <div className="sys-label tracking-[0.3em] mb-2">INTEGRATED WITH</div>
              <div className="flex items-center gap-4">
                {["MATRIX", "SIV", "COOKED PILOT"].map((sys) => (
                  <span key={sys} className="font-mono text-[10px] tracking-[0.14em] text-white/30 uppercase">
                    {sys}
                  </span>
                ))}
              </div>
            </div>
            <Link
              href="/"
              className="inline-flex items-center gap-3 group"
            >
              <span className="font-mono text-[9px] tracking-[0.22em] uppercase text-white/25 group-hover:text-white/50 transition-colors">
                RETURN TO ECOSYSTEM
              </span>
              <span className="font-mono text-[9px] text-white/20 group-hover:text-white/40 transition-colors">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Bottom status strip — "THE ALL KNOWING. THE EVER PRESENT." ── */}
      <div
        className="relative py-3 overflow-hidden border-t"
        style={{ borderColor: "rgba(124,58,237,0.12)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.04) 50%, transparent)" }}
        />
        <div className="flex items-center justify-center gap-6">
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i} className="sys-label tracking-[0.22em] whitespace-nowrap" style={{ fontSize: "9px", color: "rgba(139,92,246,0.28)" }}>
              THE ALL KNOWING. THE EVER PRESENT.
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}
