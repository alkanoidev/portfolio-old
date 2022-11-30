import { useState } from "react";
import ProjectCard from "../../components/ProjectCard";
import "./style.scss";
import projectsData from "./projects.json";
import { HiExternalLink } from "react-icons/hi";
import TextBehind from "../../components/TextBehind";


export default function Projects() {
  const [projects, setProjects] = useState<any[]>(projectsData);

  return (
    <div className="projects">
      <TextBehind>Projects</TextBehind>
      <h1 className="mt-16 sm:mt-0">
        Projects
      </h1>
      <div
        className="content"
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      <a
        href="https://github.com/alkanoidev"
        target="_blank"
        id="gitlink"
        className="text-body mt-5 sm:mt-12 text-center flex gap-2 items-center"
      >
        check my other projects on github.
        <HiExternalLink />
      </a>
    </div>
  );
}
