/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./index.html"],
  theme: {
    extend: {
      screens: {
        "3xl": "1920px",
        mob: "390px",
        "4xl": "2560px",
      },
    },
  },
  safelist: [
    "text-red-500",
    "focus:border-red-500",
    "border-red-500",
    "focus:border-violet-400",
    "border-gray-200",
  ],
  plugins: [],
};
