/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', '"sans-serif"'],
      },
      colors: {
        "desired-light-orange": "hsl(30, 100%, 52%)",
        "desired-orange": "hsl(25, 97%, 53%)",
        "desired-light-grey": "hsl(217, 12%, 63%)",
        "desired-dark-grey": "hsl(215, 18%, 19%)",
        "desired-dark-blue": "hsl(213, 19%, 18%)",
        "desired-md-dark-blue": "hsl(220, 19%, 16%)",
        "desired-darkest-blue": "hsl(216, 12%, 8%)",
      },
      screens: {
        "3xl": "1920px",
        "4xl": "2560px",
      },
    },
  },
  safelist: ["text-desired-darkest-blue", "bg-white"],
  plugins: [],
};
