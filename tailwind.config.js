/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppoins: ["Poppins", "sans-serrif"],
        Butterfly: ["Butterfly kids"],
        Lobster: ["Lobster", "cursive"],
        Courgette: ["Courgette", "cursive"],
      },
    },
  },
  plugins: [],
};
