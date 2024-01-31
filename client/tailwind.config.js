/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.tsx"
  ],  theme: {
    extend: {
      minHeight : {
        500 : "500px",
        650: "650px"
      },
      screens: {
        'custom': {'max': '900px'},
        'mobile': {'max': '480px'}
      }
    },
  },
  plugins: [],
}
