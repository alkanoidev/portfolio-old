import React from "react";
import "./style.scss";

type Props = {
  title: string;
  type: string;
};
type StyledProps = {
  type1: string;
};

export default function Button({ title, type }: Props) {
  return (
    <button
      className={`
        button
        ${
          type === "primary"
            ? "border-primary before:bg-primary"
            : "border-secondary before:bg-secondary"
        }
      `}
    >
      {title}
      <div></div>
    </button>
  );
}
