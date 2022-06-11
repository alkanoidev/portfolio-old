import React from "react";

type Props = {
  icon?: JSX.Element;
  title?: string;
};

export default function InfoChip({ icon, title }: Props) {
  return (
    <div className="flex items-center gap-2 text-icon-sm">
      <div className="rounded-full p-2 bg-primary text-bg dark:text-bg-dark flex items-center justify-center">
        {icon}
      </div>
      {title}
    </div>
  );
}
