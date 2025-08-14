/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,js,ts,jsx,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        river: {
          50: "#eff7fa",
          100: "#d8eef5",
          300: "#90c9df",
          600: "#2b6b8a",
          800: "#184655"
        },
        silt: {
          100: "#f3efe7",
          300: "#e2d5b9",
          700: "#8a6f3c"
        }
      },
      borderRadius: {
        '2xl': '1.25rem'
      }
    },
  },
  plugins: [],
}
