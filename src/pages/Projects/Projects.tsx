import React, { useEffect, useState } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./style.scss";
import { DiReact, DiJavascript1, DiJavascript } from "react-icons/di";
import projectsData from "./projects.json";
type Props = {};

export default function Projects({}: Props) {
  const [projects, setProjects] = useState<string>();
  useEffect(() => {
    setProjects(JSON.parse(JSON.stringify(projectsData)));
    console.log(projects);
  }, []);

  return (
    <div className="projects">
      <h1>Some Things I’ve Built</h1>
      <div className="content">
        <ProjectCard
          title="Nasa Apis"
          description="Explore NASA apis such as Picture Of the Day, Mars Rover Photos and NASA Image and Video Library"
          githubLink="https://github.com/alkanoidev/nasa-apis"
          liveDemoLink="https://nasa-apis.netlify.app/"
          technologies={[<DiReact />, <DiJavascript />]}
        />
        {/* {projects.map((project) => (
          <ProjectCard
            title={project.title}
            description={project.description}
            githubLink={project.githubLink}
            liveDemoLink={project.liveDemoLink}
            technologies={[<DiReact />, <DiJavascript />]}
          />
        ))} */}
      </div>
    </div>
  );
}
