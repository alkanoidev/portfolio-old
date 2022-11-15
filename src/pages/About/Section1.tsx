import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
import AnimatedParagraph from "../../components/AnimatedParagraph";
import Button from "../../components/Buttons/Button/Button";
import SocialLink from "../../components/SocialLink/SocialLink";

export default function Section1() {
  return (
    <AnimatedParagraph delay={0.3} className="mt-5">
      <h1>
        # About
      </h1>
      <p className="pb-6">
        I'm a <span>frontend developer</span> who enjoys building things that
        live on the internet.
        <br />
        <br />
        I'm a self-motivated learner who loves working on fun projects and
        keeping up with the programming world that is constantly growing.
        <br />
        <br />
        I also love open-source, UI design, and orange cats :)
        <br />
        <br />
        If you are in search of a frontend developer who enjoys solving problems
        and is desiring to learn and contribute, I'd love to hear from you!
      </p>
      <div className="flex sm:flex-row flex-col sm:items-center items-start gap-3">
        <Button variant="primary" shine>
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
            icon={<BsLinkedin />}
            link="https://www.linkedin.com/in/filip-ivanovic-60ab98242/"
          />
        </div>
      </div>
    </AnimatedParagraph>
  );
}
