import { useState, useEffect } from "react";

const DarkModeToggle = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme); 
    localStorage.setItem("theme", theme);   
  }, [theme]);

 
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <aside aria-label="Theme toggle">
      <button
        className="text-3xl btn bg-gradient-to-r from-stone-700 to-amber-300 transition duration-300"
        onClick={toggleTheme}
        aria-pressed={theme === "dark"}
        aria-label={theme === "light" ? "Enable dark mode" : "Enable light mode"}
      >
        {theme === "light" ? "🌙" : "🌞"}
      </button>
    </aside>
  );
};

export default DarkModeToggle;
