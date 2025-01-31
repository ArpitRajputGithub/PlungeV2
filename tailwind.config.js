/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        plunge: {
          purple: '#7E319B',
          'purple-dark': '#161018',
          'purple-gray': '#84758A',
          yellow: '#DFE742',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'wave-pattern': "url('/src/assets/wave.svg')",
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        'scroll-reverse': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' }
        }
      },
      animation: {
        scroll: 'scroll 25s linear infinite',
        'scroll-reverse': 'scroll-reverse 18s linear infinite'
      }
    },
  },
  plugins: [],
}