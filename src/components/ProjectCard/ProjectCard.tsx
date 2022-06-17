import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";

type Props = {
  children: any;
  comingSoon?: boolean;
  image?: string;
  demo?: string;
  githubRepoName?: string;
};

export default function ProjectCard({
  children,
  comingSoon,
  githubRepoName,
}: Props) {
  const navigate = useNavigate();

  return (
    <div
      className={`card  ${comingSoon && "opacity-20"} group`}
      onClick={() => {
        navigate(`${githubRepoName}`);
      }}
    >
      <div className={`card-inner`}>
        <div className="circle"></div>
        <div className="circle"></div>

        {children}
      </div>
    </div>
  );
}
