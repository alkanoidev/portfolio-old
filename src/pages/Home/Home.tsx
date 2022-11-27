import Button from "../../components/Buttons/Button";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import "./style.scss";
import Waves from "../../components/Waves/Waves";
import SocialLink from "../../components/SocialLink";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <main className="home-content">
        <p>
          Hi ! <br />
          I'm Filip <br />
          <span>{">"} Front-end Developer</span>
        </p>
        <div className="buttons">
          <div className="flex items-center gap-4">
            <Button variant="primary">
              <Link to="/projects">view_projects</Link>
            </Button>
            <Button variant="secondary">
              <Link to="/contact">contact_me</Link>
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
    </div>
  );
}
