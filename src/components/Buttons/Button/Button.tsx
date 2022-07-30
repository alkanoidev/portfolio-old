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
            ? "ring-primary before:bg-primary"
            : "ring-secondary before:bg-secondary"
        }
        hover:text-bg-dark dark:hover:text-bg-dark
      `}
    >
      {children}
      {icon && <span>{icon}</span>}
    </button>
  );
}
