import React, { useContext, useEffect, useState } from "react";
import "./style.scss";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import { ThemeContext } from "../../../context/ThemeProvider";
type Props = {};

export default function ThemeToggle({}: Props) {
  const { theme, toggleTheme } = useContext(ThemeContext);

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
