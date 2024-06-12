/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serrif"],
        Butterfly: ["Butterfly kids"],
        Lobster: ["Lobster", "cursive"],
        Courgette: ["Courgette", "cursive"],
        Garamond: ["EB Garamond", "serrif"],
        Parisienne: ["Parisienne", "cursive"],
      },
      screens: {
        tablet: "445px",
        mobile: "325px",
      },
    },
  },
  plugins: [],
};
