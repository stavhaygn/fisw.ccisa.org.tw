module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      zIndex: {
        999: '999',
      },
      colors: {
        // primary: '0fffff',
        primary: '#161098',
        secondary: '#93278f',
        light: '#0fffff',
        dark: '#231816',
      },
    },
  },
  variants: {},
  plugins: [],
};
