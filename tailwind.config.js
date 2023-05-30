/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBlue: "#0891b1",
      },
      fontFamily: {
        playFair: ["Playfair Display", "serif"],
      },
    },
    screens: {
      tablet: "600px",
      desktop: "1000px",
      lgdesktop: "1200px",
      xldesktop: "1400px",
    },
  },
  plugins: [],
};
