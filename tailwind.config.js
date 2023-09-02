/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // 'media' or 'class'
  theme: {
    extend: {
      // Define your color palette for both modes
      backgroundColor: {
        'light': '#FFFFFF',
        'dark': '#1E1E1E',
      },
      textColor: {
        'light': '#333333',
        'dark': '#FFFFFF',
      },
    },
  },
  plugins: [],
}