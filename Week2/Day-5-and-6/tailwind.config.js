/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      clipPath: {
        "inset-100": "inset(100%)",
      },
      colors: {
        "desired-white": "hsl(0, 0%, 98%)",
        "desired-gray": "hsl(0, 0%, 41%)",
        "desired-black": "hsl(0, 0%, 8%)",
      },
      fontFamily: {
        epilogue: ["Epilogue", "sans-serif"],
      },
      screens: {
        "mob-md": "342px",
        "mob-md-lg": "363px",
        "mob-lg": "383px",
        "mob-xl": "407px",
        "mob-2xl": "526px",
        "3xl": "1920px",
        "4xl": "2560px",
      },
    },
  },
  safeList: [
    "opacity-0",
    "pointer-events-none",
    "invisible",
    "absolute",
    "-top-[9999px]",
    "fixed",
  ],
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".clip-inset-100": {
          clipPath: "inset(100%)",
        },
      });
    },
  ],
};
