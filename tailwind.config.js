/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './public/js/*.js'],
  theme: {
    extend: {
      colors: {
        darkNavy: '#242742',
        paleNavy: '#36384D',
        vermellion: '#FF6155',
        grey: 'rgba(25,24,43,0.25)',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        'heading-1': '3.5rem',
      },
      borderRadius: {
        '4xl': '2.25rem',
      },
      listStyleImage: {
        vermellionCheck: 'url("../images/icon-list.svg")',
      },
    },
  },
  plugins: [],
};
