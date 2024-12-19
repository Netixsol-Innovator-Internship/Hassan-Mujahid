/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "hsl(233, 47%, 7%)",
        "dark-desaturated-blue": "hsl(244, 38%, 16%)",
        "soft-violet": "hsl(277, 64%, 61%)",
        grape: "#862e9c",
        violet: "hsl(277, 54%, 32%)",
      },
    },
  },
  plugins: [],
};
