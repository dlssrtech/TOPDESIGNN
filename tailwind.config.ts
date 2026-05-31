import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#07111f",
        navy: "#0b1f3a",
        royal: "#1769ff",
        cyan: "#17d4ff",
        frost: "#f5f9ff"
      },
      boxShadow: {
        glow: "0 24px 80px rgba(23,105,255,.24)",
        card: "0 18px 60px rgba(7,17,31,.12)"
      },
      borderRadius: { "4xl": "2rem" }
    }
  },
  plugins: []
};
export default config;
