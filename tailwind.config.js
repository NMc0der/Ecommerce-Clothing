/** @type {import('tailwindcss').Config} */
// import hero from "../assets/Services/roberto-nickson-vRAYwESFc-U-unsplash.jpg";

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
      backgroundImage: {
        heroServices:
          "url('./assets/roberto-nickson-vRAYwESFc-U-unsplash.jpg')",
        heroServices2:
          "url('./assets/Services/tamara-bellis-wYwQMrLBbXI-unsplash.jpg')",
        heroServices3:
          "url('./assets/Services/tamara-bellis-RcB-KJ0oZHg-unsplash.jpg')",
      },
      screens: {
        tablet: "445px",
        mobile: "325px",
      },
    },
  },
  plugins: [],
};
