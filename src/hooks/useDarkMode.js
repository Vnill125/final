import { useEffect, useState } from "react";

export default function useDarkMode() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === "dark" ? "light" : "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  return [theme, toggleTheme];
}
