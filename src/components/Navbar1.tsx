import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const themes = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
];

export const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

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
          {themes.map((t) => (
            <option key={t} value={t}>
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </option>
          ))}
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
