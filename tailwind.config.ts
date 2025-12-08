import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", 

  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        navy: "#0f172a",
        "brand-green": "#15803d",
        "brand-red": "#be123c",
        cream: "#f8fafc",
      },
    },
  },

  plugins: [],
};

export default config;
