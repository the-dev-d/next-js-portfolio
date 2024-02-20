import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "min-grow-min": "min-content 1fr min-content"
      },
      gridTemplateRows: {
        "min-grow": "min-content 1fr"
      },
      fontFamily: {
        wave: "'Wavefont', system-ui",
        maiden: "'iron-maiden'",
        pixyboy: "'pixyboy'",
        robotics: "'robotics'",
      },
      colors: {
        background: "#20282b",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
