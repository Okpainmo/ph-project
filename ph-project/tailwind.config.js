module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    '.assets/global-components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
      // screens: {
      //   xs: '375px',
      //   sm: '600px',
      //   md: '900px',
      //   lg: '1200px',
      //   xl: '1536px',
      // },
    },
  },
  plugins: [],
};
