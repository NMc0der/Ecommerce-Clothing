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
        homeShop1:
          "url('./assets/Home/tamara-bellis-68csPWTnafo-unsplash.jpg')",
        homeShop2:
          "url('./assets/Home/zeny-rosalina-Z3tc0Bfv0c4-unsplash (1).jpg')",
        homeShop3:
          "url('./assets/Home/tamara-bellis-0C2qrwkR1dI-unsplash.jpg')",
      },
      screens: {
        tablet: "445px",
        mobile: "325px",
      },
    },
  },
  plugins: [],
};
