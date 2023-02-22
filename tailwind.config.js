/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    colors: {
      'orange' : '#ff7d1a',
      'pale-orange' : '#ffede0',
      'very-dark-blue' : '#1d2025',
      'dark-grayish-blue' : '#68707d',
      'grayish-blue' : '#b6bcc8',
      'light-grayish-blue' : '#f7f8fd',
      'white' : '#ffffff',
      'black' : '#000000'
    },
    extend: {
      fontFamily: {
        'Kumbh': ["Kumbh Sans"]
      }
    },
  },
  plugins: [],
}
