
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkPink: '#D223C3',
        lightPink: '#EB4BA8',
        background: '#100F11'
      }
    },
  },
  plugins: [
  ],
}

