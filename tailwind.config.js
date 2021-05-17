module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        huge: ['4.65rem', '4.5rem'],
      },
      padding: {
        'img-hack': '55%',
      },
      height: {
        header: '5rem',
      },
      minHeight: {
        header: '5rem',
        'slider-full': '27.5rem',
      },
      colors: {
        brand: {
          dark: '#040714',
          'dark-alt': '#090930',
          primary: '#2464DD',
          'primary-light': '#0483ee',
          white: '#f9f9f9',
        },
      },
      fontFamily: {
        brand: ['Aileron', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
