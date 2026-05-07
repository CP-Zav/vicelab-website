"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/vicelab",      label: "About" },
  { href: "/cooked-pilot", label: "Cooked Pilot" },
  { href: "/vibeguard",    label: "VibeGuard" },
  { href: "/siv",          label: "SIV" },
  { href: "/matrix",       label: "Matrix" },
  { href: "/asa",          label: "ASA" },
];

const SHOP_URL = "https://vicelab-collective.bigcartel.com/";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-white/[0.05] ${
        scrolled
          ? "bg-[#060606]/92 backdrop-blur-xl"
          : "bg-transparent"
      }`}
      style={scrolled ? { boxShadow: "0 1px 0 rgba(47,107,255,0.12)" } : undefined}
    >
      <div className="max-w-site mx-auto px-5 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-4">

        {/* Logo */}
        <Link
          href="/"
          className="shrink-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/20 rounded-sm"
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
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  relative px-3 py-2 font-mono text-[10px] tracking-[0.2em] uppercase transition-all duration-200
                  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/20
                  ${active
                    ? "text-white/85"
                    : "text-white/30 hover:text-white/65"
                  }
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

        {/* Right — system status + shop */}
        <div className="hidden md:flex items-center gap-5 shrink-0">
          {/* Live indicator */}
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9D] status-pulse" />
            <span className="sys-label" style={{ fontSize: "9px", letterSpacing: "0.18em" }}>LIVE</span>
          </div>
          {/* Shop */}
          <a
            href={SHOP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[9px] tracking-[0.2em] uppercase text-cp-pink/60 border border-cp-pink/18 px-3 py-1.5 hover:text-cp-pink hover:border-cp-pink/40 hover:bg-cp-pink/[0.05] transition-all duration-200"
          >
            Shop
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-9 h-9 text-white/35 hover:text-white/75 transition-all"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden bg-[#050505]/98 backdrop-blur-xl border-t border-white/[0.05] px-5 pb-8 pt-3 flex flex-col">
          {/* System init line */}
          <div className="flex items-center gap-2.5 py-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9D] status-pulse" />
            <span className="sys-label tracking-[0.22em]">VICELAB ECOSYSTEM · SYS ACTIVE</span>
          </div>
          <div className="h-px bg-white/[0.05] mb-3" />
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`py-3.5 font-mono text-[11px] tracking-[0.2em] uppercase border-b border-white/[0.04] transition-all ${
                  active ? "text-white/85" : "text-white/30 hover:text-white/70"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={SHOP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 py-3 font-mono text-[10px] tracking-[0.22em] uppercase text-cp-pink/60 border border-cp-pink/18 text-center hover:bg-cp-pink/[0.05] transition-all"
          >
            Shop Now
          </a>
        </div>
      )}
    </nav>
  );
}
