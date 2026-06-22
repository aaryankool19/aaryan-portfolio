import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        graphite: "#0b0f14",
        panel: "#101720",
        line: "rgba(148, 163, 184, 0.18)",
        signal: "#44d7b6",
        silicon: "#80a7ff",
        copper: "#f0a35b"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 18px 70px rgba(68, 215, 182, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
