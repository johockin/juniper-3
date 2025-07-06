/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#000000',
          light: '#333333',
        },
        secondary: {
          DEFAULT: '#ffffff',
          light: '#f8f8f8',
        },
      },
    },
  },
  plugins: [],
}