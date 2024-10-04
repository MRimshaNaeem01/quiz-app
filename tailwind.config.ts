import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Gotham: ['Gotham', 'sans-serif'],
        Inter: ["Inter", "serif"],
        InterBold: ["Inter-Bold", "serif"],
      },
      colors: {
        "primary-blue": "#003664",
        "secondary-blue": "#3D81D1",
        "primary-mustard": "#E59414",
        "primary-orange": "#FBEDE2",
        "primary-light-blue": "#1877F2",

        
        "primary-grey": "#F1F1F1",
        "secondary-grey": "#989898",
      },
    },
  },
  plugins: [],
};
export default config;

