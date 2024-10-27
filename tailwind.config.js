module.exports = {
  purge: [
    // Use *.tsx if using TypeScript
    './pages/*.tsx',
    './pages/**/*.tsx',
    './components/**/*.tsx'
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      display: ['Raleway', 'sans-serif'],
      body: ['Lato', 'sans-serif'],
      bluepen: ['Blue Pen'],
      fat: ['Raleway', 'sans-serif'],
    },
    textColor: theme => ({
      ...theme('colors'),
    }),
    backgroundColor: theme => ({
      ...theme('colors'),
    }),
    container: {
      center: true,
    },
    extend: {
      colors: {
        'primary': 'var(--primary)',
        'secondary': 'var(--secondary)',
        'danger': 'var(--danger)',
        'success': 'var(--success)',
      },
      height: {
        '3/5screen': '60vh'
      },
      minHeight: {
        '3/4': '75%',
        '3/4screen': '75vh',
        '20': '5rem',
        '40': '10rem'
      },
      boxShadow: {
        default: '0 1.5rem 4rem rgba(0,0,0,.3)',
      },
    }
  }
}
