/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./Src/views/**/*.html",
    "./Src/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1",
        secondary: "#8b5cf6",
        accent: "#06b6d4",
        success: "#10b981",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.8s ease-out',
        'fade-in': 'fadeIn 1s ease-out',
      }
    },
  },
  plugins: [],
}
