import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#b3131b",
          dark: "#8f0d14",
          light: "#e62b36",
          soft: "rgba(179, 19, 27, 0.08)",
        },
        secondary: {
          DEFAULT: "#0038e3",
          dark: "#0028a6",
          light: "#3366ff",
          soft: "rgba(0, 56, 227, 0.08)",
        },
        dark: {
          DEFAULT: "#0f172a",
          surface: "#1e293b",
          card: "#192238",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Outfit", "sans-serif"],
        body: ["var(--font-body)", "Plus Jakarta Sans", "sans-serif"],
      },
      boxShadow: {
        "glow-red": "0 10px 25px -5px rgba(179, 19, 27, 0.35)",
        "glow-blue": "0 10px 25px -5px rgba(0, 56, 227, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
