import React, { useContext, useEffect, useState } from "react";
import "./style.scss";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import ThemeContext from "../../../context/ThemeContext";
type Props = {};

export default function ThemeToggle({}: Props) {
  const { theme, setTheme } = useContext(ThemeContext);
  useEffect(() => {
    localStorage.theme = theme;
  }, [theme]);

  return (
    <button
      className="text-icon-sm"
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
