/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "desired-red": "hsl(0, 100%, 74%)",
        "modified-red": "hsl(0, 97%, 70%)",
        "desired-blue": "hsl(248, 32%, 49%)",
        "desired-green": "hsl(154, 59%, 51%)",
      },
      backgroundImage: {
        "intro-desktop": "url('/images/bg-intro-desktop.png')",
        "intro-mobile": "url('/images/bg-intro-mobile.png')",
      },
      screens: {
        "3xl": "1920px",
        "4xl": "2560px",
      },
    },
  },
  plugins: [],
};
