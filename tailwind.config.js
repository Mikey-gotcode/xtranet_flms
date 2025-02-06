/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'black': '#22292f',
        'red': '#e3342f',
        'blue': '#3490dc',
        // Add other colors you need...
      }
    },
  },
  plugins: [],
}
