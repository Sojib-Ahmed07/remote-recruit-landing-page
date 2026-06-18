/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",                // <-- CRITICAL: Vite injects everything here
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

