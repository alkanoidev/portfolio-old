import Button from "../../components/Buttons/Button";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import "./style.scss";
import Waves from "../../components/Waves/Waves";
import SocialLink from "../../components/SocialLink";
import { Link } from "react-router-dom";
import WavesMobile from "../../components/Waves/WavesMobile";
import Projects from "../Projects/Projects";
import About from "../About/About";
import Contact from "../Contact/Contact";
import GradientLine from "../../components/GradientLine";

export default function Home() {
  return (
    <>
    <div className="bg-yellow-500 w-full text-center text-black text-icon-sm">
      Under Construction
    </div>
      <div className="home">
        <main className="home-content space-y-5">
          <div className="flex flex-col justify-center items-center">
            <h1>Hi there! I'm Filip</h1>
            <h1>
              <span>Front-end Developer</span>
            </h1>
            <p className="text-body sm:text-icon-sm text-bg-dark/80 dark:text-bg/80">
              Developer who likes building solid products that live on the
              internet.
            </p>
          </div>
          <div className="buttons">
            <div className="flex items-center gap-4">
              <Button variant="primary">
                <Link to="/projects">View Projects</Link>
              </Button>
              <Button variant="secondary">
                <Link to="/contact">Contact me</Link>
              </Button>
            </div>
            <div className="flex gap-4 items-center">
              <SocialLink
                icon={<BsGithub />}
                link="https://github.com/alkanoidev"
              />
              <SocialLink
                icon={<BsLinkedin />}
                link="https://www.linkedin.com/in/filip-ivanovic-60ab98242/"
              />
            </div>
          </div>
        </main>
        <Waves />
        <WavesMobile />
        <GradientLine />
      </div>
      <Projects />
      <GradientLine />

      <About />
      <GradientLine />

      <Contact />
    </>
  );
}
