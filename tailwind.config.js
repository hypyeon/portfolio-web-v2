/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./public/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      // always start with mobile first, default viewport is 320px to 375px
      // leaving a note here for future references 
      'mobile-md': '390px',
      'mobile-lg': '428px',
      // viewport for tablets will go here
      'desktop': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
      '3xl': '2048px',
    },
    extend: {
      fontFamily: {
        "space": ["Space Mono", "monospace"],
        "rock": ["Rock Salt", "cursive"],
        "CSLight": ["CremSlabLight"],
        "CSReg": ["CremSlabRegular"],
        "CSSB": ["CremSlabSemiBold"],
        "CSBold": ["CremSlabBold"],
        "ubuntu": ["Ubuntu Sans", "sans-serif"],
      },
      keyframes: {
        'bounce-card': {
          '0%, 100%': {
            transform: 'translateY(-3%)',
            //'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(2%)',
            //'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
          }
        },
        'shadow-blur': {
          '0%, 100%': {
            filter: 'blur(9.5px)',
            opacity: '0.5'
          },
          '50%': {
            filter: 'blur(7.25px)',
            opacity: '1'
          }
        },
        'animatedgradient': {
          '0%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
          '100%': {
            'background-position': '0% 50%',
          },
        },
      },
      animation: {
        'bounce-card': 'bounce-card 3.5s ease-in-out infinite',
        'shadow-blur': 'shadow-blur 3.5s ease-in-out infinite',
        'animatedgradient': 'animatedgradient 3s ease alternate infinite',
      },
    },
  },
  plugins: [  
    
  ],
};
