export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: [
          "Manrope",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
        playfair: ['"Playfair Display"', "serif"],
        poppins: ["Poppins", "sans-serif"],
        cinzel: ["Cinzel", "serif"],
      },
    },
  },
  animation: {
    marquee: "marquee 25s linear infinite",
  },
  keyframes: {
    marquee: {
      "0%": { transform: "translateX(0%)" },
      "100%": { transform: "translateX(-100%)" },
    },
  },
  colors: {
    brand: {
      red: "#dc2626",
      green: "#22c55e",
      black: "#0f0f0f",
      blue: "#1e3a8a",
      gold: "#f9cb80",
      white: "#f5f5f5",
    },
  },
};


