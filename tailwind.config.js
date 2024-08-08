/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/preline/preline.js",
    "./index.html",
  ],
  plugins: [require("preline/plugin")],
};
