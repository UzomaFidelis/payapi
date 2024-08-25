import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "2xl": "1440px",
      },
      backgroundImage: {},
      fontFamily: {
        "public-sans": ['"Public sans"', "sans-serif"],
        "dm-serif": ['"DM Serif Display"', "serif"],
      },
      colors: {
        "light-pale": "hsl(210, 6%, 74%)",
        "pale-blue": "hsl(207, 44%, 95%)",
        "off-white": "hsl(207, 58%, 99%)",
        "water-white": "hsl(220, 60%, 99%)",
        "mirage-blue": "hsl(207, 28%, 15%)",
        "dark-pink": "hsl(337, 48%, 49%)",
        "charm-pink": "hsl(337, 60%, 64%)",
        "san-juan-blue": {
          50: "hsl(207, 16%, 50%)",
          100: "hsl(207, 33%, 32%)",
        },
        "warning-red": "hsl(359, 87%, 72%)",
      },
    },
  },
  plugins: [],
};
export default config;
