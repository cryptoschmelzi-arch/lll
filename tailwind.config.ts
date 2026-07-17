import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Stelling brand (sampled from logo)
        brand: {
          red: "#E31E13",
          "red-600": "#C81810",
          "red-700": "#A81109",
          orange: "#F5A800",
          "orange-400": "#FBB929",
        },
        ink: {
          DEFAULT: "#111827",
          soft: "#334155",
          muted: "#64748B",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          soft: "#F7F9FC",
          softer: "#EEF2F7",
        },
        energy: "#38BDF8",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1240px",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(16,24,40,0.04), 0 8px 24px rgba(16,24,40,0.06)",
        lift: "0 2px 4px rgba(16,24,40,0.05), 0 18px 48px rgba(16,24,40,0.10)",
        glow: "0 0 0 1px rgba(227,30,19,0.08), 0 20px 60px rgba(227,30,19,0.14)",
      },
      keyframes: {
        "energy-dash": {
          to: { strokeDashoffset: "0" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
