import Link from "next/link";

const productLinks = [
  { href: "/cooked-pilot", label: "Cooked Pilot" },
  { href: "/vibeguard", label: "VibeGuard" },
  { href: "/vicelab", label: "About" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.07] bg-[#080808]">
      <div className="max-w-site mx-auto px-6 lg:px-8 py-14 lg:py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div className="space-y-2">
            <Link href="/" className="inline-flex items-center gap-0.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vg-violet/60 rounded-sm">
              <span className="text-white font-bold text-base group-hover:text-white/80 transition-colors">Vice</span>
              <span className="text-vg-violet font-bold text-base">Lab</span>
            </Link>
            <p className="text-[13px] text-white/30 leading-relaxed max-w-xs">
              Safety technology for the night.
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-col sm:flex-row gap-y-3 gap-x-8" aria-label="Footer navigation">
            {productLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] text-white/35 hover:text-white/70 transition-colors focus-visible:outline-none focus-visible:text-white/70"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-[12px] text-white/20">
            © {year} ViceLab. All rights reserved.
          </p>
          <p className="text-[12px] text-white/20">
            Built for real-world festival conditions.
          </p>
        </div>
      </div>
    </footer>
  );
}
