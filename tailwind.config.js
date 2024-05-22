/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "space": ["Space Mono", "monospace"],
        "myn": ["Mynerve", "cursive"],
        "josefin": ["Josefin Sans", "sans-serif"],
        "rock": ["Rock Salt", "cursive"],
        "diaLight": ["DiagondLight"],
        "diaBold": ["DiagondBold"],
        "llay": ["Llawysgrifen"],
        "CSLight": ["CremSlabLight"],
        "CSReg": ["CremSlabRegular"],
        "CSSB": ["CremSlabSemiBold"],
        "CSBold": ["CremSlabBold"],
        "ubuntu": ["Ubuntu Sans", "sans-serif"],
      },
    },
  },
  plugins: [  
    
  ],
};
