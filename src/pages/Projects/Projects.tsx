import { useState } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./style.scss";
import projectsData from "./projects.json";
import { HiExternalLink } from "react-icons/hi";
import { motion } from "framer-motion";

type Props = {};

const container = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function Projects({}: Props) {
  const [projects, setProjects] = useState<any[]>(projectsData);

  return (
    <div className="projects">
      <h1 className="mt-[70px] sm:mt-0 text-[48px]">some things i’ve built</h1>
      <motion.div
        className="content"
        variants={container}
        initial="initial"
        animate="animate"
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </motion.div>
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
