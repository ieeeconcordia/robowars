import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#1DA1F2",
      secondary: "#FFD55B",
      tertiary: "#F45B69", // To be reconsidered
      "light-grey": "#EDEDED",
      "dark-grey": "#B7B7B7",
      "landing-grey": "#383838",
      black: "#000000",
      white: "#FFFFFF",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        inter: ["var(--font-inter)", ...fontFamily.sans],
        raleway: ["var(--font-raleway)", ...fontFamily.serif],
      },
      padding: {
        "mobile-x": "32px",
        "mobile-y": "64px",
      },
      gap: {
        mobile: "32px",
      },
    },
  },
  plugins: [],
};
export default config;
