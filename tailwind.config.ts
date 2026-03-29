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
        canvas: "#080808",
        surface: "#0f0f0f",
        border: "rgba(255,255,255,0.08)",
        // Brand accents
        "vl-green": "#39d98a",
        "cp-cyan": "#22d3ee",
        "vg-violet": "#a78bfa",
      },
      fontFamily: {
        sans: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Fira Code", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 8vw, 5.5rem)", { lineHeight: "0.95", letterSpacing: "-0.03em", fontWeight: "900" }],
        "display-lg": ["clamp(2.25rem, 5vw, 3.75rem)", { lineHeight: "1", letterSpacing: "-0.025em", fontWeight: "800" }],
        "display-md": ["clamp(1.75rem, 3vw, 2.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
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
        "grid-faint": "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
        "hero-radial": "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(167,139,250,0.15) 0%, transparent 60%)",
        "hero-radial-cyan": "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(34,211,238,0.12) 0%, transparent 60%)",
      },
      backgroundSize: {
        "grid": "40px 40px",
      },
      transitionTimingFunction: {
        "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
