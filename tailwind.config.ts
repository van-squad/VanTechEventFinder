import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      navy: {
        100: "#e0fbfc",
        200: "#98c1d9",
        300: "#3d5a80",
        400: "#293241",
      },
      salmon: "#ee6c4d",
    },
  },
  plugins: [],
  darkMode: "class",
} satisfies Config;
