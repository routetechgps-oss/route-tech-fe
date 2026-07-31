/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        route: {
          navy: "#072f67",
          blue: "#1266cf",
          orange: "#f97316",
          ink: "#10233e",
          soft: "#f3f7fc",
        },
      },
      boxShadow: {
        route: "0 18px 50px rgba(7, 47, 103, 0.13)",
      },
    },
  },
  plugins: [],
};
