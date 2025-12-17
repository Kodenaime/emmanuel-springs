import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";


const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0f172a',
        "brand-green": '#15803d',
        "brand-red": '#be123c',
        cream: '#f8fafc',
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
        serif: ["var(--font-serif)", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};

export default config;
