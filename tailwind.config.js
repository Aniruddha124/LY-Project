/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    // "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  important: true,
  plugins: [],
  theme: {
    extend: {
      colors: {
        "darkerbg":"#21222c",
        "darkbg": "#282a36",
        "dark-curent":"#44475a",
        "dark-selection":"#44475a",
        "dark-comment":"#6272a4",
        "logo-yellow":"#EBD053",
        "drac-green":"#50fa7b",
        "drac-red":"#ff5555",
        "drac-purple":"#bd93f9",
        "drac-yellow":"#f1fa8c",
        "drac-orange":"#ffb86c",
        "drac-cyan":"#8be9fd",

        




      },
    },
  },
};
