/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {
      colors: {
        blackk: "#0a0a0a",
        "light-grey": "#a5a5a8",
        "black-300": "#444444",
        "button-black": "#16161a",
      },
      backgroundImage: {
        "hero-img": "url('./assets/background.jpg')",
        "portfolio-Bg": "url('./assets/portfolio-bg.jpg')",
        "contact-Bg": "url('./assets/contact.jpg')",
      },
    },
  },
  plugins: [],
};
