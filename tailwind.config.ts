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
        coral: {
          DEFAULT: "#F45152",
          50: "#FFF5F5",
          100: "#FFF2F1",
          200: "#FFE4E1",
          300: "#FFA8A6",
          400: "#FF7374",
          500: "#F45152",
          600: "#E0383A",
          700: "#B82325",
          800: "#8F1A1B",
          900: "#6B1415",
        },
        charcoal: {
          DEFAULT: "#181818",
          muted: "#333333",
          light: "#555555",
        },
        paper: {
          DEFAULT: "#FAF9F5",
          white: "#FFFFFF",
          cream: "#F6F5EE",
          warm: "#FCFBF8",
        },
        editorial: {
          grey: "#7B7B7B",
          lightgrey: "#E8E7E1",
          border: "rgba(24, 24, 24, 0.08)",
          borderCoral: "rgba(244, 81, 82, 0.2)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Impact", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        hand: ["var(--font-hand)", "cursive", "sans-serif"],
      },
      boxShadow: {
        paper: "0 15px 40px -10px rgba(0, 0, 0, 0.07)",
        "paper-hover": "0 22px 50px -12px rgba(244, 81, 82, 0.15)",
        card: "0 10px 30px -8px rgba(0, 0, 0, 0.05)",
        floating: "0 20px 45px -10px rgba(0, 0, 0, 0.12)",
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "float-delayed": "float 7s ease-in-out 2s infinite",
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
