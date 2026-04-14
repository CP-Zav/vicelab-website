// Shared UI primitives — server-safe (no hooks)
// Token-aligned: cp / vg / sig namespaces

import Link from "next/link";
import type { ReactNode } from "react";

// ── Container ────────────────────────────────────────────────────────────────
export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`max-w-site mx-auto px-5 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

// ── Section ──────────────────────────────────────────────────────────────────
export function Section({
  children,
  className = "",
  border = false,
}: {
  children: ReactNode;
  className?: string;
  border?: boolean;
}) {
  return (
    <section className={`py-section ${border ? "border-t border-white/[0.07]" : ""} ${className}`}>
      {children}
    </section>
  );
}

// ── Eyebrow ───────────────────────────────────────────────────────────────────
export function Eyebrow({
  children,
  color = "blue",
}: {
  children: ReactNode;
  color?: "blue" | "pink" | "teal" | "green" | "muted";
}) {
  const colorMap: Record<string, string> = {
    blue:  "text-vl-blue",
    pink:  "text-cp-pink",
    teal:  "text-vg-teal",
    green: "text-vl-green",
    muted: "text-white/40",
  };
  return (
    <p className={`text-xs font-semibold tracking-[0.18em] uppercase mb-5 ${colorMap[color] ?? "text-vl-blue"}`}>
      {children}
    </p>
  );
}

// ── Section Header ────────────────────────────────────────────────────────────
export function SectionHeader({ children }: { children: ReactNode }) {
  return (
    <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/30 mb-8">
      {children}
    </p>
  );
}

// ── Card ─────────────────────────────────────────────────────────────────────
export function Card({
  children,
  className = "",
  accent,
}: {
  children: ReactNode;
  className?: string;
  accent?: "blue" | "pink" | "teal" | "green";
}) {
  const accentBorder: Record<string, string> = {
    blue:  "hover:border-vl-blue/25",
    pink:  "hover:border-cp-pink/25",
    teal:  "hover:border-vg-teal/25",
    green: "hover:border-vl-green/25",
  };
  return (
    <div
      className={`
        relative rounded-card border border-white/[0.07] bg-white/[0.03]
        p-5 sm:p-6 transition-all duration-300 shadow-panel
        hover:bg-white/[0.055] hover:border-white/[0.12]
        ${accent ? accentBorder[accent] : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

// ── Primary Button ────────────────────────────────────────────────────────────
export function ButtonPrimary({
  href,
  children,
  gradient,
  className = "",
}: {
  href: string;
  children: ReactNode;
  gradient?: string;
  className?: string;
}) {
  const bg = gradient || "bg-gradient-sig";
  const isExternal = href.startsWith("mailto:") || href.startsWith("http");
  const cls = `
    inline-flex items-center gap-2 px-6 py-3 rounded-[10px] text-sm font-semibold
    text-white transition-all duration-200 ease-smooth
    hover:opacity-90 hover:-translate-y-px active:translate-y-0
    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40
    ${bg} ${className}
  `;
  if (isExternal) return <a href={href} className={cls}>{children}</a>;
  return <Link href={href} className={cls}>{children}</Link>;
}

// ── Ghost Button ──────────────────────────────────────────────────────────────
export function ButtonGhost({ href, children }: { href: string; children: ReactNode }) {
  const isExternal = href.startsWith("mailto:") || href.startsWith("http");
  const cls = `
    inline-flex items-center gap-2 px-6 py-3 rounded-[10px] text-sm font-semibold
    text-white/60 border border-white/[0.12] transition-all duration-200 ease-smooth
    hover:text-white hover:border-white/25 hover:bg-white/[0.04] hover:-translate-y-px active:translate-y-0
    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40
  `;
  if (isExternal) return <a href={href} className={cls}>{children}</a>;
  return <Link href={href} className={cls}>{children}</Link>;
}

// ── Status Badge ──────────────────────────────────────────────────────────────
export function Badge({
  children,
  variant = "blue",
}: {
  children: ReactNode;
  variant?: "blue" | "pink" | "teal" | "live" | "green";
}) {
  const styles: Record<string, string> = {
    blue:  "bg-vl-blue/[0.12]  text-vl-blue  border-vl-blue/[0.22]",
    pink:  "bg-cp-pink/[0.12]  text-cp-pink  border-cp-pink/[0.22]",
    teal:  "bg-vg-teal/[0.12]  text-vg-teal  border-vg-teal/[0.22]",
    live:  "bg-cp-pink/[0.12]  text-cp-pink  border-cp-pink/[0.22]",
    green: "bg-vl-green/[0.12] text-vl-green border-vl-green/[0.22]",
  };
  const dot = variant === "live";
  return (
    <span className={`inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wide px-2.5 py-1 rounded-full border ${styles[variant] ?? styles.blue}`}>
      {dot && (
        <span className="relative flex h-1.5 w-1.5 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cp-pink opacity-75" />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cp-pink" />
        </span>
      )}
      {children}
    </span>
  );
}

// ── Feature Card ─────────────────────────────────────────────────────────────
export function FeatureCard({
  title,
  body,
  accent = "blue",
}: {
  title: string;
  body: string;
  accent?: "blue" | "pink" | "teal" | "green";
}) {
  const accentColor: Record<string, string> = {
    blue:  "text-vl-blue",
    pink:  "text-cp-pink",
    teal:  "text-vg-teal",
    green: "text-vl-green",
  };
  return (
    <Card accent={accent}>
      <h3 className={`text-sm font-semibold mb-2.5 ${accentColor[accent] ?? "text-vl-blue"}`}>{title}</h3>
      <p className="text-white/45 text-sm leading-[1.75]">{body}</p>
    </Card>
  );
}

// ── Arrow Icon ────────────────────────────────────────────────────────────────
export function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg className={`w-4 h-4 shrink-0 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}
