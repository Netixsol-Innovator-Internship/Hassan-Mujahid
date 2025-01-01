/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
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
      },
    },
  },
  plugins: [],
};
