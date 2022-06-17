import React from "react";
import Button from "../../components/Buttons/Button/Button";
import { BsGithub } from "react-icons/bs";
import "./style.scss";
import Waves from "../../components/Waves/Waves";
import SocialLink from "../../components/SocialLink/SocialLink";
import { Link } from "react-router-dom";

type Props = {};

export default function Home({}: Props) {
  return (
    <div className="home">
      <main className="home-content">
        <p>
          Hi ! <br />
          I'm Filip <br />
          <span>{">"} Front-end Developer</span>
        </p>
        <div className="buttons">
          <Button variant="primary">
            <Link to="/contact">contact_me</Link>
          </Button>
          <Button variant="secondary">
            <Link to="/projects">view_projects</Link>
          </Button>
          <SocialLink
            icon={<BsGithub />}
            link="https://github.com/alkanoidev"
          />
        </div>
      </main>
      <Waves />
    </div>
  );
}
