/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./app/**/*.{js,ts,jsx,tsx}",
    // "./pages/**/*.{js,ts,jsx,tsx}",
    // "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "fade-in-bottom": "fade-in-bottom 2s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.3s  both",
        "fade-in-right": "fade-in-right 2s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.3s  both",
        "fade-in-left": "fade-in-left 2s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.3s  both",
        "arrowlong": "arrowlong 2s ease",
        "fade-in-bck": "fade-in-bck 2s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.7s  both"
      }
    },
    keyframes: {
      "fade-in-bottom": {
        "0%": {
          transform: "translateY(50px)",
          opacity: "0"
        },
        to: {
          transform: "translateY(0)",
          opacity: "1"
        }
      },
      "fade-in-right": {
        "0%": {
          transform: "translateX(50px)",
          opacity: "0"
        },
        to: {
          transform: "translateX(0)",
          opacity: "1"
        }
      },
      "fade-in-left": {
        "0%": {
          transform: "translateX(-50px)",
          opacity: "0"
        },
        to: {
          transform: "translateX(0)",
          opacity: "1"
        }
      },
      "arrowlong": {
        "0%": { width: "0%" },
        to: {
          width: "100%"
        }
      },
      "fade-in-bck": {
        "0%": {
          transform: "translateZ(80px)",
          opacity: "0"
        },
        to: {
          transform: "translateZ(0)",
          opacity: "1"
        }
      },
    },
  },
  plugins: [],
}
