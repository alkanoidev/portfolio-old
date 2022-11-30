import ProjectDataType from "../types/ProjectData";
import { BsGithub } from "react-icons/bs";
import { HiExternalLink } from "react-icons/hi";
import Button from "./Buttons/Button";
import { FaArrowRight } from "react-icons/fa";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
type Props = {
  children?: any;
  project: ProjectDataType;
};

export default function ProjectCard({ project }: Props) {
  const aRef = useRef<HTMLAnchorElement | null>(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const animateArrow = gsap.fromTo(
        ".arrow",
        { right: 100, ease: "power3.out" },
        { right: 16 }
      );
      aRef.current?.addEventListener("mouseenter", () => {
        animateArrow.restart();
      });
      aRef.current?.addEventListener("mouseleave", () => {
        animateArrow.play();
      });
    }, aRef);

    return () => ctx.revert();
  }, []);
  return (
    <a
      ref={aRef}
      href={"/projects/" + project.repoName}
      className={`card ${
        project.commingSoon && "opacity-20"
      } w-full flex flex-col gap-4 bg-off-white dark:bg-off-dark p-5 transition rounded-lg relative group`}
    >
      <section>
        <h1 className="text-5xl font-bold">{project.title}</h1>
        <p className="text-lg text-bg-dark/80 dark:text-bg/80 mt-2">{project.description}</p>
      </section>
      <section>
        <h2 className="text-lg font-bold mb-2">Technologies Used:</h2>
        <div className="technologies flex flex-wrap w-full gap-3 text-primary text-labels">
          {project.technologies.map((technology: any, index: number) => (
            <h6 key={index}>{technology}</h6>
          ))}
        </div>
      </section>
      <section className="buttons flex gap-4 mt-2">
        <Button icon={<BsGithub />} variant="secondary">
          <a href={project.githubLink}>View Code</a>
        </Button>
        {project.liveDemoLink !== "" && (
          <Button icon={<HiExternalLink />} variant="primary">
            <a href={project.liveDemoLink}>View Site</a>
          </Button>
        )}
      </section>
      <div className="arrow absolute bottom-[40%] group-hover:opacity-100 opacity-0 transition">
        <FaArrowRight className="arrow" />
      </div>
    </a>
  );
}
