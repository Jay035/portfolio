const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'base'
    })
  ],
  theme: {
    fontFamily: {
      'Montserrat': ['Montserrat', 'sans-serif']
    },
    extend: {
      colors: {
        'blackk': '#0a0a0a',
        'light-grey': '#a5a5a8',
        'black-300': '#444444',
        'button-black': '#16161a'
      },
      backgroundImage: {
        'hero-img': "url('./components/assets/background.jpg')",
        'portfolio-Bg': "url('./components/assets/portfolio-bg.jpg')"
      },
    },
  },
  // plugins: [],
}
