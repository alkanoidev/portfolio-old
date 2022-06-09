import React, { useEffect, useState } from "react";
import "./style.scss";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
type Props = {};

export default function ThemeToggle({}: Props) {
  const [theme, setTheme] = useState<string>(localStorage.theme);
  useEffect(() => {
    localStorage.theme = theme;
  }, [theme]);

  return (
    <button
      onClick={() => {
        if (theme === "light") {
          setTheme("dark");
        } else {
          setTheme("light");
        }
      }}
    >
      {theme === "light" ? <BsMoonStarsFill /> : <BsSunFill />}
    </button>
  );
}
