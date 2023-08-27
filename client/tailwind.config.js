/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        h1: ['Alegreya Sans SC', 'sans-serif'],
        body: ['Snippet', 'sans-serif']
    },backgroundImage: {
      'notebook': "url('./Assets/bg.svg')"
    }
  },
  },
  plugins: [],
}

