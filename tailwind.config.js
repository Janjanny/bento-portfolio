/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {sans: ["Poppins", "sans-serif"]},
      colors: {
        white: "#FFFFFF",
        "grid-color": "#101010",
        "bg-color": "#050505",
        "button-color": "#191919",
        "primary-color": "#9887EB",
        "stroke-color": "#222222"
      }
    },
  },
  plugins: [],
};
