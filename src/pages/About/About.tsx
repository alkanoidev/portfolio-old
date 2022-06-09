import React from "react";
import Button from "../../components/Buttons/Button/Button";
import Layout from "../../components/Layout/Layout";
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaNodeJs,
  FaSass,
  FaGitAlt,
  FaAndroid,
  FaBootstrap,
  FaFigma,
  FaMapMarkerAlt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiCsharp,
  SiKotlin,
  SiExpress,
  SiTailwindcss,
  SiMongodb,
  SiAdobephotoshop,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import "./style.scss";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { SiHashnode } from "react-icons/si";
import InfoChip from "../../components/InfoChip/InfoChip";
import { IoIosMail } from "react-icons/io";

type Props = {};

export default function About({}: Props) {
  return (
    <Layout>
      <div className="about">
        <div className="about-content">
          <div className="flex flex-col sm:flex-row sm:items-center items-start justify-start gap-3">
            <InfoChip title="Kragujevac, Serbia" icon={<FaMapMarkerAlt />} />
            <InfoChip title="alkanoidev@gmail.com" icon={<IoIosMail />} />
          </div>
          <h1># About</h1>
          <p className="pb-6">
            I'm a <span>junior developer</span> who enjoys building things that
            live on the internet.
            <br />
            <br />
            I'm a self-motivated learner who can work independently and
            collaboratively in a team.
            <br />
            <br />
            I love working on fun projects and keeping up with the programming
            world that is constantly growing.
            <br />
            <br />I also love open-source, UI design, and orange cats :)
          </p>
          <div className="flex items-center gap-3">
            <Button type="primary">contact_me</Button>
            <a
              href="https://github.com/alkanoidev"
              target="_blank"
              className="text-subh text-bg-dark dark:text-bg"
            >
              <BsGithub />
            </a>
            <a
              href="https://twitter.com/alkanoidev/"
              target="_blank"
              className="text-subh text-bg-dark dark:text-bg"
            >
              <BsTwitter />
            </a>
            <a
              href="https://alkanoidev.hashnode.dev/"
              target="_blank"
              className="text-subh text-bg-dark dark:text-bg"
            >
              <SiHashnode />
            </a>
          </div>

          <h1 className="pt-20 sm:pt-32"># Skills</h1>
          <p>
            The main area of my expertise is <span>Front-end development</span>.
            I enjoy building intuitive applications that are fast and built with
            best practices.
            <br />
            <br />
            I am into code refactoring and organizing.
            <br />
            <br />I also have experience with
            <span> Full-stack development </span>using NodeJS and popular
            Relational Database Management Systems as well as Nonrelational.
          </p>

          <h2 className="pt-6 pb-6">## Tools and Technologies</h2>
          <div className="tech">
            <FaHtml5 />
            <FaCss3 />
            <SiJavascript />
            <FaReact />
            <FaNodeJs />
            <SiCsharp />
            <SiKotlin />
            <SiExpress />
            <FaSass />
            <SiTailwindcss />
            <SiMongodb />
            <GrMysql />
            <FaGitAlt />
            <FaAndroid />
            <FaBootstrap />
            <FaFigma />
            <SiAdobephotoshop />
          </div>
        </div>
      </div>
    </Layout>
  );
}
