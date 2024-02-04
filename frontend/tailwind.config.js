/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        "primary-color": "#F5EEE6",
        "primary-font-color": "blue",
        "sec-color": "#436850",
        "sec-font-color": "#FFFFFF",
        "prim-color": "#FBFADA",
        "prim-font-color": "#000000",
        "font-color": "#C3E2C2",
        "prev-prod": "#E8C872"
      },
      backgroundImage: {
        "primary-pattern": "url('https://mir-s3-cdn-cf.behance.net/project_modules/disp/60aec161096281.5a6c6fdfe570a.gif')"
      }
    },
  },
  plugins: [],
}

