export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1024px" },
      md: { max: "767px" },
      mobile: { max: "550px" },
      sm: { max: "639px" },
    },
    extend: {},
  },
  plugins: [],
};
