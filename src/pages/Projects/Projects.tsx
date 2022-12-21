import { useState } from "react";
import ProjectCard from "../../components/ProjectCard";
import "./style.scss";
import projectsData from "./projects.json";
import useAnimateBlock from "../../utils/hooks/useAnimateBlock";

export default function Projects() {
  const [projects, setProjects] = useState<any[]>(projectsData);
  const { divRef: projectsListRef } = useAnimateBlock(0.5);
  return (
    <div className="projects">
      <h1 className="mt-16 sm:mt-0 before:w-32 before:h-4 before:z-[-1] before:bg-primary/90 before:absolute before:bottom-4 before:rounded-sm">
        Projects
      </h1>
      <div className="content" ref={projectsListRef}>
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
          />
        </svg>
      </a>
    </div>
  );
}
