module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: '#222831',
        darkGrey: '#393E46',
        primary: '#17B978',
        lightGrey: '#b9b9b9',
        lighterGrey: '#EEEEEE',
      },
      fontFamily: {
        primary: ['Quicksand', 'ui-sans-serif'],
        secundary: ['Poppins', 'ui-sans-serif'],
      },
      spacing: {
        84: '22rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
