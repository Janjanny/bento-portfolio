/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ["Poppins", "sans-serif"] },
      colors: {
        white: "#E0E0E0",
        "grid-color": "#101010",
        "bg-color": "#050505",
        "button-color": "#191919",
        "primary-color": "#9887EB",
        "stroke-color": "#222222",
      },
    },
  },
  plugins: [],
}
)