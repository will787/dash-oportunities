// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Certifique-se de incluir todos os arquivos do projeto
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: "#FFFFFF", // Fundo principal
          secondary: "#F5F5F5", // Fundo mais claro para contraste
          text: "#121212", // Texto padrão preto
          accent: "#4A90E2", // Azul para botões e links
          card: "#E0E0E0", // Fundo de cartões ou elementos
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Tipografia moderna
      },
    },
  },
  plugins: [],
};
