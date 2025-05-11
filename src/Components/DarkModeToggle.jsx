import { useState, useEffect } from "react";

const DarkModeToggle = () => {
  // State to manage the current theme
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  // Effect to apply the theme on initial load and whenever the theme changes
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme); // Set the data-theme attribute
    localStorage.setItem("theme", theme);   // Save the theme to localStorage
  }, [theme]);

  // Toggle between light and dark mode
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <button
      className={`btn btn-primary transition duration-300`}
      onClick={toggleTheme}
    >
      {theme === "light" ? "🌙 Dark Mode" : "🌞 Light Mode"}
    </button>
  );
};

export default DarkModeToggle;
