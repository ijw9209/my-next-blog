/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'beach-pattern': "url('/public/images/beach1920.jpg')"
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
