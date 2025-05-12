/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class", 
  plugins: [require("daisyui")], 
  daisyui: {
    themes: [
      {
        light: {
          primary: "#2563eb",       // Blue shade for light mode
          secondary: "#d97706",     // Amber shade for light mode
          accent: "#14b8a6",        // Teal for accent
          neutral: "#f3f4f6",      // Light gray background
          neutralText:"#1f2937",       
          "base-100": "#ffffff",    // White base
          "primary-content": "#ffffff",
        },
        dark: {
          primary: "#1d4ed8",       // Dark blue for dark mode
          secondary: "#292524",     // Dark stone for dark mode
          accent: "#0d9488",        // Dark teal for accent
          neutral: "#1f2937",       // Dark gray background
          neutralText:"#f3f4f6",
          "base-100": "#111827",    // Dark base
          "primary-content": "#ffffff",
        },
      },
    ],
  },
}
