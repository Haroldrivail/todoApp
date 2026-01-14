import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [systemTheme, setSystemTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "light";
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handler = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const resolvedTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", resolvedTheme);
  }, [resolvedTheme]);

  const nextTheme = () => {
    if (theme === "light") return "dark";
    if (theme === "dark") return "system";
    return "light";
  };

  const handleToggle = () => {
    toggleTheme(nextTheme());
  };

  const getIcon = () => {
    if (theme === "system") return "system";
    if (theme === "dark") return "moon";
    return "sun";
  };

  return (
    <nav className="navbar bg-base-200 px-4">
      <div className="flex-1">
        <span className="text-xl font-bold">Todo App</span>
      </div>
      <div className="flex-none">
        <button
          className="btn btn-ghost btn-circle"
          onClick={handleToggle}
          title={`Current: ${theme}${
            theme === "system" ? ` (${systemTheme})` : ""
          }`}
        >
          {/* Sun icon */}
          {getIcon() === "sun" && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="m4.93 4.93 1.41 1.41"></path>
              <path d="m17.66 17.66 1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.34 17.66-1.41 1.41"></path>
              <path d="m19.07 4.93-1.41 1.41"></path>
            </svg>
          )}

          {/* Moon icon */}
          {getIcon() === "moon" && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            </svg>
          )}

          {/* System icon */}
          {getIcon() === "system" && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="2" y="3" width="20" height="14" rx="2"></rect>
              <path d="M8 21h8"></path>
              <path d="M12 17v4"></path>
            </svg>
          )}
        </button>
        <span className="text-xs ml-2 hidden sm:inline">
          {theme.charAt(0).toUpperCase() + theme.slice(1)}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
