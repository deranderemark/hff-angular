/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        'text': '#0d120e',
        'background': '#ccffd6',
        'primary': '#06fe51',
        'secondary': '#e8e8e3',
        'accent': '#178538',
      },
    },
  },
  plugins: [],
}