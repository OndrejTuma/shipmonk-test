module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    colors: {
      primary: '#000000',
      secondary: '#11beff',
      light: '#e1e1e1',
      yellow: '#ffa71c',
      warning: '#fcf8e3',
      critical: '#f2dede',
      error: '#f22c40',
      gray: '#999',
      white: '#ffffff',
    },
    fontFamily: {
      primary: ['Titillium Web', 'sans-serif'],
    },
    fontSize: {
      sm: 12,
      base: 16,
      lg: 20,
      xl: 36,
    },
    screens: {
      sm: '400px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      gridAutoColumns: {
        categoriesMobile: 'minmax(220px,1fr)',
        categories: 'minmax(320px,1fr)',
      },
      gridTemplateColumns: {
        categoriesMobile: 'repeat(auto-fill,minmax(220px,1fr))',
        categories: 'repeat(auto-fill,minmax(320px,1fr))',
      }
    },
  },
  variants: {},
  plugins: [],
}
