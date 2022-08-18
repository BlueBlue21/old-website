/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "white": "#fefefe",
        "light-gray": "#eeeeee",
        "gray": "#333333",
        "dark": "#252525",
        "blue": "#1f75f5",
        "dark-blue": "#125dcc"
      },
      backgroundImage: {
        "background": "url('/background.jpg')",
      },
    },
  },
  plugins: [],
}
