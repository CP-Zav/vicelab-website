import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base
        canvas:  "#080808",
        surface: "#0f0f0f",
        border:  "rgba(255,255,255,0.08)",
        // ── Brand tokens — canonical (electric palette) ──────────────────
        "vl-blue":  "#2F6BFF",   // ViceLab / Signal — electric blue
        "cp-pink":  "#FF00A8",   // Cooked Pilot — neon magenta
        "vg-teal":  "#00D5FF",   // VibeGuard — cyan (gradient lead)
        "vl-green": "#00FFA3",   // VibeGuard gradient end + live dot
        // Legacy — only kept until all pages corrected
        "cp-cyan":   "#22d3ee",
        "vg-violet": "#a78bfa",
      },
      fontFamily: {
        sans: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Fira Code", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 8vw, 5.5rem)",    { lineHeight: "0.95", letterSpacing: "-0.03em",  fontWeight: "900" }],
        "display-lg": ["clamp(2.25rem, 5vw, 3.75rem)", { lineHeight: "1",    letterSpacing: "-0.025em", fontWeight: "800" }],
        "display-md": ["clamp(1.75rem, 3vw, 2.5rem)",  { lineHeight: "1.1",  letterSpacing: "-0.02em",  fontWeight: "700" }],
      },
      spacing: {
        section: "clamp(4rem, 8vw, 7rem)",
      },
      maxWidth: {
        site: "1120px",
      },
      borderRadius: {
        card: "16px",
      },
      // ── Product gradient backgrounds ──────────────────────────────────
      backgroundImage: {
        "grid-faint":       "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
        // Canonical product gradients — use via bg-gradient-{product}
        "gradient-cp":      "linear-gradient(135deg, #FF00A8 0%, #FF1FB8 100%)",          // Cooked Pilot: neon magenta
        "gradient-vg":      "linear-gradient(135deg, #00D5FF 0%, #00FFA3 100%)",          // VibeGuard: cyan → neon green
        "gradient-sig":     "linear-gradient(135deg, #2F6BFF 0%, #00D5FF 100%)",          // Signal / ViceLab: electric blue → cyan
        // Hero radials — v2: tighter, more saturated
        "hero-radial-blue": "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(47,107,255,0.22) 0%, transparent 60%)",
        "hero-radial-pink": "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(255,0,168,0.22) 0%, transparent 60%)",
        "hero-radial-teal": "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,213,255,0.20) 0%, rgba(0,255,163,0.06) 50%, transparent 65%)",
        // Legacy
        "hero-radial":      "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(167,139,250,0.15) 0%, transparent 60%)",
        "hero-radial-cyan": "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(34,211,238,0.12) 0%, transparent 60%)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      // ── Product glow shadows — use via shadow-glow-{product} ─────────
      boxShadow: {
        "panel":    "0 1px 8px rgba(0,0,0,0.30), 0 0 0 1px rgba(255,255,255,0.03)",
        "glow-cp":  "0 0 18px rgba(255,0,168,0.28), 0 0 60px rgba(255,0,168,0.10)",
        "glow-vg":  "0 0 18px rgba(0,213,255,0.28), 0 0 60px rgba(0,213,255,0.10)",
        "glow-sig": "0 0 18px rgba(47,107,255,0.28), 0 0 60px rgba(47,107,255,0.10)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
