import React, { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary";
  children: ReactNode;
  icon?: ReactNode;
  shine?: boolean;
}

export default function Button({
  variant,
  children,
  icon,
  shine,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`
      text-labels shadow font-semibold
    text-bg-dark dark:text-bg
      py-[10px] px-[20px] rounded-lg ring-2
      relative
      overflow-hidden
      transition-[background_0.2s_cubic-bezier(0.25,0.01,0.25,1)_0s]
      flex items-center justify-center gap-2
      ${
        shine &&
        `before:bg-gradient-to-r before:from-transparent dark:before:via-rose-50/20 before:via-zinc-500/20  before:to-transparent
         before:absolute before:inset-0 before:-translate-x-full before:w-full before:h-full
         before:animate-shine
        `
      }
        button
        ${
          variant === "primary"
            ? "ring-primary hover:bg-primary/50"
            : "ring-secondary hover:bg-secondary/50"
        }`}
    >
      {children}
      {icon && <span className="font-normal text-icon-sm">{icon}</span>}
    </button>
  );
}
