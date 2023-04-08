/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        BGdarkblue: {
          500: "rgba(25, 0, 55, 1)",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
