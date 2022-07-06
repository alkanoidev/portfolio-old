import React from "react";
import Button from "../../components/Buttons/Button/Button";
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaNodeJs,
  FaSass,
  FaGitAlt,
  FaFigma,
  FaMapMarkerAlt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiExpress,
  SiTailwindcss,
  SiMongodb,
  SiAdobephotoshop,
  SiJava,
  SiC,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import "./style.scss";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { SiHashnode } from "react-icons/si";
import InfoChip from "../../components/InfoChip/InfoChip";
import { IoIosMail } from "react-icons/io";
import Technology from "../../components/Buttons/Technology/Technology";
import SocialLink from "../../components/SocialLink/SocialLink";
import { Link } from "react-router-dom";
import Avatar from "../../assets/avatar.png";
import { toast, ToastContainer } from "react-toastify";
import "./ReactToastify.min.css";
import { useThemeContext } from "../../context/ThemeProvider";
import { motion } from "framer-motion";

export default function About() {
  const { theme } = useThemeContext();

  return (
    <div className="about">
      <div className="about-content">
        <motion.div
          layout
          className="flex flex-col mt-[70px] sm:mt-0 sm:flex-row items-start sm:items-center gap-1"
        >
          <motion.img
            src={Avatar}
            alt=""
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
            transition={{ duration: 0.2 }}
            className="sm:w-32 w-28"
          />
          <div className="flex flex-col justify-start gap-3">
            <InfoChip title="Kragujevac, Serbia" icon={<FaMapMarkerAlt />} />
            <InfoChip
              title="alkanoidev@gmail.com"
              email
              onClick={() => {
                navigator.clipboard.writeText("alkanoidev@gmail.com");
                toast.info("Email is copied to clipboard!", {
                  position: "bottom-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: false,
                  draggable: true,
                  progress: undefined,
                });
              }}
              icon={<IoIosMail />}
            />
          </div>
        </motion.div>
        <AnimatedParagraph className="mt-5">
          <h1># About</h1>
          <p className="pb-6">
            I'm a <span>developer</span> who enjoys building things that live on
            the internet.
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
          <div className="flex sm:flex-row flex-col sm:items-center items-start gap-3">
            <Button variant="primary">
              <Link to="/contact">contact_me</Link>
            </Button>
            <Button variant="secondary">
              <a href="FilipIvanovicResume.pdf">resume</a>
            </Button>
            <div className="flex gap-2">
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
              <SocialLink
                icon={<BsLinkedin />}
                link="https://www.linkedin.com/in/filip-ivanovic-60ab98242/"
              />
            </div>
          </div>
        </AnimatedParagraph>

        <AnimatedParagraph className="pb-6 mt-16 sm:mt-14 flex flex-col w-full">
          <h1 className=""># Skills</h1>
          <p>
            The main area of my expertise is <span>Front-end development</span>.
            I enjoy building intuitive applications that are fast and built with
            best practices.
            <br />
            <br />
            I am into code refactoring and organizing.
            <br />
            <br />I also have experience in
            <span> Full-stack development </span>using NodeJS and popular
            Relational Database Management Systems as well as Nonrelational.
          </p>

          <h2 className="mt-16">## Tools and Technologies</h2>
          <motion.div
            className="tech"
            variants={container}
            initial="initial"
            whileInView="animate"
          >
            <Technology icon={<FaHtml5 />} title="HTML5" />
            <Technology icon={<FaCss3 />} title="CSS3" />
            <Technology icon={<SiJavascript />} title="JavaScript" />
            <Technology icon={<FaReact />} title="React" />
            <Technology icon={<FaNodeJs />} title="NodeJS" />
            <Technology icon={<SiJava />} title="Java" />
            <Technology icon={<SiExpress />} title="ExpressJS" />
            <Technology icon={<FaSass />} title="Sass" />
            <Technology icon={<SiTailwindcss />} title="TailwindCss" />
            <Technology icon={<SiMongodb />} title="MongoDB" />
            <Technology icon={<GrMysql />} title="MySQL" />
            <Technology icon={<FaGitAlt />} title="Git" />
            <Technology icon={<FaFigma />} title="Figma" />
            <Technology icon={<SiAdobephotoshop />} title="Photoshop" />
          </motion.div>
        </AnimatedParagraph>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
          theme={theme === "dark" ? "dark" : "light"}
        />
      </div>
    </div>
  );
}

const AnimatedParagraph = ({
  children,
  className,
}: {
  children: any;
  className: string;
}) => {
  return (
    <motion.div
      className={className}
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

const container = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
