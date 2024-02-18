/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainDarkGray: "#111111",
        mainLightGray: "#212121",
        mainDarkBlue: "#0a192f",
        //mainGoldColor: "#DEA057",
        lightGoldColor: "#DEA057",
        mainGoldColor: "#ff9f0d",
        strongGoldColor: "#ff9f0d",
      },
    },
  },
  plugins: [],
};
