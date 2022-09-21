/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Mont: ['Montserrat', 'sans-serif'],
        Cabin: ['Cabin', 'sans-serif'],
      },
      colors: {
        wgreen: {
          50: '#21E6BF',
          100: '#78F0D8',
          200: '#49EBCB',
          300: '#00DFB3',
          400: '#00AC8A',
        },
        wblue: {
          50: '#04192C',
          100: '#23425F',
          200: '#0F2B44',
          300: '#010D18',
          400: '#000509',
        },
      }
    },
  },
  plugins: [],
}