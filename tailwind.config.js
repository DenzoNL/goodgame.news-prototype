module.exports = {
  purge: ['./src/**/*.vue'],
  theme: {
    typography: (theme) => ({
      default: {
        css: {
          h1: {
            color: theme('colors.indigo.500'),
          },
          h2: {
            color: theme('colors.indigo.500'),
          },
          a: {
            color: theme('colors.indigo.500'),
          },
        },
      },
    }),
    aspectRatio: {
      none: 0,
      square: [1, 1],
      '16/9': [16, 9],
      '4/3': [4, 3],
      '21/9': [21, 9],
    },
    extend: {},
  },
  variants: {
    aspectRatio: ['responsive'],
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-responsive-embed'),
    require('tailwindcss-aspect-ratio'),
  ],
};
