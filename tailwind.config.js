/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "from-green-400",

    "from-blue-400",

    "from-gray-400",

    "to-gray-700",

    "to-blue-700",

    "to-green-700",

		'from-red-400',

		'to-red-700'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
