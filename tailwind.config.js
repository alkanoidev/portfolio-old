module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      colors: {
        bg: {
          DEFAULT: "#f4f4f4",
          dark: "#121212",
        },
        off: {
          white: "#dcdcdc",
          dark: "#0b0b0b",
        },
        primary: "#68af73",
        secondary: "#62aeef",
        lineColor: {
          DEFAULT: "rgba(30, 45, 61, 1)",
          dark: "rgba(234, 234, 234, 1)",
        },
      },
      fontSize: {
        headline: "62px",
        subh: "32px",
        "icon-sm": "24px",
        body: "18px",
        labels: "16px",
        code: "14px",
      },
      animation: { shine: "shimmer 2s infinite" },
      keyframes: {
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
      },
    },
  },
  plugins: [],
};
