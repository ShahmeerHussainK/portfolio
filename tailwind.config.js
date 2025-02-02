/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      filter: {
        grayscale: 'grayscale(100%)',
      },
      fontFamily: {
        custom: ['georgia', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwindcss-filters'),
  ],
}

