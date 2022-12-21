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
      className={`w-[354px] h-[456px] p-4 bg-off-white dark:bg-off-dark rounded-3xl flex flex-col justify-between`}
    >
      <div>
        <h1 className="text-2xl my-4">{project.title}</h1>
        <div className="w-full flex flex-wrap gap-3">
          {project.technologies.map((technology) => (
            <div className="text-xs font-normal border-2 border-primary/30 bg-bg dark:bg-bg-dark rounded-full py-1 px-2">{technology}</div>
          ))}
        </div>
        <div className="technologies"></div>
        <p className="text-body opacity-70 font-normal my-4">
          {project.description}
        </p>
      </div>

      <div className="flex gap-4 w-full mt-2">
        <a href={project.githubLink}>
          <Button small variant="secondary" icon={<BsGithub />}></Button>
        </a>
        <a href={project.liveDemoLink} className="w-full h-full flex-grow-[2]">
          <Button variant="primary" classes="w-full">
            Live View
          </Button>
        </a>
      </div>
    </a>
  );
}
