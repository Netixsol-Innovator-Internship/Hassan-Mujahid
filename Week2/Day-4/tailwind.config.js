/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        spaceMono: ["'Space Mono'", "monospace"],
      },
      colors: {
        "desired-very-light-gray": "hsl(189, 41%, 97%)",
        "desired-light-gray-cyan": "hsl(185, 41%, 84%)",
        "desired-grayish-cyan": "hsl(184, 14%, 56%)",
        "desired-dark-grayish-cyan": "hsl(186, 14%, 43%)",
        "desired-strong-cyan": "hsl(172, 67%, 45%)",
        "desired-dark-cyan": "hsl(183, 100%, 15%)",
      },
    },
  },
  plugins: [],
};