import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
import Button from "../../components/Buttons/Button";
import SocialLink from "../../components/SocialLink";
import useAnimateBlock from "../../utils/hooks/useAnimateBlock";

export default function Section1() {
  const { divRef } = useAnimateBlock(0.5);
  return (
    <article className="mt-5" ref={divRef}>
      <h1 className="before:w-32 before:h-4 before:z-[-1] before:bg-primary dark:before:bg-primary/50 before:absolute before:bottom-4 before:rounded-sm">About</h1>
      <p className="pb-6">
        I'm a <span>frontend developer</span> who enjoys building things that
        live on the internet.
        <br />
        <br />
        I'm a self-motivated learner who loves working on fun projects and
        keeping up with the programming world that is constantly growing.
        <br />
        <br />
        I also love open-source, UI design, and orange cats.
        <br />
        <br />
        If you are in search of a frontend developer who enjoys solving problems
        and is desiring to learn and contribute, I'd love to hear from you!
      </p>
      <div className="flex sm:flex-row flex-wrap sm:items-center items-start gap-3">
        <Button variant="primary" shine>
          <Link to="/contact">Contact Me</Link>
        </Button>
        <Button variant="secondary">
          <a href="FilipIvanovicResume.pdf">Resume</a>
        </Button>
        <div className="flex gap-2">
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
    </article>
  );
}
