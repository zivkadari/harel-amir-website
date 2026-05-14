import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#050505",
        charcoal: "#10100f",
        bone: "#f4efe5",
        mist: "#c9c0b0",
        gold: "#c9a867",
        brass: "#8d7245"
      },
      fontFamily: {
        display: ["var(--font-display)", "Arial", "Helvetica", "sans-serif"],
        body: ["var(--font-body)", "Arial", "Helvetica", "sans-serif"]
      },
      boxShadow: {
        glow: "0 24px 90px rgba(201, 168, 103, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
