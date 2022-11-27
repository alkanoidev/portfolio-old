import Technology from "../../components/Buttons/Technology/Technology";
import {
  FaFigma,
  FaGitAlt,
  FaHtml5,
  FaNodeJs,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import {
  SiJavascript,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function TechnologiesSection() {
  const technologies = useRef<HTMLDivElement | null>(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".technology", {
        opacity: 1,
        stagger: 0.35,
      });
    }, technologies);

    return () => ctx.revert();
  }, []);
  return (
    <p className="pb-6 mt-16 sm:mt-14 flex flex-col w-full">
      <h1 className=""># Skills</h1>
      <p>
        The main area of my expertise is <span>Front-end development</span>. I
        enjoy building intuitive applications that are fast and built with best
        practices.
        <br />
        <br />
        I am into code refactoring and organizing.
        <br />
        <br />I also have experience in
        <span> Backend development </span>using NodeJS and popular Relational
        Database Management Systems as well as Nonrelational.
      </p>

      <h2 className="mt-16 scroll-trigger">## Tools and Technologies</h2>
      <div ref={technologies} className="tech">
        <Technology icon={<FaHtml5 />} title="HTML5" />
        <Technology icon={<DiCss3 />} title="CSS3" />
        <Technology icon={<SiJavascript />} title="JavaScript" />
        <Technology icon={<SiTypescript />} title="TypeScript" />
        <Technology icon={<FaReact />} title="React" />
        <Technology icon={<FaNodeJs />} title="NodeJS" />
        <Technology icon={<FaSass />} title="Sass" />
        <Technology icon={<SiTailwindcss />} title="TailwindCss" />
        <Technology icon={<SiMongodb />} title="MongoDB" />
        <Technology icon={<GrMysql />} title="MySQL" />
        <Technology icon={<FaGitAlt />} title="Git" />
        <Technology icon={<FaFigma />} title="Figma" />
      </div>
    </p>
  );
}
