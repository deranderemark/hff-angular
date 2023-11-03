/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    './components/**/*.{html,js}',
  ],
  theme: {
    fontSize: {
  sm: '0.750rem',
  base: '1rem',
  xl: '1.333rem',
  '2xl': '1.777rem',
  '3xl': '2.369rem',
  '4xl': '3.158rem',
  '5xl': '4.210rem',
},
// imported in styles.scss
fontFamily: {
  heading: 'Inter',
  body: 'Montserrat',
},
fontWeight: {
  normal: '400',
  bold: '700',
},
    extend: {
      colors: {
        'text': '#0d120e',
        'background': '#e0fae0', // used in without @import styles.scss
        'primary': '#2bee65',
        'secondary': '#e8e8e3',
        'accent': '#178739',
      },
    },
  },
  plugins: [],
}