const {nextui} = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "380px",
        "3xl": "1940px",
      },
      colors: {
        transparant: "transparent",
        white: {
          100: "#fff",
          500: "#F5F5F5",
          900: "#D4D4D4",
        },
        primary: {
          200: "#8EFFF3",
          500: "#00D0C8",
        },
        secondary: {
          500: "#F39A0F",
          200: "#FCE38B",
        },
        black: {
          900: "#171717",
          500: "#404040",
          100: "#525252",
        },
        dark: {
          800: "#1F2937",
          600: "#4B5563",
          900: "#111827",
          950: "#030712",
        },
      },
      backgroundImage: {
        "gradient-100":
          "linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.80) 0.01%, rgba(255, 255, 255, 0.20) 100%)",
        "gradient-900":
          "linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.80) 0.01%, rgba(0, 0, 0, 0.20) 100%)",
        // "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        // "gradient-conic":
        //   "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      boxShadow: {
        grey: "0px 2px 40px 0px rgba(14, 14, 14, 0.10)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
