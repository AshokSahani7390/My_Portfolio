import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#a3a6ff",
        "primary-dim": "#6366f1",
        secondary: "#c180ff",
        tertiary: "#7de9ff",
        "tertiary-dim": "#1ad0eb",
        surface: "#020203",
        "surface-container": "#08080a",
        "surface-container-low": "#050507",
        "surface-container-high": "#0e0e11",
        "surface-container-highest": "#161619",
        "surface-container-lowest": "#000000",
        "surface-bright": "#1a1a1f",
        "surface-variant": "#121215",
        "on-surface": "#ffffff",
        "on-surface-variant": "#94a3b8",
        "on-primary": "#000000",
        "on-primary-fixed": "#000000",
        "on-primary-container": "#000000",
        "on-secondary": "#ffffff",
        "on-tertiary": "#000000",
        "on-tertiary-container": "#ffffff",
        error: "#fb7185",
        "outline-variant": "#1e293b",
        background: "#010102",
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        xs: "0.5rem",
        lg: "1.5rem",
        xl: "2rem",
        full: "9999px",
      },
      fontFamily: {
        headline: ["var(--font-space-grotesk)"],
        body: ["var(--font-inter)"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

export default config;
