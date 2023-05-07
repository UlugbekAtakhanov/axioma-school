const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customYellow: "#EFFF04"
      },
      screens: {
        'xs': '500px',
        'sm': '640px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'),],
});