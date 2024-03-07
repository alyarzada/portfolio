import { ReactNode, createContext, useContext } from "react";
import { getLocalStorage, setLocalStorage } from "@/utils/localStorage";
import { useEffect, useState } from "react";

type Theme = "dark" | "light";

interface IContext {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<IContext | null>(null);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(
    getLocalStorage<Theme>("theme") === "dark" ? "dark" : "light"
  );

  useEffect(() => {
    if (
      getLocalStorage<Theme>("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setLocalStorage("theme", theme);
    } else {
      document.documentElement.classList.remove("dark");
      setLocalStorage("theme", theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const value = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme can't be use outside of ThemeProvider");
  }

  return context;
};
