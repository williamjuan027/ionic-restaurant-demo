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
        },
        colors: {
          'brand-accent': '#C2A68E',
          'brand-gray-dark': '#9B9B9B',
          'brand-gray-medium': '#B4AFAC',
          'brand-gray-light': '#BEBBB6',
          'brand-white': '#FFFFFF',
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [require('@tailwindcss/aspect-ratio'),require('@tailwindcss/line-clamp'),require('@tailwindcss/typography')],
};
