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
        "ubuntu": [ "Ubuntu Sans", "sans-serif"]
      },
      animation: {
        "bounce-short": "bounce 1.5s ease-in-out 3",
      },
      borderRadius: {
        'highlight': '1em 0 1em 0',
      },
      textShadow: {
        'text-highlight': '1px 1px 1px #fff',
      },
      backgroundImage: {
        'highlight-gradient': 'linear-gradient(-100deg, rgba(255,250,150,0.15), rgba(255,250,150,0.8) 100%, rgba(255,250,150,0.25))',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate')
  ],
}