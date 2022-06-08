import React from "react";
import Button from "../../components/Button/Button";
import Layout from "../../components/Layout/Layout";
import { BsGithub } from "react-icons/bs";
import "./style.scss";
import Waves from "../../components/Waves/Waves";
import { AiOutlineArrowDown } from "react-icons/ai";
type Props = {};

export default function Home({}: Props) {
  return (
    <Layout>
      <div className="home">
        <main className="home-content">
          <p>
            Hi, <br />
            I'm Filip <br />
            <span>{">"} Front-end Developer</span>
          </p>
          <div className="buttons">
            <Button type="primary">contact_me</Button>
            <Button type="secondary" icon={<AiOutlineArrowDown />}>view_projects</Button>
            <a
              href="https://github.com/alkanoidev"
              target="_blank"
              className="text-subh text-bg-dark dark:text-bg"
            >
              <BsGithub />
            </a>
          </div>
        </main>
        <Waves />
      </div>
    </Layout>
  );
}
