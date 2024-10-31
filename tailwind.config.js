/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      colors: {
        customOrange: '#FF8442', // Define a custom color name like 'customOrange'
      },
    },
  },
  plugins: [],
};
