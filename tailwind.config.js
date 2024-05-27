/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'light-blue': {
          700: '#2C5282',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
