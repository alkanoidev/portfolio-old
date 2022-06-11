import React, { useRef, useState } from "react";
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
import Avatar from "../../assets/avatar.png";
import Technology from "../../components/Technology/Technology";
import SocialLink from "../../components/SocialLink/SocialLink";

type Props = {};

type TechnologyHoverProps = {
  hovered: boolean;
  text: string;
};

export default function About({}: Props) {
  return (
    <Layout>
      <div className="about">
        <div className="about-content">
          <div className="flex flex-col sm:flex-row sm:items-center items-start justify-start gap-3">
            <InfoChip title="Kragujevac, Serbia" icon={<FaMapMarkerAlt />} />
            <InfoChip title="alkanoidev@gmail.com" icon={<IoIosMail />} />
          </div>
          <h1 className="mt-5"># About</h1>
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
            <SocialLink
              icon={<BsGithub />}
              link="https://github.com/alkanoidev"
            />
            <SocialLink
              icon={<BsTwitter />}
              link="https://twitter.com/alkanoidev/"
            />
            <SocialLink
              icon={<SiHashnode />}
              link="https://alkanoidev.hashnode.dev/"
            />
          </div>

          <h1 className="mt-20 sm:mt-32"># Skills</h1>
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
          <div className="tech mb-7">
            <Technology icon={<FaHtml5 />} title="HTML5" />
            <Technology icon={<FaCss3 />} title="CSS3" />
            <Technology icon={<SiJavascript />} title="JavaScript" />
            <Technology icon={<FaReact />} title="React" />
            <Technology icon={<FaNodeJs />} title="NodeJS" />
            <Technology icon={<SiCsharp />} title="C#" />
            <Technology icon={<SiKotlin />} title="Kotlin" />
            <Technology icon={<SiExpress />} title="ExpressJS" />
            <Technology icon={<FaSass />} title="Sass" />
            <Technology icon={<SiTailwindcss />} title="Tailwind Css" />
            <Technology icon={<SiMongodb />} title="MongoDB" />
            <Technology icon={<GrMysql />} title="MySQL" />
            <Technology icon={<FaGitAlt />} title="Git" />
            <Technology icon={<FaAndroid />} title="Android" />
            <Technology icon={<FaFigma />} title="Figma" />
            <Technology icon={<SiAdobephotoshop />} title="Photoshop" />
          </div>
        </div>
      </div>
    </Layout>
  );
}
