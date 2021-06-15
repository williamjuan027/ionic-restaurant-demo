const { guessProductionMode } = require("@ngneat/tailwind");
const defaultTheme = require('tailwindcss/defaultTheme')

process.env.TAILWIND_MODE = guessProductionMode() ? 'build' : 'watch';

module.exports = {
    prefix: '',
    mode: 'jit',
    purge: {
      content: [
        './src/**/*.{html,ts,css,scss,sass,less,styl}',
      ]
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      extend: {
        fontFamily: {
          sans: ['Lato', ...defaultTheme.fontFamily.sans],
          cursive: ['Dancing Script', 'cursive']
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [require('@tailwindcss/aspect-ratio'),require('@tailwindcss/line-clamp'),require('@tailwindcss/typography')],
};
