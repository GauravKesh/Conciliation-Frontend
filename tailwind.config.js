/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        primary:"",
        secondary : "",
      }
    },
  },
  plugins: [require("daisyui")],
};

