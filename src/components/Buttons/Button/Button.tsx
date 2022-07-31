import React, { ReactNode } from "react";
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
            ? "ring-primary hover:bg-primary/50"
            : "ring-secondary hover:bg-secondary/50"
        }`}
    >
      {children}
      {icon && <span>{icon}</span>}
    </button>
  );
}
