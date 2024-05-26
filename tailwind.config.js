/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "max-1600": { max: "1600px" },
        "max-800": { max: "800px" },
      },
    },
  },
  plugins: [],
};
