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
        primary: "#085b69",
        secondary: "#05a69f",
        tertiary: "#056573",
        quaternary: "#6ba3a4",
        quinary: "#1c3c55",
        senary: "#101a1c",
        // Colores de texto
        text_primary: "#fff",
        text_secondary: "#c0c0c0",
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
