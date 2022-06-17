import React, { useEffect, useState } from "react";

type Props = {
  children: any;
};
type Theme = "light" | "dark";
type ThemeContext = {
  theme: Theme;
  toggleTheme: () => void;
};

export const ThemeContext = React.createContext<ThemeContext>(
  {} as ThemeContext
);

export default function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    if ("theme" in localStorage) {
      setTheme(localStorage.theme);
    } else {
      setTheme(
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
      );
    }

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    localStorage.theme = theme === "light" ? "dark" : "light";
    setTheme(theme === "light" ? "dark" : "light");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
