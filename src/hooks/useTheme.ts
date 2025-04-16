import { useState, useEffect } from "react";

interface Theme {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const useTheme = () => {
  const [theme, setTheme] = useState<Theme["theme"]>(() => {
    const saved = localStorage.getItem("theme");
    return (
      saved ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
    );
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return { theme, toggleTheme };
};

export default useTheme;
