/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  important: true,
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors:{
        "bgColor": '#f1f4f4',
        "textSlider": '#7bdad3',
      },
      animation: {
        RightToLeft: 'RightToLeft 20s infinite linear',
      },
      keyframes:{
        RightToLeft: {
          'from': { transform: 'translateX(0%)' },
          'to': { transform: 'translateX(-50%)' },
        },
      },
    },
    fontFamily: {
      'lato': ['"Lato"', 'sans-serif']
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
  darkMode: 'class',
}

