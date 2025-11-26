/ @type {import('tailwindcss').Config} */
module.exports = {
  // QUESTO È ESSENZIALE per dire a Tailwind dove cercare le classi
  content: [
    "./index.html",
    "./src//*.{js,ts,jsx,tsx}", // Copre tutti i tuoi componenti React
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}