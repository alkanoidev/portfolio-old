import React, { useState } from "react";
import "./style.scss";

type Props = {
  title?: string;
  type: string;
  children: any;
  icon?: any;
};
type StyledProps = {
  type1: string;
};

export default function Button({ type, children, icon }: Props) {
  const [dark, setDark] = useState(true);
  return (
    <button
      className={`
        button
        ${
          type === "primary"
            ? "ring-primary before:bg-gradient-to-tr before:from-primary before:to-green-500"
            : "ring-secondary before:bg-gradient-to-tr before:from-secondary before:to-blue-500"
        }
        hover:text-bg dark:hover:text-bg-dark
      `}
    >
      {children}
      <span>{icon}</span>
    </button>
  );
}
