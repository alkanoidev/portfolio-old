import React from "react";
import Button from "../../components/Buttons/Button/Button";
import Layout from "../../components/Layout/Layout";
import { BsGithub } from "react-icons/bs";
import "./style.scss";
import Waves from "../../components/Waves/Waves";
import SocialLink from "../../components/SocialLink/SocialLink";

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
          <Button type="primary">contact_me</Button>
          <Button type="secondary">view_projects</Button>
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
