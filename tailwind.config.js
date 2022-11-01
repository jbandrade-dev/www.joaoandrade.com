/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "Inter, sans-serif",
      },
      screens: {
        mob: "100px",
        tablet: "600px",
        pc: "1000px",
      },
      fontSize: {
        "3xs": 10,
        "2xs": 12,
        xs: 14,
        sm: 16,
        md: 18,
        lg: 20,
        xl: 24,
        "2xl": 32,
      },

      colors: {
        transparent: "transparent",

        black: "#000",
        white: "#FFF",

        gray: {
          900: "#121214",
          800: "#202024",
          400: "#7c7c8a",
          200: "#c4c4cc",
          100: "#e1e1e6",
        },

        cyan: {
          500: "#81d8f7",
          300: "#9BE1FB",
        },
      },
    },
  },
  plugins: [],
};
