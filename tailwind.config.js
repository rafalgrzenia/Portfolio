/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#13C239",
        white: "#F5F5F5",
        techstackButton: "#1F1F1F",
      }
    },
  },
  plugins: [],
}

