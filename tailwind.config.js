/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'plunge-purple': '#7E319B',
        'plunge-purple-dark': '#5E2574',
        'plunge-purple-light': '#9B4FB8',
        'plunge-yellow': '#F9F871',
        'plunge-white': '#FFFFFF',
        'plunge-gray': {
          100: '#F7F7F7',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
        }
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      fontWeight: {
        'extra-bold': '800',
      }
    },
  },
  plugins: [],
} 