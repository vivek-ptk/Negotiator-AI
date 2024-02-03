/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        "sec-color": "#436850",
        "sec-font-color": "#FFFFFF",
        "prim-color": "#FBFADA",
        "prim-font-color": "#000000",
        "hover-font-color":"#ADBC9F",
      }
    },
  },
  plugins: [],
}

