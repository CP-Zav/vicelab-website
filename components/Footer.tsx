import Link from "next/link";

const SHOP_URL = "https://vicelab-collective.bigcartel.com/";
const EXPLORE_URL = "https://cp-zav.github.io/Vicelab-site/";

const productLinks = [
  { href: "/cooked-pilot", label: "Cooked Pilot" },
  { href: "/vibeguard", label: "VibeGuard" },
  { href: "/signal", label: "Signal" },
  { href: "/vicelab", label: "About" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.07] bg-[#080808]">
      <div className="max-w-site mx-auto px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-0.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vl-blue/60 rounded-sm"
            >
              <span className="text-white font-bold text-base group-hover:text-white/80 transition-colors">Vice</span>
              <span className="text-vl-blue font-bold text-base">Lab</span>
            </Link>
            <p className="text-[13px] text-white/30 leading-relaxed max-w-[220px]">
              Festival safety intelligence.<br />
              Non-preachy. Field-tested. Real.
            </p>
            <a
              href={SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[12px] font-semibold tracking-[0.08em] uppercase text-cp-pink hover:text-cp-pink/80 transition-colors"
            >
              Shop the Collection →
            </a>
          </div>

          {/* Pages */}
          <nav className="flex flex-col gap-3" aria-label="Site navigation">
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-white/20 mb-1">Explore</p>
            {productLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] text-white/35 hover:text-white/70 transition-colors focus-visible:outline-none focus-visible:text-white/70"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={EXPLORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-white/25 hover:text-white/50 transition-colors"
            >
              Full Site ↗
            </a>
          </nav>

          {/* Contact */}
          <div className="space-y-3">
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-white/20 mb-1">Contact</p>
            <a
              href="mailto:hello@thevicelab.com"
              className="text-[13px] text-white/35 hover:text-white/70 transition-colors block"
            >
              hello@thevicelab.com
            </a>
            <p className="text-[12px] text-white/20 leading-relaxed pt-2">
              Research-informed · Peer-developed<br />
              Non-preachy · Privacy-conscious
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-[12px] text-white/20">
            © {year} ViceLab. All rights reserved.
          </p>
          <p className="text-[12px] text-white/20">
            This is not merch. This is field intelligence.
          </p>
        </div>
      </div>
    </footer>
  );
}
