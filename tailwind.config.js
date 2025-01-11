/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'phones': {'min': '320px', 'max': '500px'}
      }
    },
    fontFamily: {
      Inter: ['Inter', 'serif']
    }
  },
  plugins: [],
}