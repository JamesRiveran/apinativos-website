/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#4DA8DA",
          DEFAULT: "#2E77AE",
          dark: "#1A4971",
        },
        secondary: {
          light: "#8AC926",
          DEFAULT: "#5F8D1F",
          dark: "#3E5914",
        },
        accent: {
          DEFAULT: "#F2C94C",
        },
        neutral: {
          light: "#F5F5F5",
          DEFAULT: "#E0E0E0",
          dark: "#333333",
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
};
