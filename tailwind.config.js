/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
    fontFamily: {
      'lato': ['"Lato"', 'sans-serif']
    }
  },
  plugins: [
    require('flowbite/plugin'),
  ],
  darkMode: 'class',
}

