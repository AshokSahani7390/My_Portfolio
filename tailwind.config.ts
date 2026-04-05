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
        "primary-dim": "#6063ee",
        secondary: "#c180ff",
        tertiary: "#7de9ff",
        "tertiary-dim": "#1ad0eb",
        surface: "#0e0e0e",
        "surface-container": "#1a1919",
        "surface-container-low": "#131313",
        "surface-container-high": "#201f1f",
        "surface-container-highest": "#262626",
        "surface-container-lowest": "#000000",
        "surface-bright": "#2c2c2c",
        "surface-variant": "#262626",
        "on-surface": "#ffffff",
        "on-surface-variant": "#adaaaa",
        "on-primary": "#0f00a4",
        "on-primary-fixed": "#000000",
        "on-primary-container": "#0a0081",
        "on-secondary": "#33005b",
        "on-tertiary": "#005561",
        "on-tertiary-container": "#004b56",
        error: "#ff6e84",
        "outline-variant": "#494847",
        background: "#0e0e0e",
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
      fontFamily: {
        headline: ["var(--font-space-grotesk)"],
        body: ["var(--font-inter)"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
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
