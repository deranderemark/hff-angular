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
        'background': '#e0fae0',
        'primary': '#2bee65',
        'secondary': '#e8e8e3',
        'accent': '#178739',
      },
    },
  },
  plugins: [],
}