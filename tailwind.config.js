/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        yellow: '#FFFD64',
        white: '#FFFFFF',
        black: '#0A0B1F',
        grey: '#7C838B',
        amber: '#EDB615',
        dark: '#0A0A0A',
      },
      fontFamily: {
        mon: ['Montserrat'],
      },
      boxShadow: {
        dark: '8px 8px 0px -3px #000',
        light: '8px 8px 0px -3px #FFF',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
