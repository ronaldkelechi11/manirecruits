/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'rgb(15 23 42)',
        secondary: '',
        black: '#16161c',
        white: '#ffffff',
        grey: '#D9D9D9',
        darkGrey: '#272828',
      },
      backgroundImage: {

      },
      fontFamily: {
        kanit: 'Kanit',
        poppins: 'Poppins'
      }
    },
  },
  plugins: [],
}

