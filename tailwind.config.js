/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'system-ui'],
      tableD: ['Nunito', 'sans-serif'],
      tableH: ['Montserrat', 'system-ui'],
      homeT: ['Lato', 'sans'],
      heroFont: ['Petit Formal Script', 'cursive'],
      slogan: ['Bowlby One', ' sans-serif'],
      normal: ['Libre Baskerville', 'serif'],
    },
    extend: {},
  },
  plugins: [],
};
