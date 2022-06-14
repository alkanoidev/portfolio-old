import React, { useEffect, useState } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./style.scss";
import { DiReact, DiJavascript1, DiJavascript } from "react-icons/di";
import projectsData from "./projects.json";
import SocialLink from "../../components/SocialLink/SocialLink";
import { BsGithub } from "react-icons/bs";
import { HiExternalLink } from "react-icons/hi";
type Props = {};

export default function Projects({}: Props) {
  const [projects, setProjects] = useState<any[]>(projectsData);

  return (
    <div className="projects">
      <h1>Some Things I’ve Built</h1>
      <div className="content">
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            {project.image && <img src={project.image} alt="" />}
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <div className="buttons">
              <SocialLink icon={<BsGithub />} link={project.githubLink} />
              <SocialLink
                icon={<HiExternalLink />}
                link={project.liveDemoLink}
              />
            </div>
            <h2>technologies used:</h2>
            <div className="technologies">
              <DiReact /> <DiJavascript />
            </div>
          </ProjectCard>
        ))}
      </div>
    </div>
  );
}
