/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.hbs", "./**/*.hbs"],
  theme: {
    extend: {
      keyframes: {
        zoom: {
          "0%, 100": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
      },
      animation: {
        zoom: "zoom 20s ease-in infinite",
      },
    },
    container: {
      center: true,
      padding: "1rem",
    },
    fontFamily: {
      sans: ["IBM Plex Sans", "sans-serif"],
      serif: ["Playfair Display", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
