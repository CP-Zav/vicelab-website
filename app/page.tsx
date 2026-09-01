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
    logo: "/brand/asa-primary-logo.png",
    alt: "ASA — Altered State Archives logo",
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
