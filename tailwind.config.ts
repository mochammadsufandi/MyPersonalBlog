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
        mainBG: "#121121",
        navbar: "#141c27",
        headerNav: "#ffffff",
        textAnimation: "#55e6a5",
        textDescription: "#ffffff92",
      },
      fontFamily: {
        primary: ["Poppins"],
      },
    },
  },
  plugins: [],
};
export default config;
