/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        'dark-bg':'hsl(0 0% 30% / 0.25)',
        'back-bg':'hsl(0 0% 0% / 0.25)',
        "custom-red": "#b91c1c"
      }
    },
    backgroundImage:{
      'hero-image':'linear-gradient(rgba(0, 13, 26, 0.6),rgba(0, 13, 26, 0.6)), url("../../src/images/bg_image.jpg")',
      // 'fanzone-image':'linear-gradient(rgba(72.5, 11, 11, 0.6),rgba(72.5, 11, 11, 0.6)), url("../../src/images/football-player-wearing-number-10-jersey.jpg")',
      'fanzone-image':'linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)), url("../../src/images/1523AC1D-0C4E-4DB9-BD2D-B0EB2917F445.JPG")',
      'store-image':'linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)), url("../../src/images/CCAE29C9-FD72-4AF6-B0B1-35395F14456B.JPG")',
      'store1-image':'linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)), url("../../src/images/ccouple-africans-watching-funny-movie.jpg")',
      'store2-image':'linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)), url("../../src/images/de.JPG")',
      'store3-image':'linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)), url("../../src/images/beautiful-second-hand-market.JPG")',
     
      'contact-image':'linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8)), url("../../src/images/s-o-c-i-a-l-c-u-t-1RT4txDDAbM-unsplash.jpg")',
      'about-image': 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("../../src/images/abt.png")',
      'contact-image-two': 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("../../src/images/petr-machacek-BeVGrXEktIk-unsplash.jpg")'

    },
    fontFamily:{
      "garamond":[ "Cormorant Garamond, serif"],
      "montserrat":[ 'Montserrat', 'sans-serif'],
      "serif": ['sans-serif']
    }
  },
  plugins: [],
}
