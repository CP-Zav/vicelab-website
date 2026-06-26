import Link from "next/link";
import Image from "next/image";

const ecosystemLinks = [
  { href: "/vicelab", label: "VICELAB" },
  { href: "/cooked-pilot", label: "Cooked Pilot" },
  { href: "/vibeguard", label: "VibeGuard" },
  { href: "/matrix", label: "MATRIX" },
  { href: "/rumour-has-it", label: "Rumour Has It" },
  { href: "/siv", label: "SIV" },
  { href: "/asa", label: "ASA" },
  { href: "/help", label: "Where To Get Help" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.07] bg-[#06070B]">
      <div className="max-w-site mx-auto px-5 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
          <div className="space-y-4">
            <Link href="/" className="inline-flex rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vl-blue/70" aria-label="ViceLab home">
              <Image src="/logos/vicelab.svg" alt="ViceLab logo" width={232} height={282} className="block h-auto w-[120px] opacity-85" style={{ height: "auto" }} />
            </Link>
            <p className="max-w-[250px] text-[13px] leading-relaxed text-white/34">
              Nightlife safety intelligence. Non-preachy, field-aware, privacy-conscious systems for real environments.
            </p>
          </div>

          <nav className="flex flex-col gap-3" aria-label="Footer ecosystem navigation">
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/22">Ecosystem</p>
            {ecosystemLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-[13px] text-white/36 transition-colors hover:text-white/72 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vl-blue/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#06070B]">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="space-y-3">
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/22">Contact</p>
            <a href="mailto:hello@thevicelab.com" className="block text-[13px] text-white/36 transition-colors hover:text-white/72 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vl-blue/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#06070B]">
              hello@thevicelab.com
            </a>
            <p className="pt-2 text-[12px] leading-relaxed text-white/[0.22]">
              Research-informed · Peer-developed<br />
              Operational · Human · Calm
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/[0.05] pt-6 sm:flex-row sm:items-center">
          <p className="text-[12px] text-white/[0.20]">© {year} ViceLab. All rights reserved.</p>
          <p className="text-[12px] text-white/[0.20]">Trusted underground intelligence, not a rulebook.</p>
        </div>
      </div>
    </footer>
  );
}
