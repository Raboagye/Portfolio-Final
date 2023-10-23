/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    screens: {
      lg: "1130px",
      md: "768px",
      mid: "900px",
      small: "590px",
      mdium: "1100px"

    },
    
    extend: {


      fontFamily: {
        body: ["Mongolian Baiti"]
      },

      // keyframes: {
      //   rotate: {
      //     from: {
      //       transform: 'rotateX(0deg) rotateY(0deg)',
      //     },
      //     to: {
      //       transform: 'rotateX(369deg) rotateY(360deg)',
      //     },
      //   },
      // },

      // animation: {
      //   'rotate': 'rotate'
      // }
    },
  },
  plugins: [
    require('tailwindcss-3d')({ legacy: true }),
  ]  
}

