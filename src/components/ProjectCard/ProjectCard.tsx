import React from "react";
import "./style.scss";

type Props = {
  children: any;
  comingSoon?: boolean;
};

export default function ProjectCard({ children, comingSoon }: Props) {
  return (
    <div className={`card  ${comingSoon && "blur-sm"} group`}>
      <div className={`card-inner`}>
        <div className="circle"></div>
        <div className="circle"></div>

        {children}
      </div>
    </div>
  );
}
