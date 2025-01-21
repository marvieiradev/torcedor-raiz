/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "18px"],
      base: ["16px", "24px"],
      lg: ["20px", "28px"],
      xl: ["24px", "32px"],
      "2xl": ["32px", "40px"],
      "3xl": ["48px", "56px"],
      "4xl": ["56px", "64px"],
      "5xl": ["64px", "70px"],
    },
    extend: {
      colors: {
        primary: "#0B0E0F",
        secondary: "#171C1F",
        card: "#1F2937",
        string: "#FFFFFF",
        string_accent: "#FACC15",
        black: "#040404",
        white: "#FFFFFF",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};
