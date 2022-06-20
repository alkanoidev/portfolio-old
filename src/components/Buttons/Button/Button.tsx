import React, { ReactNode, useState } from "react";
import "./style.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary";
  children: ReactNode;
  icon?: ReactNode;
}

export default function Button({
  variant,
  children,
  icon,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
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
      {icon && <span>{icon}</span>}
    </button>
  );
}
