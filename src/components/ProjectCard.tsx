import ProjectDataType from "../types/ProjectData";
import { BsGithub } from "react-icons/bs";
import { HiExternalLink } from "react-icons/hi";
import Button from "./Buttons/Button";

type Props = {
  children?: any;
  project: ProjectDataType;
};

export default function ProjectCard({ project }: Props) {
  return (
    <a
      href={"/projects/" + project.repoName}
      className={`card ${
        project.commingSoon && "opacity-20"
      } w-full flex flex-col gap-4 bg-off-white dark:bg-off-dark p-5 z-0 transition rounded-lg relative group opacity-0`}
    >
      <section>
        <h1 className="text-3xl">{project.title}</h1>
        <p className="text-lg text-bg-dark/80 dark:text-bg/80 mt-2">
          {project.description}
        </p>
      </section>
      <section>
        <h2 className="text-2xl mb-2">Technologies Used:</h2>
        <div className="technologies flex flex-wrap w-full gap-3 text-primary text-labels">
          {project.technologies.map((technology: any, index: number) => (
            <h6 key={index}>{technology}</h6>
          ))}
        </div>
      </section>
      <section className="buttons flex flex-wrap gap-4 mt-2">
        <Button icon={<BsGithub />} variant="secondary">
          <a href={project.githubLink}>View Code</a>
        </Button>
        {project.liveDemoLink !== "" && (
          <Button icon={<HiExternalLink />} variant="primary">
            <a href={project.liveDemoLink}>View Site</a>
          </Button>
        )}
      </section>
    </a>
  );
}
