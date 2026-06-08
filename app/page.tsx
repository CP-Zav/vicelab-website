import Link from "next/link";
import { Container, ArrowRight } from "@/components/ui";

/* ────────────────────────────────────────────────────────────────────────────
   HOMEPAGE B — v1.0
   Locked structure: Hero → Trust Strip → Ecosystem → Cooked Pilot App →
   Crew Code Quiz → Research & Insights → Final CTA → (global Footer)
   Brand separation enforced. Logos = locked /public assets, never redrawn.
   CP colour lock (brief): magenta #FF00E5 / #FF00C8 / #FF00B8 · cyan #00E5FF
──────────────────────────────────────────────────────────────────────────── */

const QUIZ_URL = "https://vicelab-brand-system.vercel.app/quiz";

type Eco = {
  name: string;
  role: string;
  blurb: string;
  href: string;
  cta: string;
  logo: string;
  alt: string;
  accent: string;
  line: string;
  panel: string;
};

const ecosystem: Eco[] = [
  {
    name: "VICELAB",
    role: "Signal",
    blurb: "The intelligence hub for safer events and better outcomes.",
    href: "/vicelab",
    cta: "Explore ViceLab",
    logo: "/logos/vicelab.svg",
    alt: "ViceLab waveform mark",
    accent: "#37B6FF",
    line: "linear-gradient(90deg, #2F6BFF 0%, #00E5FF 100%)",
    panel: "border-[#2F6BFF]/25 bg-[#2F6BFF]/[0.05] hover:border-[#2F6BFF]/60",
  },
  {
    name: "COOKED PILOT",
    role: "Navigation",
    blurb: "Guiding attendees and crews through nights that stretch to next light.",
    href: "/cooked-pilot",
    cta: "Explore Cooked Pilot",
    logo: "/logos/cookedpilot.png",
    alt: "Cooked Pilot orbital mark",
    accent: "#FF00E5",
    line: "linear-gradient(90deg, #FF00E5 0%, #FF00B8 55%, #00E5FF 100%)",
    panel: "border-[#FF00E5]/25 bg-[#FF00E5]/[0.05] hover:border-[#FF00E5]/60",
  },
  {
    name: "VIBEGUARD",
    role: "Monitoring",
    blurb: "Operational intelligence for safer events. Compliance. Response. Insight.",
    href: "/vibeguard",
    cta: "Explore VibeGuard",
    logo: "/logos/vibeguard.svg",
    alt: "VibeGuard shield mark",
    accent: "#00FFA3",
    line: "linear-gradient(90deg, #00FFA3 0%, #00D5FF 55%, #2F6BFF 100%)",
    panel: "border-[#00FFA3]/22 bg-[#00FFA3]/[0.045] hover:border-[#00FFA3]/55",
  },
  {
    name: "ASA",
    role: "Archive",
    blurb: "Documenting the unseen. Preserving the altered. Intelligence for impact.",
    href: "/asa",
    cta: "Explore ASA",
    logo: "/logos/asa.svg",
    alt: "ASA eye mark",
    accent: "#c084fc",
    line: "linear-gradient(90deg, #9b5de5 0%, #c084fc 55%, #06b6d4 100%)",
    panel: "border-[#9b5de5]/25 bg-[#9b5de5]/[0.05] hover:border-[#9b5de5]/60",
  },
];

const builtFor = [
  { label: "Attendees", color: "#00E5FF", icon: "people" },
  { label: "Organisers", color: "#FF00E5", icon: "stage" },
  { label: "Safety Teams", color: "#9b5de5", icon: "shield" },
  { label: "Researchers", color: "#00E5FF", icon: "scope" },
] as const;

const appScreens: { title: string; items: string[]; accent: string }[] = [
  { title: "Cooked Pilot", accent: "#FF00E5", items: ["What's the plan?", "Event Info", "Safety Tools", "Find Support", "Connect Crew"] },
  { title: "Safety Tools", accent: "#FF00E5", items: ["Substance Check", "Water Tracker", "Take a Break", "Need Help?"] },
];

const insights = [
  { tag: "Report", title: "Global Drug Survey 2024", blurb: "Key findings from 32 countries and 18,000+ participants.", cta: "Read Report", href: "#", graphic: "wave" },
  { tag: "Insight", title: "MDMA Purity Trends", blurb: "What the data tells us about purity and patterns.", cta: "Read Insight", href: "#", graphic: "matrix" },
  { tag: "Research", title: "Heat, Hydration & Harm", blurb: "New research on heat stress and risk in nightlife.", cta: "Read Research", href: "#", graphic: "radar" },
] as const;

function TrustIcon({ name, color }: { name: string; color: string }) {
  const common = { fill: "none", stroke: color, strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return (
    <svg width="42" height="42" viewBox="0 0 48 48" aria-hidden style={{ filter: `drop-shadow(0 0 10px ${color}55)` }}>
      {name === "people" && (<g {...common}><circle cx="18" cy="18" r="5" /><circle cx="31" cy="20" r="4" /><path d="M9 38c0-6 4-9 9-9s9 3 9 9M27 38c0-4 3-7 7-7s7 3 7 7" /></g>)}
      {name === "stage" && (<g {...common}><path d="M10 40V16l14-8 14 8v24" /><path d="M10 16h28M14 40V22M34 40V22M19 40V26h10v14" /></g>)}
      {name === "shield" && (<g {...common}><path d="M24 6l14 5v10c0 9-6 16-14 21-8-5-14-12-14-21V11z" /><path d="M18 24l4 4 9-9" /></g>)}
      {name === "scope" && (<g {...common}><path d="M28 8l8 8-13 13-8-8z" /><path d="M15 21l-4 4 8 8 4-4M12 40h24" /></g>)}
    </svg>
  );
}

function InsightGraphic({ kind, color }: { kind: string; color: string }) {
  if (kind === "wave")
    return (
      <svg viewBox="0 0 120 56" className="h-14 w-full" aria-hidden>
        <polyline points="2,28 14,28 20,10 28,46 36,18 44,38 52,28 66,28 72,14 80,42 88,24 96,30 118,28"
          fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  if (kind === "matrix")
    return (
      <svg viewBox="0 0 120 56" className="h-14 w-full" aria-hidden>
        {Array.from({ length: 5 }).map((_, r) =>
          Array.from({ length: 11 }).map((_, c) => (
            <circle key={`${r}-${c}`} cx={8 + c * 11} cy={8 + r * 10} r="2"
              fill={color} opacity={(r + c) % 3 === 0 ? 0.95 : 0.28} />
          ))
        )}
      </svg>
    );
  return (
    <svg viewBox="0 0 120 56" className="h-14 w-full" aria-hidden>
      <g fill="none" stroke={color} strokeWidth="1.2">
        <circle cx="60" cy="28" r="6" opacity="0.9" />
        <circle cx="60" cy="28" r="14" opacity="0.5" />
        <circle cx="60" cy="28" r="22" opacity="0.28" />
      </g>
      <circle cx="60" cy="28" r="2.5" fill={color} />
    </svg>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-hidden bg-canvas">
      <section className="relative pt-36 pb-28 sm:pt-44 lg:pt-52 lg:pb-36">
        <div className="absolute inset-0 bg-hero-radial-blue pointer-events-none" />
        <div className="absolute right-[6%] top-28 h-[34rem] w-[34rem] rounded-full bg-[#FF00E5]/[0.08] blur-[140px] pointer-events-none" />
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
            <div className="max-w-2xl">
              <h1 className="text-display-xl leading-[0.95] tracking-tight mb-8">
                Rewriting <span className="text-[#00E5FF]">Risk.</span>
                <br />
                Reclaiming <span className="text-[#FF00E5]">Choice.</span>
              </h1>
              <p className="text-[18px] sm:text-[20px] leading-relaxed text-white/64 mb-11 max-w-xl">
                Intelligence and tools for safer events, better decisions, and stronger communities.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="#ecosystem" className="inline-flex items-center gap-2 rounded-[14px] px-7 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-px hover:opacity-95" style={{ backgroundImage: "linear-gradient(135deg, #00E5FF 0%, #FF00E5 100%)" }}>
                  Explore the Ecosystem <ArrowRight />
                </Link>
                <Link href="#research" className="inline-flex items-center gap-2 rounded-[14px] border border-white/14 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-white/75 transition-all duration-200 hover:border-white/25 hover:bg-white/[0.06] hover:text-white">
                  Read the Research <ArrowRight />
                </Link>
              </div>
            </div>
            <div className="relative mx-auto flex aspect-square w-full max-w-[440px] items-center justify-center">
              <div className="absolute inset-x-8 bottom-2 h-24 rounded-full bg-[#FF00E5]/25 blur-[60px]" />
              <div className="absolute inset-x-16 bottom-6 h-16 rounded-full bg-[#00E5FF]/20 blur-[50px]" />
              <svg viewBox="0 0 400 400" className="relative w-full" role="img" aria-label="ViceLab signal waveform">
                <defs>
                  <linearGradient id="ringGrad" x1="0" y1="0" x2="400" y2="400" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#00E5FF" />
                    <stop offset="0.55" stopColor="#7C5CFF" />
                    <stop offset="1" stopColor="#FF00E5" />
                  </linearGradient>
                  <filter id="ringGlow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="4" result="b" />
                    <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                </defs>
                <circle cx="200" cy="200" r="150" fill="none" stroke="url(#ringGrad)" strokeWidth="3" filter="url(#ringGlow)" opacity="0.95" />
                <polyline points="70,200 120,200 145,150 175,262 205,118 232,238 258,200 330,200" fill="none" stroke="url(#ringGrad)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" filter="url(#ringGlow)" />
              </svg>
              <div className="absolute inset-0 rounded-full bg-[#00E5FF]/[0.04] blur-3xl animate-pulse" />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-white/[0.06] py-14">
        <Container>
          <p className="mb-9 text-center text-[11px] font-semibold uppercase tracking-[0.32em] text-white/40">Built For</p>
          <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-4 sm:gap-y-0 sm:divide-x sm:divide-white/[0.07]">
            {builtFor.map((b) => (
              <div key={b.label} className="flex flex-col items-center justify-center gap-3 px-4">
                <TrustIcon name={b.icon} color={b.color} />
                <span className="text-[15px] font-semibold text-white/85">{b.label}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="ecosystem" className="scroll-mt-24 py-24 lg:py-32">
        <Container>
          <div className="mb-14 text-center">
            <h2 className="text-display-md text-white mb-3">The ViceLab Ecosystem</h2>
            <p className="text-white/55">Four integrated systems.<span className="block sm:inline"> One connected mission.</span></p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ecosystem.map((s) => (
              <Link key={s.name} href={s.href} className={`group relative flex min-h-[330px] flex-col overflow-hidden rounded-[22px] border p-7 shadow-panel transition-all duration-300 hover:-translate-y-1 ${s.panel}`}>
                <span className="absolute inset-x-6 top-0 h-px opacity-80" style={{ backgroundImage: s.line }} />
                <span className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full opacity-0 blur-[60px] transition-opacity duration-300 group-hover:opacity-100" style={{ background: s.accent }} />
                <div className="relative flex h-24 items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.logo} alt={s.alt} width={96} height={96} className="object-contain" style={{ height: "68px", width: "auto" }} loading="lazy" decoding="async" />
                </div>
                <h3 className="mt-6 text-center text-lg font-black tracking-[0.06em] text-white">{s.name}</h3>
                <p className="mt-1 text-center text-[11px] font-bold uppercase tracking-[0.24em]" style={{ color: s.accent }}>{s.role}</p>
                <p className="mt-4 text-center text-[13.5px] leading-relaxed text-white/56">{s.blurb}</p>
                <span className="mt-auto flex items-center justify-center gap-1.5 pt-6 text-[13px] font-semibold" style={{ color: s.accent }}>
                  {s.cta}<ArrowRight className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden border-y border-white/[0.06]">
        <div className="absolute inset-0 bg-[#0b0410]" />
        <div className="absolute -left-1/4 top-0 h-full w-[60%] -skew-x-[24deg] bg-gradient-to-b from-[#00E5FF]/12 via-transparent to-transparent" />
        <div className="absolute left-1/4 top-0 h-full w-[55%] skew-x-[20deg] bg-gradient-to-b from-[#FF00E5]/14 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#FF00E5]/10 to-transparent" />
        <Container className="relative">
          <div className="grid items-center gap-14 py-20 lg:grid-cols-2 lg:py-24">
            <div>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-[#FF00E5]">Cooked Pilot App</p>
              <h2 className="text-display-lg leading-none text-white mb-5">Coming Soon</h2>
              <p className="max-w-md text-[17px] leading-relaxed text-white/64 mb-9">Your guide to nights that stretch to next light. Safety tools. Real-time info. Crew connection.</p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2.5 rounded-xl border border-white/14 bg-black/40 px-5 py-3 text-white/80">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M16.5 12.6c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.9-3.5.9s-1.8-.8-3-.8c-1.5 0-2.9.9-3.7 2.3-1.6 2.7-.4 6.8 1.1 9 .7 1.1 1.6 2.3 2.8 2.3 1.1 0 1.5-.7 2.9-.7s1.7.7 2.9.7 2-1.1 2.7-2.1c.9-1.2 1.2-2.4 1.2-2.5 0 0-2.3-.9-2.3-3.5zM14.3 5.3c.6-.8 1-1.8.9-2.9-.9.1-2 .6-2.6 1.3-.6.7-1.1 1.7-1 2.7 1 .1 2-.5 2.7-1.1z" /></svg>
                  <span className="flex flex-col leading-none"><span className="text-[9px] uppercase tracking-wide text-white/50">Download on the</span><span className="text-sm font-semibold">App Store</span></span>
                </span>
                <span className="inline-flex items-center gap-2.5 rounded-xl border border-white/14 bg-black/40 px-5 py-3 text-white/80">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M3.6 2.3c-.3.3-.5.7-.5 1.3v16.8c0 .6.2 1 .5 1.3l9-9.7zM14.1 12.7l2.6 2.6 3.4-1.9c1-.6 1-1.5 0-2.1l-3.4-1.9zM13.4 12L4.7 21.4c.4.1.9 0 1.4-.3l9.9-5.6zM6.1 2.9c-.5-.3-1-.4-1.4-.3L13.4 12l2.6-2.5z" /></svg>
                  <span className="flex flex-col leading-none"><span className="text-[9px] uppercase tracking-wide text-white/50">Get it on</span><span className="text-sm font-semibold">Google Play</span></span>
                </span>
              </div>
            </div>
            <div className="relative flex items-end justify-center gap-4">
              {appScreens.map((screen, i) => (
                <div key={screen.title} className={`w-40 shrink-0 rounded-[26px] border border-white/12 bg-[#0a0a0d] p-2.5 shadow-2xl sm:w-44 ${i === 0 ? "mb-8" : "mb-0"}`}>
                  <div className="rounded-[18px] border border-white/[0.06] bg-black/60 p-3.5">
                    <p className="mb-3 flex items-center gap-1.5 text-[11px] font-bold tracking-wide" style={{ color: screen.accent }}>
                      <span className="h-1.5 w-1.5 rounded-full" style={{ background: screen.accent }} />{screen.title}
                    </p>
                    <div className="space-y-2">
                      {screen.items.map((it) => (
                        <div key={it} className="flex items-center gap-2 rounded-lg border border-white/[0.07] bg-white/[0.03] px-2.5 py-2 text-[11px] text-white/72">
                          <span className="h-1 w-1 rounded-full" style={{ background: screen.accent }} />{it}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24 lg:py-28">
        <Container>
          <div className="relative overflow-hidden rounded-[28px] border border-[#FF00E5]/25 bg-[#FF00E5]/[0.05] p-8 shadow-panel sm:p-12">
            <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-[#FF00E5]/15 blur-[90px]" />
            <div className="relative flex flex-col items-center gap-10 lg:flex-row lg:gap-14">
              <div className="relative flex h-32 w-32 shrink-0 items-center justify-center">
                <svg viewBox="0 0 140 140" className="absolute inset-0" aria-hidden>
                  <g fill="none" stroke="#FF00E5" strokeWidth="1.2">
                    <circle cx="70" cy="70" r="64" opacity="0.25" />
                    <circle cx="70" cy="70" r="46" opacity="0.45" />
                    <circle cx="70" cy="70" r="28" opacity="0.7" />
                  </g>
                </svg>
                <span className="text-5xl font-black text-[#FF00E5]" style={{ textShadow: "0 0 24px rgba(255,0,229,0.55)" }}>?</span>
              </div>
              <div className="flex-1 text-center lg:text-left">
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.28em] text-[#FF00E5]">Crew Code Quiz</p>
                <h2 className="text-display-sm text-white mb-3">What side of you emerges when it gets weird?</h2>
                <p className="text-white/58 leading-relaxed">Discover your Crew Code and get personalised insights for safer nights and better choices.</p>
              </div>
              <a href={QUIZ_URL} className="inline-flex shrink-0 items-center gap-2 rounded-[14px] border border-[#FF00E5]/60 bg-[#FF00E5]/10 px-7 py-3.5 text-sm font-bold text-[#FF00E5] transition-all duration-200 hover:-translate-y-px hover:bg-[#FF00E5]/20">
                Take the Quiz <ArrowRight />
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section id="research" className="scroll-mt-24 border-t border-white/[0.06] py-24 lg:py-28">
        <Container>
          <div className="mb-12 flex items-end justify-between gap-4">
            <h2 className="text-[12px] font-semibold uppercase tracking-[0.26em] text-white/45">Research &amp; Insights</h2>
            <Link href="#research" className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#37B6FF] transition-colors hover:text-[#00E5FF]">
              View all insights <ArrowRight />
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {insights.map((p) => {
              const color = p.graphic === "wave" ? "#9b5de5" : p.graphic === "matrix" ? "#FF00E5" : "#37B6FF";
              return (
                <Link key={p.title} href={p.href} className="group rounded-[18px] border border-white/[0.07] bg-white/[0.025] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.04]">
                  <div className="mb-5 rounded-xl border border-white/[0.06] bg-black/30 p-4">
                    <InsightGraphic kind={p.graphic} color={color} />
                  </div>
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color }}>{p.tag}</p>
                  <h3 className="mb-2 text-[17px] font-bold leading-snug text-white">{p.title}</h3>
                  <p className="mb-5 text-[13.5px] leading-relaxed text-white/55">{p.blurb}</p>
                  <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold" style={{ color }}>
                    {p.cta} <ArrowRight className="transition-transform duration-200 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="pb-28">
        <Container>
          <div className="relative overflow-hidden rounded-[28px] border border-white/[0.08] p-10 sm:p-14" style={{ backgroundImage: "linear-gradient(120deg, rgba(47,107,255,0.16) 0%, rgba(0,229,255,0.10) 45%, rgba(255,0,229,0.14) 100%)" }}>
            <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div>
                <h2 className="text-display-md leading-tight text-white mb-4">
                  Together,<br />
                  <span className="text-[#00E5FF]">we create safer nights.</span>
                </h2>
                <p className="max-w-md text-white/64 leading-relaxed">Join the movement. Join the mission. Let&apos;s rewrite risk and reclaim choice.</p>
              </div>
              <a href={QUIZ_URL} className="inline-flex shrink-0 items-center gap-2 rounded-[14px] px-8 py-4 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-px hover:opacity-95" style={{ backgroundImage: "linear-gradient(135deg, #00E5FF 0%, #FF00E5 100%)" }}>
                Join the Crew <ArrowRight />
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
