/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'pared-ladrillo': 'url(./src/assets/pexels-ready-made-3964674.jpg)',
        'pared-damage': 'url(./src/assets/pexels-henry-&-co-1901028.jpg)'
      },
      fontFamily: {
        Josefin: ['Josefin Sans', 'sans-serif' ]
      },
      keyframes: {
        spot:{
          '0%, 100%': {borderRadius: '53% 47% 23% 77% / 60% 62% 38% 40%' },
          '25%': {borderRadius: '39% 61% 30% 70% / 27% 67% 33% 73%' },
          '50%': {borderRadius: '67% 33% 54% 46% / 42% 74% 26% 58%' },
          '75%': {borderRadius: '25% 75% 13% 87% / 84% 17% 83% 16%' },
        },
        spot2:{
          '0%, 100%': {borderRadius: '88% 12% 73% 27% / 27% 67% 33% 73%' },
          '25%': {borderRadius: '80% 20% 77% 23% / 59% 27% 73% 41% ' },
          '50%': {borderRadius: '48% 52% 28% 72% / 82% 76% 24% 18% ' },
          '75%': {borderRadius: '24% 76% 64% 36% / 85% 74% 26% 15% ' },
        },
        spot3:{
          '0%, 100%': {borderRadius: '93% 7% 64% 36% / 85% 74% 26% 15% ' },
          '25%': {borderRadius: '16% 84% 19% 81% / 65% 90% 10% 35%  ' },
          '50%': {borderRadius: '43% 57% 72% 28% / 65% 73% 27% 35% ' },
          '75%': {borderRadius: '92% 8% 89% 11% / 17% 9% 91% 83%  ' },
        },
        beat:{
          '0%, 100%,':{transform: 'scale(1)'},
          '50%': {transform: 'scale(.9)'}
        },

      },
      animation: {
        spot: 'spot 10s ease-in-out infinite',
        spot2: 'spot2 10s ease-in-out infinite',
        spot3: 'spot3 10s ease-in-out infinite',
        beat: 'beat 1s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}

