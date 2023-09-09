/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html', 'recipes/*.html'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      fontWeight: {
        'r-light': '300;',
        'r-regular': '400;',
        'r-bold': '700',
        'r-black': '900;',
      },
    },
  },
  plugins: [],
};
