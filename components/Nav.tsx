"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/vicelab", label: "VICELAB" },
  { href: "/cooked-pilot", label: "Cooked Pilot" },
  { href: "/vibeguard", label: "VibeGuard" },
  { href: "/matrix", label: "MATRIX" },
  { href: "/siv", label: "SIV" },
  { href: "/altered-state-archives", label: "ASA" },
  { href: "/help", label: "Get Help" },
];

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#06070B]/92 backdrop-blur-xl border-b border-white/[0.06]" : "bg-transparent"}`}>
      <div className="max-w-site mx-auto px-5 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="shrink-0 rounded-sm text-[15px] font-black tracking-[0.22em] text-gradient-sig" aria-label="ViceLab home">
          VICELAB
        </Link>

        <div className="hidden md:flex items-center gap-1 flex-1 justify-center">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3 py-2 text-[11px] tracking-[0.08em] uppercase rounded-md transition-all duration-200 ${active ? "text-white bg-white/[0.07]" : "text-white/45 hover:text-white/90 hover:bg-white/[0.04]"}`}
              >
                {link.label}
                {active && <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-vl-blue" />}
              </Link>
            );
          })}
        </div>

        <button
          className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg text-white/55 hover:text-white hover:bg-white/[0.06] transition-all"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#06070B]/98 backdrop-blur-xl border-t border-white/[0.07] px-5 pb-6 pt-2 flex flex-col gap-0.5">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-3.5 text-[15px] tracking-[0.05em] uppercase rounded-xl transition-all ${active ? "text-white bg-white/[0.07]" : "text-white/45 hover:text-white hover:bg-white/[0.04]"}`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
