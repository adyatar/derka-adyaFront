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
        "headerColor": '#1d1d1d',
        "herocolor" : '#a7a1b8',
        
        
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
    require('autoprefixer'),
    require('tailwindcss'),
  ],
  darkMode: 'class',
}

