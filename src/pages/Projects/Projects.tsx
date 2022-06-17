import React, { useState } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./style.scss";
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
          <ProjectCard key={index} comingSoon={project.comingSoon}>
            {project.image && (
              <a
                className="thumbnail-link"
                href={project.liveDemoLink}
                target="_blank"
              >
                <img
                  src={project.image}
                  alt=""
                  className={`thumbnail ${
                    !project.comingSoon && "group-hover:grayscale-0"
                  }`}
                />
              </a>
            )}
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <div className="buttons">
              <SocialLink icon={<BsGithub />} link={project.githubLink} />
              {project.liveDemoLink !== "" && (
                <SocialLink
                  icon={<HiExternalLink />}
                  link={project.liveDemoLink}
                />
              )}
            </div>
            <h2>technologies used:</h2>
            <div className="technologies">
              {project.technologies.map((technology: any, index: number) => (
                <h6 key={index}>{technology}</h6>
              ))}
            </div>
          </ProjectCard>
        ))}
      </div>
    </div>
  );
}
