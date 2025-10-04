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
        primary: "#1E40AF",    // Azul marinho
        secondary: "#374151",  // Cinza médio
        accent: "#059669",     // Verde esmeralda
        success: "#10b981",    // Verde (mantido)
        tech: "#DC2626",       // Vermelho coral para tecnologias
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
