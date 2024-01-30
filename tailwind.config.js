/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      Metropolis : ["Metropolis", "sans-serif"],
    },
    extend: {
      colors:{
        background: {
          100: '#0F0F0D',
          200: '#050503',
          300: '#1F1F1D'
        },
        primary: '#FFCB3C',
        secondary: '#4BC270',
        tertiary: '#246DA8'
      },
    },
  },
  plugins: [],
}
