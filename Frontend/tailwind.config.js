/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        basic: '#3DDC97',
        black: {
          100: '#121212',
          200: '#191919',
          300: '#1f1f1f',
          400: '#383838',
        },
      },
    },
  },
  plugins: [],
};
