/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "travel": "url('src/assets/images/background-travel-2.jpg')",
      },
    },
  },
  plugins: [],
};
