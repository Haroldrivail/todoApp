import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // 1. Use lazy initialization to avoid setState in effect
  const [systemTheme, setSystemTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "light";
  });

  // 2. Only listen for system theme changes (no initial setState)
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handler = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Get the actual theme to apply
  const resolvedTheme = theme === "system" ? systemTheme : theme;

  // 3. Apply the resolved theme to the document
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", resolvedTheme);
  }, [resolvedTheme]);

  return (
    <nav className="navbar bg-base-200 px-4">
      <div className="flex-1">
        <span className="text-xl font-bold">Todo App</span>
      </div>
      <div className="flex-none">
        <select
          className="select select-bordered"
          value={theme}
          onChange={(e) => toggleTheme(e.target.value)}
        >
          <option value="light">☀️ Light</option>
          <option value="dark">🌙 Dark</option>
          <option value="system">
            🖥️ System{theme === "system" ? ` (${systemTheme})` : ""}
          </option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
