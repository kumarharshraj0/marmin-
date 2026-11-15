export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"DM Serif Display"', 'serif'],
        serif: ['"DM Serif Display"', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        body: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      colors: {
        black: "#0E0B1D",
        purple: {
          950: "#0E0B1D",
          900: "#1A1435",
          800: "#2A1E4D",
          700: "#3D2B70",
          600: "#4D3380",
          500: "#5A3B8C",
          400: "#8B7CC7",
          300: "#A99DD7",
          200: "#C9C2E3",
          100: "#E5E1F2",
          50: "#F4F2F9",
        },
      },
    },
  },
  plugins: [],
}
