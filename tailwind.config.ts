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
        background: "var(--background)",
        foreground: "var(--foreground)",
        mred: "#FF5050",
        red: "#FF0000",
      },
      fontFamily: {
        bebas: ["var(--font-bebas-neue)", "sans-serif"],
      },
      fontWeight: {
        bebas: "500",
      },
      textShadow: {
        black1: "3px 2px 1px black",
        black2: "6px 5px 1px black",
        black3: "9px 8px 1px black",
        red1: "3px 2px 1px #FF5050",
        red2: "6px 5px 1px #FF5050",
        red3: "4px 3px 1px #FF5050",
      },
      boxShadow: {
        custom1: "3px 3px 15px 3px rgba(0, 0, 0, 0.5)",
      },
      keyframes: {
        growWidth: {
          "0%": { width: "0", opacity: "0" },
          "100%": { width: "90%", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        grow: "growWidth 3000ms ease-out",
        fadeIn: "fadeIn 2000ms ease-in",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
export default config;
