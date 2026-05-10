"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// ── System registry — canonical design bible colors ──────────────────────────
const SYSTEMS = [
  {
    href: "/cooked-pilot",
    index: "01",
    id: "COOKED-PILOT",
    label: "Cooked Pilot",
    role: "Peer harm reduction",
    accent: "#FF00A8",
    status: "LIVE",
    statusColor: "#00FF9D",
    pulse: true,
  },
  {
    href: "/vibeguard",
    index: "02",
    id: "VIBEGUARD",
    label: "VibeGuard",
    role: "Compliance intelligence",
    accent: "#00D5FF",
    status: "STAGING",
    statusColor: "#F59E0B",
    pulse: false,
  },
  {
    href: "/asa",
    index: "03",
    id: "ASA",
    label: "ASA",
    role: "Knowledge archive",
    accent: "#7C3AED",
    status: "BETA",
    statusColor: "#8B5CF6",
    pulse: false,
  },
  {
    href: "/matrix",
    index: "04",
    id: "MATRIX",
    label: "Matrix",
    role: "Computation engine",
    accent: "#4F46E5",
    status: "IN DEV",
    statusColor: "rgba(255,255,255,0.25)",
    pulse: false,
  },
  {
    href: "/siv",
    index: "05",
    id: "SIV",
    label: "SIV",
    role: "Signal infrastructure",
    accent: "#06B6D4",
    status: "IN DEV",
    statusColor: "rgba(255,255,255,0.25)",
    pulse: false,
  },
  {
    href: "/vicelab",
    index: "06",
    id: "VICELAB",
    label: "VICELAB",
    role: "Ecosystem infrastructure",
    accent: "#2F6BFF",
    status: "ACTIVE",
    statusColor: "#00FF9D",
    pulse: true,
  },
];

// Desktop nav links — condensed set
const DESKTOP_LINKS = [
  { href: "/vicelab",      label: "About" },
  { href: "/cooked-pilot", label: "Cooked Pilot" },
  { href: "/vibeguard",    label: "VibeGuard" },
  { href: "/siv",          label: "SIV" },
  { href: "/matrix",       label: "Matrix" },
  { href: "/asa",          label: "ASA" },
];

const SHOP_URL = "https://vicelab-collective.bigcartel.com/";

export default function Nav() {
  const [menuOpen, setMenuOpen]     = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const [animating, setAnimating]   = useState(false);
  const pathname                    = usePathname();
  const overlayRef                  = useRef<HTMLDivElement>(null);

  // Scroll listener
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close on route change
  useEffect(() => {
    if (menuOpen) handleClose();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Lock body scroll when overlay is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [menuOpen]);

  function handleOpen() {
    setAnimating(true);
    setMenuOpen(true);
    // Small delay so CSS transition picks up
    requestAnimationFrame(() => setAnimating(false));
  }

  function handleClose() {
    setAnimating(true);
    // Let exit animation play before unmounting
    setTimeout(() => {
      setMenuOpen(false);
      setAnimating(false);
    }, 220);
  }

  function handleToggle() {
    if (menuOpen) handleClose();
    else handleOpen();
  }

  return (
    <>
      {/* ── Nav bar ──────────────────────────────────────────────────────── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-white/[0.05] ${
          scrolled ? "bg-[#060606]/92 backdrop-blur-xl" : "bg-transparent"
        }`}
        style={scrolled ? { boxShadow: "0 1px 0 rgba(47,107,255,0.12)" } : undefined}
      >
        <div className="max-w-site mx-auto px-5 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-4">

          {/* Logo */}
          <Link
            href="/"
            className="shrink-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/20 rounded-sm relative z-10"
            aria-label="ViceLab home"
          >
            <Image
              src="/logos/vicelab.svg"
              alt="ViceLab"
              width={232}
              height={282}
              className="h-8 w-auto block opacity-70 hover:opacity-100 transition-opacity duration-300"
              style={{ width: "auto" }}
              priority
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-0 flex-1 justify-center">
            {DESKTOP_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    relative px-3 py-2 font-mono text-[10px] tracking-[0.2em] uppercase
                    transition-all duration-200 focus-visible:outline-none
                    focus-visible:ring-1 focus-visible:ring-white/20
                    ${active ? "text-white/85" : "text-white/30 hover:text-white/65"}
                  `}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-px bg-vl-blue opacity-70" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop right — live + shop */}
          <div className="hidden md:flex items-center gap-5 shrink-0">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9D] status-pulse" />
              <span className="sys-label" style={{ fontSize: "9px", letterSpacing: "0.18em" }}>LIVE</span>
            </div>
            <a
              href={SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[9px] tracking-[0.2em] uppercase text-cp-pink/60 border border-cp-pink/18 px-3 py-1.5 hover:text-cp-pink hover:border-cp-pink/40 hover:bg-cp-pink/[0.05] transition-all duration-200"
            >
              Shop
            </a>
          </div>

          {/* Mobile: live dot + hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-[#00FF9D] status-pulse" />
              <span className="sys-label" style={{ fontSize: "8px" }}>LIVE</span>
            </div>
            <button
              className="flex items-center justify-center w-10 h-10 -mr-1 text-white/40 hover:text-white/80 transition-colors duration-200 relative z-[60]"
              onClick={handleToggle}
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-overlay"
            >
              <svg
                className="w-5 h-5 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </nav>

      {/* ── Mobile Full-Screen Operational Overlay ───────────────────────── */}
      {menuOpen && (
        <div
          id="mobile-nav-overlay"
          ref={overlayRef}
          className={`
            md:hidden fixed inset-0 z-[55] flex flex-col
            transition-all duration-220
            ${animating ? "opacity-0 translate-y-[-8px]" : "opacity-100 translate-y-0"}
          `}
          style={{ background: "rgba(5,5,5,0.97)" }}
          aria-modal="true"
          role="dialog"
          aria-label="Navigation overlay"
        >
          {/* Environmental layer — faint HUD grid */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden
            style={{
              backgroundImage: "linear-gradient(rgba(47,107,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(47,107,255,0.018) 1px, transparent 1px)",
              backgroundSize: "55px 55px",
            }}
          />
          {/* Atmospheric accent — bottom fade */}
          <div
            className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
            aria-hidden
            style={{ background: "linear-gradient(to top, rgba(47,107,255,0.04), transparent)" }}
          />

          {/* Spacer for nav bar height */}
          <div className="h-14 shrink-0" />

          {/* System designation header */}
          <div className="relative px-5 pt-5 pb-4">
            <div className="flex items-center gap-2.5">
              <div className="h-px flex-1 bg-white/[0.06]" />
              <span className="sys-label tracking-[0.3em]" style={{ fontSize: "9px" }}>
                SYSTEM ACCESS
              </span>
              <div className="h-px flex-1 bg-white/[0.06]" />
            </div>
          </div>

          {/* System list — the core of the overlay */}
          <nav className="relative flex-1 overflow-y-auto px-5 pb-4" aria-label="System navigation">
            <div className="divide-y divide-white/[0.04]">
              {SYSTEMS.map((sys, idx) => {
                const active = pathname === sys.href;
                return (
                  <Link
                    key={sys.id}
                    href={sys.href}
                    className="group relative flex items-center gap-4 py-4 transition-all duration-200"
                    style={{
                      // Staggered entrance via inline style (works without animation library)
                      animationDelay: `${idx * 30}ms`,
                    }}
                  >
                    {/* Left accent bar — system color indicator */}
                    <div
                      className="absolute left-0 top-3 bottom-3 w-[2px] rounded-full transition-opacity duration-200"
                      style={{
                        background: sys.accent,
                        opacity: active ? 0.7 : 0,
                      }}
                    />
                    <div
                      className="absolute left-0 top-3 bottom-3 w-[2px] rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-200"
                      style={{ background: sys.accent }}
                    />

                    {/* Index */}
                    <span
                      className="shrink-0 font-mono text-[10px] tracking-[0.12em] pl-3 transition-colors duration-200"
                      style={{ color: active ? sys.accent + "99" : "rgba(255,255,255,0.18)" }}
                    >
                      {sys.index}
                    </span>

                    {/* System info */}
                    <div className="flex-1 min-w-0">
                      <div
                        className="font-mono text-[14px] tracking-[0.08em] uppercase font-medium transition-colors duration-200"
                        style={{
                          color: active ? sys.accent + "EE" : "rgba(255,255,255,0.55)",
                        }}
                      >
                        {sys.label}
                      </div>
                      <div className="sys-label mt-0.5" style={{ fontSize: "9px", color: "rgba(255,255,255,0.22)" }}>
                        {sys.role}
                      </div>
                    </div>

                    {/* Status */}
                    <div className="shrink-0 flex items-center gap-2 pr-1">
                      <span
                        className="sys-label"
                        style={{ fontSize: "9px", color: sys.statusColor + "80" }}
                      >
                        {sys.status}
                      </span>
                      <span
                        className={`w-1.5 h-1.5 rounded-full${sys.pulse ? " status-pulse" : ""}`}
                        style={{ backgroundColor: sys.statusColor }}
                      />
                    </div>
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Footer — live status + shop */}
          <div
            className="relative shrink-0 px-5 py-4 border-t border-white/[0.05]"
            style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9D] status-pulse" />
                <span className="sys-label tracking-[0.2em]" style={{ fontSize: "9px" }}>
                  VICELAB ECOSYSTEM · SYS ACTIVE
                </span>
              </div>
              <a
                href={SHOP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[9px] tracking-[0.2em] uppercase text-cp-pink/50 border border-cp-pink/18 px-3 py-1.5 hover:text-cp-pink hover:border-cp-pink/35 transition-all duration-200"
              >
                Shop
              </a>
            </div>
          </div>

        </div>
      )}
    </>
  );
}
