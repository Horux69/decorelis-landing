/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        "embed": ['Pathway Gothic One', 'sans-serif'],
        "poppins": ['Poppins', 'sans-serif']
      },
      colors: {
        "secondary-btn": "#ececec",
        "secondary-btn-hover": "#cdcdcd",
        "text-color-secondary": "#383838",
        "custom-pik-dark": "#7e052e",
        "custom-pik": "#DD4872",
      },
    },
  },
  plugins: [],
}

