module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scale: {
        '105': '1.003',
      },
      colors: {
        'primary-black': '#141313',
        'secondary-black': '#272525',
        'primary-white': '#F5F5F5',
        'secondary-white': '#FEF9F9',
        'primary-dark': '#5481A8',
        'primary-light': '#6665FE',
        'secondary-one': '#B8FEB8',
        'secondary-two': '#6EFEFE',
      },
      fontFamily: {
        Poppins: ["Poppins, sans-serif"],
        Montserrat: ["Montserrat, sans-serif"],
        Georgia: ["Georgia, serif"],
        Mecury: ["Mercury Text G2, Times New Roman, sans-serif"],
        Segeo: ["Segoe UI, Arial, sans-serif"],
      }
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}
