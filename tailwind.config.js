/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui,require('flowbite/plugin')],
}