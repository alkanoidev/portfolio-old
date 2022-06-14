import React from "react";
import SocialLink from "../SocialLink/SocialLink";
import { BsGithub } from "react-icons/bs";
import { HiExternalLink } from "react-icons/hi";

import "./style.scss";

type Props = {
  children: any;
  comingSoon?: boolean;
};

export default function ProjectCard({ children, comingSoon }: Props) {
  return (
    <div className={`card  ${comingSoon && "blur-sm"}`}>
      <div className={`card-inner`}>
        <div className="circle"></div>
        <div className="circle"></div>

        {children}
      </div>
    </div>
  );
}
