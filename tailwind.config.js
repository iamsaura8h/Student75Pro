/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        float: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        giest:["Geist","sans-serif"],
        cabin:["Cabin","sans-serif"],
        roboto:["Roboto","sans-serif"]
        
      },
    },
  },
  plugins: [],
};
