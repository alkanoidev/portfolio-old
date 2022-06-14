import React from "react";
import SocialLink from "../SocialLink/SocialLink";
import { BsGithub } from "react-icons/bs";
import { HiExternalLink } from "react-icons/hi";

import "./style.scss";

type Props = {
  image?: string;
  title: string;
  description: string;
  githubLink: string;
  liveDemoLink: string;
  comingSoon?: boolean;
  technologies: Array<JSX.Element>;
};

export default function ProjectCard({
  image,
  title,
  description,
  githubLink,
  liveDemoLink,
  comingSoon,
  technologies,
}: Props) {
  return (
    <div className="card">
      <div className={`card-inner ${comingSoon && "blur-3xl"}`}>
        <div className="circle"></div>
        <div className="circle"></div>

        {image && <img src={image} alt="" />}
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="buttons">
          <SocialLink icon={<BsGithub />} link={githubLink} />
          <SocialLink icon={<HiExternalLink />} link={liveDemoLink} />
        </div>
        <h2>technologies used:</h2>
        <div className="technologies">
          {technologies.map((technology) => technology)}
        </div>
      </div>
    </div>
  );
}
