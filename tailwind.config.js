/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'primary-dark': '#1B262C',
        'primary-blue': '#0F4C75',
        'primary-medium': '#3282B8',
        'primary-light': '#BBE1FA',
      },
    },
  },
  plugins: [],
};
