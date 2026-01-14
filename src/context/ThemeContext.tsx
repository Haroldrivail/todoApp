import { createContext } from "react";

interface ThemeContextType {
  theme: string;
  toggleTheme: (theme: string) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

