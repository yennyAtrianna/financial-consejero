/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0B1E3D",
        accent:  "#0A6FFF",
        danger:  "#F87171",
        success: "#34D399",
        warning: "#FBBF24",
      }
    },
  },
  plugins: [],
}
