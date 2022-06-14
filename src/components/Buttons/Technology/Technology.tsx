import React, { useState } from "react";
import "./style.scss";
type Props = {
  icon: JSX.Element;
  title: string;
};

export default function Technology({ icon, title }: Props) {
  const [tooltip, setTooltip] = useState<boolean>(false);

  return (
    <button
      className="text-headline technology flex justify-center relative transition text-primary bg-clip-text"
      onMouseEnter={() => {
        setTooltip(true);
      }}
      onMouseLeave={() => {
        setTooltip(false);
      }}
    >
      {tooltip && (
        <div
          className="capitalize max-w-[100px] absolute z-10 top-[-70%] text-code font-extralight bg-off-white dark:bg-off-dark 
            text-bg-dark dark:text-bg px-3 py-2 rounded-sm transition-transform tooltip"
        >
          {title}
        </div>
      )}
      {icon}
    </button>
  );
}
