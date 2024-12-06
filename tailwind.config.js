/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        primary: "#f37a1f",
        secondary: "#393939",
        tri: "#a4b6c2",
        fourth: "#d0d0c4",
      },
    },
  },
  plugins: [require("daisyui")],
};
