import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // ── Custom screens — mobile-first with ultrawide ───────────────────────
    screens: {
      xs:  "390px",   // Large phone portrait
      sm:  "640px",   // Large phone landscape / small tablet
      md:  "768px",   // Tablet
      lg:  "1024px",  // Laptop
      xl:  "1280px",  // Desktop
      "2xl": "1536px", // Wide desktop / ultrawide
      // Safe height breakpoints for short-viewport laptops
      "sh": { raw: "(min-height: 700px)" },
      "lh": { raw: "(min-height: 900px)" },
    },
    extend: {
      // ── Color system — design bible locked v1.0 ────────────────────────
      colors: {
        // Foundation
        canvas:  "#080808",
        surface: "#0F0F0F",

        // VICELAB parent — full spectrum
        "vl-blue":    "#2F6BFF",
        "vl-cyan":    "#00D5FF",
        "vl-violet":  "#8B5CF6",
        "vl-magenta": "#FF00A8",

        // ASA — ultraviolet-forward
        "asa-uv":     "#7C3AED",
        "asa-violet": "#8B5CF6",
        "asa-mag":    "#FF00A8",
        "asa-cyan":   "#00D5FF",

        // Cooked Pilot — magenta-forward
        "cp-pink":  "#FF00A8",
        "cp-hot":   "#FF1FB8",

        // VibeGuard — cyan-forward (compliance)
        "vg-teal":  "#00D5FF",
        "vg-green": "#00FFA3",

        // Matrix — electric indigo (LOCKED: replaces all crimson/red)
        "mx-indigo": "#4F46E5",
        "mx-violet": "#7C3AED",
        "mx-peri":   "#818CF8",

        // SIV — acid cyan / signal teal (LOCKED: replaces all amber/gold)
        "siv-cyan":   "#00D5FF",
        "siv-teal":   "#06B6D4",
        "siv-signal": "#00FFA3",

        // Legacy — do not extend, phase out when possible
        "vl-green":  "#00FFA3",
        "cp-cyan":   "#22d3ee",
        "vg-violet": "#a78bfa",
      },

      // ── Font families ──────────────────────────────────────────────────
      fontFamily: {
        sans: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Fira Code", "monospace"],
      },

      // ── Fluid type scale — clamp()-based ───────────────────────────────
      fontSize: {
        // System display sizes — product hero context
        "system-2xl": ["clamp(3rem, 9vw, 6rem)",      { lineHeight: "0.9",  letterSpacing: "-0.04em", fontWeight: "900" }],
        "display-xl": ["clamp(2.25rem, 7vw, 4.75rem)", { lineHeight: "0.93", letterSpacing: "-0.03em", fontWeight: "900" }],
        "display-lg": ["clamp(1.875rem, 5vw, 3.5rem)", { lineHeight: "1.0",  letterSpacing: "-0.025em",fontWeight: "800" }],
        "display-md": ["clamp(1.5rem, 3.5vw, 2.5rem)", { lineHeight: "1.1",  letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-sm": ["clamp(1.25rem, 2.5vw, 2rem)",  { lineHeight: "1.15", letterSpacing: "-0.015em",fontWeight: "700" }],
        // Operational body
        "body-op":    ["clamp(13px, 1.5vw, 15px)",     { lineHeight: "1.78" }],
        // HUD metadata
        "hud-meta":   ["clamp(10px, 1.1vw, 12px)",     { lineHeight: "1.5",  letterSpacing: "0.08em" }],
      },

      // ── Spacing — section token ────────────────────────────────────────
      spacing: {
        "section":    "clamp(4rem, 8vw, 7rem)",
        "section-sm": "clamp(2.5rem, 5vw, 4rem)",
        "18":  "4.5rem",
        "22":  "5.5rem",
        "26":  "6.5rem",
      },

      // ── Max widths ─────────────────────────────────────────────────────
      maxWidth: {
        site:    "1120px",
        narrow:  "720px",
        reading: "640px",
      },

      // ── Border radius — operational (no rounding on panels) ───────────
      borderRadius: {
        card:  "4px",   // max for tel-panel variants — operational, not friendly
        tag:   "2px",   // system tags / badges
        pill:  "9999px",// dots, pills
      },

      // ── Transition timing ──────────────────────────────────────────────
      transitionDuration: {
        "220": "220ms",
        "350": "350ms",
        "400": "400ms",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
        op:     "cubic-bezier(0.3, 0, 0.15, 1)",   // operational — slightly overshot
      },

      // ── Background images ──────────────────────────────────────────────
      backgroundImage: {
        // HUD grids — per system
        "hud-grid":       "linear-gradient(rgba(47,107,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(47,107,255,0.025) 1px, transparent 1px)",
        "hud-grid-asa":   "linear-gradient(rgba(124,58,237,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.022) 1px, transparent 1px)",
        "hud-grid-mx":    "linear-gradient(rgba(79,70,229,0.025) 1px, transparent 1px),  linear-gradient(90deg, rgba(79,70,229,0.025) 1px, transparent 1px)",
        "hud-grid-siv":   "linear-gradient(rgba(6,182,212,0.025) 1px, transparent 1px),  linear-gradient(90deg, rgba(6,182,212,0.025) 1px, transparent 1px)",
        "hud-grid-vg":    "linear-gradient(rgba(0,213,255,0.022) 1px, transparent 1px),  linear-gradient(90deg, rgba(0,213,255,0.022) 1px, transparent 1px)",
        "hud-grid-cp":    "linear-gradient(rgba(255,0,168,0.020) 1px, transparent 1px),  linear-gradient(90deg, rgba(255,0,168,0.020) 1px, transparent 1px)",
        "grid-faint":     "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
        // Product gradients
        "gradient-cp":    "linear-gradient(135deg, #FF00A8 0%, #FF1FB8 100%)",
        "gradient-vg":    "linear-gradient(135deg, #00D5FF 0%, #00FFA3 100%)",
        "gradient-sig":   "linear-gradient(135deg, #2F6BFF 0%, #00D5FF 100%)",
        "gradient-asa":   "linear-gradient(135deg, #00D5FF 0%, #7C3AED 50%, #FF00A8 100%)",
        "gradient-mx":    "linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #818CF8 100%)",
        "gradient-siv":   "linear-gradient(135deg, #00D5FF 0%, #06B6D4 50%, #00FFA3 100%)",
        "gradient-vl":    "linear-gradient(135deg, #2F6BFF 0%, #00D5FF 30%, #8B5CF6 65%, #FF00A8 100%)",
        // Hero radials
        "hero-radial-blue": "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(47,107,255,0.22) 0%, transparent 60%)",
        "hero-radial-pink": "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(255,0,168,0.22) 0%, transparent 60%)",
        "hero-radial-teal": "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,213,255,0.20) 0%, rgba(0,255,163,0.06) 50%, transparent 65%)",
        "hero-radial-uv":   "radial-gradient(ellipse 70% 55% at 50% -5%, rgba(124,58,237,0.18) 0%, transparent 60%)",
        "hero-radial-mx":   "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(79,70,229,0.20) 0%, transparent 60%)",
        "hero-radial-siv":  "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(6,182,212,0.20) 0%, transparent 60%)",
        // Legacy
        "hero-radial":      "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(167,139,250,0.15) 0%, transparent 60%)",
        "hero-radial-cyan": "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(34,211,238,0.12) 0%, transparent 60%)",
      },

      // ── Background sizes ───────────────────────────────────────────────
      backgroundSize: {
        "grid-dense": "40px 40px",   // Matrix — computational
        "grid-std":   "50px 50px",   // Standard
        "grid-loose": "60px 60px",   // Spacious sections
        "hud-grid":   "50px 50px",
        "grid":       "40px 40px",
      },

      // ── Box shadows — per-system glows ────────────────────────────────
      boxShadow: {
        // Operational panel
        "panel":       "0 1px 8px rgba(0,0,0,0.30), 0 0 0 1px rgba(255,255,255,0.03)",
        "tel-border":  "0 0 0 1px rgba(255,255,255,0.07), inset 0 1px 0 rgba(255,255,255,0.03)",
        // Desktop glow intensities
        "glow-cp":     "0 0 18px rgba(255,0,168,0.28),  0 0 60px rgba(255,0,168,0.10)",
        "glow-vg":     "0 0 18px rgba(0,213,255,0.28),  0 0 60px rgba(0,213,255,0.10)",
        "glow-sig":    "0 0 18px rgba(47,107,255,0.28), 0 0 60px rgba(47,107,255,0.10)",
        "glow-asa":    "0 0 22px rgba(124,58,237,0.28), 0 0 60px rgba(124,58,237,0.10)",
        "glow-mx":     "0 0 18px rgba(79,70,229,0.28),  0 0 60px rgba(79,70,229,0.10)",
        "glow-siv":    "0 0 18px rgba(6,182,212,0.32),  0 0 60px rgba(6,182,212,0.12)",
        // Nav
        "nav-bottom":  "0 1px 0 rgba(47,107,255,0.15)",
      },

      // ── Animations — operational timing tokens ─────────────────────────
      animation: {
        "status-pulse":  "status-pulse 2.8s ease-in-out infinite",
        "atm-drift":     "atm-drift 12s ease-in-out infinite",
        "radar-scan":    "radar-scan 18s linear infinite",
        "radar-counter": "radar-counter 24s linear infinite",
        "glow-breathe":  "glow-breathe 5s ease-in-out infinite",
        "signal-pulse":  "signal-pulse 1.8s ease-out infinite",
        "node-activate": "node-activate 4s ease-in-out infinite",
        "cp-float":      "cp-float 6s ease-in-out infinite",
        "cp-glow-pulse": "cp-glow-pulse 3s ease-in-out infinite",
        "overlay-in":    "overlay-in 220ms cubic-bezier(0.4, 0, 0.2, 1) forwards",
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
        "signal-pulse": {
          "0%":   { transform: "scale(1)",   opacity: "1"   },
          "40%":  { transform: "scale(1.6)", opacity: "0"   },
          "100%": { transform: "scale(1.6)", opacity: "0"   },
        },
        "node-activate": {
          "0%, 100%": { opacity: "0.2" },
          "50%":       { opacity: "0.6" },
        },
        "cp-float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":       { transform: "translateY(-8px)" },
        },
        "cp-glow-pulse": {
          "0%, 100%": { opacity: "0.6" },
          "50%":       { opacity: "1" },
        },
        "overlay-in": {
          from: { opacity: "0", transform: "translateY(-6px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
