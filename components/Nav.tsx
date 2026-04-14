"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/vicelab",      label: "About" },
  { href: "/cooked-pilot", label: "Cooked Pilot" },
  { href: "/vibeguard",    label: "VibeGuard" },
  { href: "/signal",       label: "Signal" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#07090D]/92 backdrop-blur-xl border-b border-white/[0.07]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-site mx-auto px-5 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">

        {/* Logo */}
        <Link
          href="/"
          className="shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vl-blue/60 rounded-sm"
          aria-label="ViceLab home"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logos/vicelab.png"
            alt="ViceLab"
            className="h-8 w-auto block"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-0.5 flex-1 justify-center">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  relative px-3.5 py-2 text-[13px] font-medium rounded-md transition-all duration-200
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vl-blue/60
                  ${active
                    ? "text-white bg-white/[0.07]"
                    : "text-white/45 hover:text-white/90 hover:bg-white/[0.04]"
                  }
                `}
              >
                {link.label}
                {active && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-vl-blue" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop Shop CTA */}
        <a
          href={SHOP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex shrink-0 items-center gap-1.5 px-4 py-2 rounded-md text-[12px] font-semibold tracking-[0.08em] uppercase text-cp-pink border border-cp-pink/25 hover:bg-cp-pink/[0.08] hover:border-cp-pink/45 transition-all duration-200"
        >
          Shop
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg text-white/55 hover:text-white hover:bg-white/[0.06] transition-all"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
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

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden bg-[#07090D]/98 backdrop-blur-xl border-t border-white/[0.07] px-5 pb-6 pt-2 flex flex-col gap-0.5">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-3.5 text-[15px] font-medium rounded-xl transition-all ${
                  active
                    ? "text-white bg-white/[0.07]"
                    : "text-white/45 hover:text-white hover:bg-white/[0.04]"
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
            className="mt-3 px-3 py-3.5 text-[13px] font-semibold text-cp-pink border border-cp-pink/20 rounded-xl hover:bg-cp-pink/[0.08] transition-all text-center tracking-wide uppercase"
          >
            Shop Now
          </a>
        </div>
      )}
    </nav>
  );
}
