/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        float: "float 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      // Colores personalizados
      colors: {
        // Colores de fondo
        primary: "#085b69", // Verde oscuro
        secondary: "#05a69f", // Verde claro
        tertiary: "#056573", // Verde oscuro
        quaternary: "#6ba3a4", // Verde claro
        quinary: "#1c3c55", // Azul oscuro
        senary: "#101a1c", // Gris oscuro
        // Colores de texto
        text_primary: "#fff", // Blanco
        text_secondary: "#c0c0c0", // Gris claro
      },
    },
  },
  plugins: [
    require("daisyui"), // Agrega DaisyUI aquí
  ],
  daisyui: {
    themes: [],
  },
};
