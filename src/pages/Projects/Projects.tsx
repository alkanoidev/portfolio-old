import React, { useState } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./style.scss";
import projectsData from "./projects.json";
import SocialLink from "../../components/SocialLink/SocialLink";
import { BsGithub, BsLink } from "react-icons/bs";
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
      <h1 className="mt-[70px] sm:mt-0">some things i’ve built</h1>
      <motion.div
        className="content"
        variants={container}
        initial="initial"
        animate="animate"
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            comingSoon={project.comingSoon}
            githubRepoName={project.repoName}
            image={project.image}
          >
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
