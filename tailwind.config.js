module.exports = {
  purge: ['./src/**/*.vue'],
  theme: {
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
