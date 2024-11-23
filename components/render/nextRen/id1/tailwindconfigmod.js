export const tailwindConfigTsModification=`
import type { Config } from "tailwindcss";

const colors = require("tailwindcss/colors");

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: colors.white,
        black: colors.black,
        zinc: colors.zinc, // for \`bg-zinc-900\` and \`border-zinc-600\`
        green: {
          500: "#22c55e", // \`text-green-500\`
        },
      },
      maxWidth: {
        "85%": "85%",
      },
      height: {
        auto: "auto",
        "96": "24rem", // 384px equivalent
      },
      maxHeight: {
        "96": "24rem", // 384px equivalent
      },
      borderRadius: {
        lg: "0.5rem", // Default large radius
      },
      padding: {
        1: "0.25rem",
        4: "1rem",
      },
      fontSize: {
        lg: "1.125rem", // Text size
      },
      spacing: {
        "1/2": "50%", // For \`translate-y-1/2\`
      },
      transitionTimingFunction: {
        "transition-all": "all 0.3s ease", // Hover transitions
      },
    },
  },
  plugins: [],
};

export default config;

`;