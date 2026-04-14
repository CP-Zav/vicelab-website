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
        // ── Background system ──────────────────────────────────────────────
        bg: {
          DEFAULT:  "#07090D",   // deepest canvas
          soft:     "#0B0F17",   // section alt backgrounds
          panel:    "#101522",   // card/panel fill
          elevated: "#131A29",   // raised panel, modal bg
        },
        // ── Text / ink system ──────────────────────────────────────────────
        ink: {
          1: "#F5F7FB",
          2: "rgba(245,247,251,0.72)",
          3: "rgba(245,247,251,0.45)",
          4: "rgba(245,247,251,0.22)",
        },
        // ── Cooked Pilot — neon magenta ────────────────────────────────────
        cp: {
          DEFAULT: "#FF00A8",
          bright:  "#FF1FB8",
          soft:    "#FF4FC6",
        },
        // ── VibeGuard — cyan → green ───────────────────────────────────────
        vg: {
          cyan:  "#00D5FF",
          green: "#00FFA3",
          teal:  "#00E6C7",
        },
        // ── Signal / ViceLab — electric blue ──────────────────────────────
        sig: {
          blue: "#2F6BFF",
          cyan: "#00D5FF",
        },
        // ── Backward compat (do not add new usages) ────────────────────────
        canvas:     "#07090D",
        surface:    "#101522",
        border:     "rgba(255,255,255,0.08)",
        "vl-blue":  "#2F6BFF",
        "cp-pink":  "#FF00A8",
        "vg-teal":  "#00D5FF",
        "vl-green": "#00FFA3",
      },
      fontFamily: {
        sans: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Fira Code", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 8vw, 5.5rem)",     { lineHeight: "0.95", letterSpacing: "-0.03em",  fontWeight: "900" }],
        "display-lg": ["clamp(2.25rem, 5vw, 3.75rem)", { lineHeight: "1",    letterSpacing: "-0.025em", fontWeight: "800" }],
        "display-md": ["clamp(1.75rem, 3vw, 2.5rem)",  { lineHeight: "1.1",  letterSpacing: "-0.02em",  fontWeight: "700" }],
      },
      spacing: {
        "section": "clamp(4rem, 8vw, 7rem)",
      },
      maxWidth: {
        "site": "1120px",
      },
      borderRadius: {
        "card": "16px",
      },
      backgroundImage: {
        "grid-faint":       "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
        "hero-radial-blue": "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(47,107,255,0.22) 0%, transparent 60%)",
        "hero-radial-pink": "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(255,0,168,0.22) 0%, transparent 60%)",
        "hero-radial-teal": "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,213,255,0.20) 0%, rgba(0,255,163,0.06) 50%, transparent 65%)",
        "gradient-cp":      "linear-gradient(135deg, #FF00A8 0%, #FF4FC6 100%)",
        "gradient-vg":      "linear-gradient(135deg, #00D5FF 0%, #00FFA3 100%)",
        "gradient-sig":     "linear-gradient(135deg, #2F6BFF 0%, #00D5FF 100%)",
        "radial-cp":        "radial-gradient(ellipse 70% 55% at 50% 0%, rgba(255,0,168,0.16) 0%, transparent 70%)",
        "radial-vg":        "radial-gradient(ellipse 70% 55% at 50% 0%, rgba(0,213,255,0.14) 0%, rgba(0,255,163,0.05) 60%, transparent 80%)",
        "radial-sig":       "radial-gradient(ellipse 70% 55% at 50% 0%, rgba(47,107,255,0.16) 0%, transparent 70%)",
      },
      backgroundSize: {
        "grid": "40px 40px",
      },
      boxShadow: {
        "glow-cp":    "0 0 14px rgba(255,0,168,0.55), 0 0 36px rgba(255,0,168,0.18)",
        "glow-vg":    "0 0 14px rgba(0,213,255,0.50), 0 0 36px rgba(0,255,163,0.14)",
        "glow-sig":   "0 0 14px rgba(47,107,255,0.55), 0 0 36px rgba(47,107,255,0.18)",
        "panel":      "0 1px 3px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)",
        "inner-line": "inset 0 1px 0 rgba(255,255,255,0.06)",
      },
      transitionTimingFunction: {
        "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
