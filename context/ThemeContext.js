import React, { createContext, useState } from "react";
import Schemes from "../resources/Schemes";
export const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [theme, setTheme] = useState(Schemes.DEF);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  const toggleTheme = (value) => {
    setTheme(value);
  };

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, isDarkMode, toggleDarkMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
