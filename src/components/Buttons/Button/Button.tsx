import React, { useState } from "react";
import "./style.scss";

type Props = {
  title?: string;
  variant: string;
  children: any;
  icon?: any;
  type?: any;
};

export default function Button({ variant, children, icon, type }: Props) {
  return (
    <button
      type={type}
      className={`
        button
        ${
          variant === "primary"
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
