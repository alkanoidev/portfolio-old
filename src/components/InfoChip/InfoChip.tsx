import React from "react";

type Props = {
  icon?: JSX.Element;
  title?: string;
  onClick?: () => void;
  email?: boolean;
};

export default function InfoChip({ icon, title, onClick, email }: Props) {
  return (
    <div
      className={`flex items-center gap-2 text-body cursor-pointer`}
      onClick={onClick}
    >
      <div className="rounded-full p-2 bg-primary text-icon-sm text-bg-dark dark:text-bg flex items-center justify-center">
        {icon}
      </div>
      {!email && title}
      {email && (
        <div>
          {title}
          <h6 className="text-sm opacity-50">click to copy to clipboard</h6>
        </div>
      )}
    </div>
  );
}
