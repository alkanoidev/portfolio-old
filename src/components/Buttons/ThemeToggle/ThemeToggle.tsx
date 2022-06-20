import React from "react";
import "./style.scss";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import { useThemeContext } from "../../../context/ThemeProvider";
type Props = {};

export default function ThemeToggle({}: Props) {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button
      className="text-icon-sm"
      onClick={() => {
        toggleTheme();
      }}
    >
      {theme === "light" ? <BsMoonStarsFill /> : <BsSunFill />}
    </button>
  );
}
