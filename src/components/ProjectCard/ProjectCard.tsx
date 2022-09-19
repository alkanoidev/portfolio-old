import { useNavigate } from "react-router-dom";
import "./style.scss";
import { motion } from "framer-motion";
import ProjectDataType from "../../types/ProjectData";
import { BsGithub } from "react-icons/bs";
import { HiExternalLink } from "react-icons/hi";
import Button from "../Buttons/Button/Button";

type Props = {
  children?: any;
  project: ProjectDataType;
};

export default function ProjectCard({ project }: Props) {
  return (
    <div
      className={`card ${
        project.commingSoon && "opacity-20"
      } w-full flex gap-4 sm:flex-nowrap flex-wrap xl:w-[1200px]`}
    >
      <motion.a
        href={"/projects/" + project.repoName}
        className="sm:w-1/2 w-full relative group"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.2 }}
        // viewport={{ once: true }}
        variants={{
          visible: { x: 0, opacity: 1 },
          hidden: { x: -100, opacity: 0 },
        }}
      >
        <div className="text-2xl transition grid group-hover:opacity-100 opacity-0 rounded-md border-2 border-off-dark absolute z-[1] w-full h-full bg-bg dark:bg-bg-dark place-items-center">
          View More
        </div>
        <img src={project.imageSource} className="rounded-md" alt="" />
      </motion.a>

      <motion.div
        className="sm:w-1/2 w-full flex flex-col gap-4"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.2, delay: 0.2 }}
        // viewport={{ once: true }}
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: -100, opacity: 0 },
        }}
      >
        <section>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </section>
        <section>
          <h2>technologies used:</h2>
          <div className="technologies">
            {project.technologies.map((technology: any, index: number) => (
              <h6 key={index}>{technology}</h6>
            ))}
          </div>
        </section>
        <div className="buttons flex">
          <Button icon={<BsGithub />} variant="secondary">
            <a href={project.githubLink}>View Code</a>
          </Button>
          {project.liveDemoLink !== "" && (
            <Button icon={<HiExternalLink />} variant="primary">
              <a href={project.liveDemoLink}>View Site</a>
            </Button>
          )}
        </div>
      </motion.div>
    </div>
  );
}

const item = {
  initial: {
    opacity: 0,
    scale: 0.5,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
      type: "spring",
    },
  },
};
