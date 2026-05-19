import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#171512",
        charcoal: "#27221c",
        bone: "#F4EFE5",
        cream: "#F6F0E6",
        ivory: "#FBF7EE",
        stone: "#EFE6D7",
        mist: "#6E665A",
        gold: "#B89455",
        brass: "#8A6F3E"
      },
      fontFamily: {
        display: ["var(--font-display)", "Arial", "Helvetica", "sans-serif"],
        body: ["var(--font-body)", "Arial", "Helvetica", "sans-serif"]
      },
      boxShadow: {
        glow: "0 24px 90px rgba(80, 63, 38, 0.14)"
      }
    }
  },
  plugins: []
};

export default config;
