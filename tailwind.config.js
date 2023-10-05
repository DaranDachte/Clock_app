/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-image": "var(--background-image)",
        "added-background-image": "var(--added-background-image)",
        "added-color": "var(--added-color)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
