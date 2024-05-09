/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      first: '#6C63FE',
      second: '#2F2D41',
    },
  },
  plugins: [require("daisyui")],
});
