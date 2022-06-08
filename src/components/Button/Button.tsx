import React, { useState } from "react";
import "./style.scss";

type Props = {
  title?: string;
  type: string;
  children: any;
};
type StyledProps = {
  type1: string;
};

export default function Button({ type, children }: Props) {
  const [dark, setDark] = useState(true);
  return (
    <button
      className={`
        button
        ${
          type === "primary"
            ? "ring-primary before:bg-primary"
            : "ring-secondary before:bg-secondary"
        }
        hover:text-bg dark:hover:text-bg-dark
      `}
    >
      {children}
      <div></div>
    </button>
  );
}
