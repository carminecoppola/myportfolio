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
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        accent: {
          cyan: "#00d9ff",
          lime: "#ccff00",
          orange: "#ff6b35",
          purple: "#a855f7",
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(0deg, transparent 24%, rgba(0, 217, 255, .05) 25%, rgba(0, 217, 255, .05) 26%, transparent 27%, transparent 74%, rgba(0, 217, 255, .05) 75%, rgba(0, 217, 255, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 217, 255, .05) 25%, rgba(0, 217, 255, .05) 26%, transparent 27%, transparent 74%, rgba(0, 217, 255, .05) 75%, rgba(0, 217, 255, .05) 76%, transparent 77%, transparent)",
        "blueprint-bg":
          "radial-gradient(circle at 1px 1px, rgba(0, 217, 255, 0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-size": "50px 50px",
        "blueprint-size": "40px 40px",
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};

export default config;
