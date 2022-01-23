const { spacing, fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.tsx",
    "./layouts/**/*.tsx",
    "./components/**/*.tsx",
    "./styles/**/*.css",
  ],
  plugins: [require("@tailwindcss/typography")],
};
