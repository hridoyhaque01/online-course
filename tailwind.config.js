/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "380px",
      },
      colors: {
        transparant: "transparent",
        white: {
          100: "#fff",
        },
        primary: {
          500: "#00D0C8",
        },
        secondary: {
          500: "#F39A0F",
          200: "#FCE38B",
        },
        black: {
          900: "#171717",
          500: "#404040",
        },
      },
      backgroundImage: {
        "gradient-100":
          "linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.80) 0.01%, rgba(255, 255, 255, 0.20) 100%)",
        "gradient-900":
          "linear-gradient(180deg, #000 0%, rgba(255, 255, 255, 0.80) 0.01%, rgba(0, 0, 0, 0.20) 100%)",
        // "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        // "gradient-conic":
        //   "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
