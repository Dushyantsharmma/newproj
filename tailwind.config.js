/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Segoe UI", "Arial", "sans-serif"],
      },
      colors: {
        brand: {
          DEFAULT: "#1E40AF", // Deep Navy Blue
          light: "#60A5FA",   // Light Sky Blue
          dark: "#374151",   // Charcoal Gray
        },
        safety: {
          DEFAULT: "#EA580C", // Safety Orange
        },
        success: {
          DEFAULT: "#059669", // Success Green
        },
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};