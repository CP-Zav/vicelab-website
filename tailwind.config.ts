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
        "hud-grid":         "linear-gradient(rgba(47,107,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(47,107,255,0.025) 1px, transparent 1px)",
        // Canonical product gradients
        "gradient-cp":      "linear-gradient(135deg, #FF00A8 0%, #FF1FB8 100%)",
        "gradient-vg":      "linear-gradient(135deg, #00D5FF 0%, #00FFA3 100%)",
        "gradient-sig":     "linear-gradient(135deg, #2F6BFF 0%, #00D5FF 100%)",
        // Hero radials
        "hero-radial-blue": "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(47,107,255,0.22) 0%, transparent 60%)",
        "hero-radial-pink": "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(255,0,168,0.22) 0%, transparent 60%)",
        "hero-radial-teal": "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,213,255,0.20) 0%, rgba(0,255,163,0.06) 50%, transparent 65%)",
        // Legacy
        "hero-radial":      "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(167,139,250,0.15) 0%, transparent 60%)",
        "hero-radial-cyan": "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(34,211,238,0.12) 0%, transparent 60%)",
      },
      backgroundSize: {
        grid: "40px 40px",
        "hud-grid": "50px 50px",
      },
      // ── Product glow shadows ──────────────────────────────────────────
      boxShadow: {
        "panel":    "0 1px 8px rgba(0,0,0,0.30), 0 0 0 1px rgba(255,255,255,0.03)",
        "glow-cp":  "0 0 18px rgba(255,0,168,0.28), 0 0 60px rgba(255,0,168,0.10)",
        "glow-vg":  "0 0 18px rgba(0,213,255,0.28), 0 0 60px rgba(0,213,255,0.10)",
        "glow-sig": "0 0 18px rgba(47,107,255,0.28), 0 0 60px rgba(47,107,255,0.10)",
        // Operational system shadows
        "tel-border": "0 0 0 1px rgba(255,255,255,0.07), inset 0 1px 0 rgba(255,255,255,0.03)",
        "nav-bottom": "0 1px 0 rgba(47,107,255,0.15)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      // ── Operational animations ─────────────────────────────────────────
      animation: {
        "status-pulse":  "status-pulse 2.8s ease-in-out infinite",
        "atm-drift":     "atm-drift 12s ease-in-out infinite",
        "radar-scan":    "radar-scan 18s linear infinite",
        "radar-counter": "radar-counter 24s linear infinite",
        "glow-breathe":  "glow-breathe 5s ease-in-out infinite",
        "cp-float":      "cp-float 6s ease-in-out infinite",
        "cp-glow-pulse": "cp-glow-pulse 3s ease-in-out infinite",
      },
      keyframes: {
        "status-pulse": {
          "0%, 100%": { opacity: "1" },
          "50%":       { opacity: "0.2" },
        },
        "atm-drift": {
          "0%, 100%": { transform: "translateY(0px)",   opacity: "0.45" },
          "50%":       { transform: "translateY(-10px)", opacity: "0.75" },
        },
        "radar-scan": {
          from: { transform: "rotate(0deg)" },
          to:   { transform: "rotate(360deg)" },
        },
        "radar-counter": {
          from: { transform: "rotate(0deg)" },
          to:   { transform: "rotate(-360deg)" },
        },
        "glow-breathe": {
          "0%, 100%": { opacity: "0.35" },
          "50%":       { opacity: "0.85" },
        },
        "cp-float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":       { transform: "translateY(-8px)" },
        },
        "cp-glow-pulse": {
          "0%, 100%": { opacity: "0.6" },
          "50%":       { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
