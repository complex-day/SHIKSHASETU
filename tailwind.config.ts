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
        gov: {
          primary: "#0B3B8C",
          primaryHover: "#082B66",
          primaryLight: "#EEF4FF",
          secondary: "#1E40AF",
          gold: "#D4A017",
          goldLight: "#FEF9C3",
          goldDark: "#A1790D",
          green: "#16A34A",
          greenLight: "#DCFCE7",
          orange: "#F59E0B",
          orangeLight: "#FEF3C7",
          red: "#DC2626",
          redLight: "#FEE2E2",
          slate: "#0F172A",
          muted: "#64748B",
          border: "#E2E8F0",
          card: "#FFFFFF",
          surface: "#F8FAFC",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        gov: "0 10px 25px -5px rgba(11, 59, 140, 0.07), 0 8px 10px -6px rgba(11, 59, 140, 0.05)",
        govLg: "0 20px 35px -5px rgba(11, 59, 140, 0.12), 0 10px 15px -5px rgba(11, 59, 140, 0.08)",
        glass: "0 8px 32px 0 rgba(11, 59, 140, 0.08)",
      },
      borderRadius: {
        gov: "12px",
        govLg: "16px",
        govXl: "24px",
      },
    },
  },
  plugins: [],
};

export default config;
