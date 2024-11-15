/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primary: "#FFFFFF",
        secondary: {
          DEFAULT: "#5DB075"
        }, 
        black: {
          DEFAULT: "#000000",
          100: "#666666"
        },
      },
      fontFamily: {
        interblack: ["Inter_18ptBlack", "sans-serif"],
        interbold: ["Inter_18ptBold", "sans-serif"],
        interlight: ["Inter_18ptLight", "sans-serif"],
        interregular: ["Inter_18ptRegular", "sans-serif"],
        intersemibold: ["Inter_18ptSemiBold", "sans-serif"],
        interlarge: ["Inter_28ptRegular", "sans-serif"],
      }
    },
  },
  plugins: [],
}

