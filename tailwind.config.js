export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        quiz: {
          black: { 
            100: "#1C1C1C",
            200: "#1C1C1E",
            300: "#303030",
           },
          gray: {
            100: "#8B8B8B",
            200: "#979799",
            300: "#3B3B3D",
            400: "#3D3D3F",
            500: "#828282",
          },
        },
      },
    },
  },
  plugins: [],
};
