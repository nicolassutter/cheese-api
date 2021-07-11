const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.svelte'],
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        bluegray: colors.blueGray
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
