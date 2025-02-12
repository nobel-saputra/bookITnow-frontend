/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkest: "#212529",
        star: "#EFB036",
      },
    },
  },
  plugins: [],
};
