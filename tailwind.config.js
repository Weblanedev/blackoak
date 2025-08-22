/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0b0b0c",
        "bg-elev": "#101114",
        text: "#e9eef3",
        muted: "#a9b3bd",
        accent: "#2bd4a7",
        "accent-2": "#6aa6ff",
        border: "#1b1c20",
        card: "#0f1012",
      },
      fontFamily: {
        manrope: [
          "Manrope",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Ubuntu",
          "Cantarell",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "Apple Color Emoji",
          "Segoe UI Emoji",
        ],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      // Custom screen breakpoints for responsive design - min widths
      screens: {
        xs: "480px", // Smaller phone size
        sm: "640px", // Normal phone size
        md: "768px", // Tablet devices
        lg: "1024px", // Laptop mini size
        xl: "1280px", // Extra large Laptop
        "2xl": "1536px", // 2x extra large devices
      },
    },
  },
  plugins: [],
};
