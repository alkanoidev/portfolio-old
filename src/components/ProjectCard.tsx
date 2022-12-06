import ProjectDataType from "../types/ProjectData";
import { BsGithub } from "react-icons/bs";
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
          <Button
            icon={
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
            }
            variant="primary"
          >
            <a href={project.liveDemoLink}>View Site</a>
          </Button>
        )}
      </section>
    </a>
  );
}
