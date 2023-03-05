/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["'Poppins'", "sans-serif"],
    },
    backgroundImage: {
      "pack-train":
        "url('https://tailwindcomponents.com/gradient-generator/assets/header.a6837f08.webp')",
    },
    extend: {},
  },
  plugins: [],
};
