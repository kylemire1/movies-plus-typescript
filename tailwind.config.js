module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      padding: {
        'img-hack': '55%',
      },
      minHeight: {
        header: '7.25rem',
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
        brand: ['Avenir-Roman', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
