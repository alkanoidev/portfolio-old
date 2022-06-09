import React from "react";
import Layout from "../../components/Layout/Layout";
import "./style.scss";
type Props = {};

export default function About({}: Props) {
  return (
    <Layout>
      <div className="about">
        <div className="about-content">
          <h1>About</h1>
          <p>
            I'm a <span>junior developer</span> who enjoys building things that
            live on the internet.
            <br />
            <br />
            I'm a self-motivated learner who can work independently and
            collaboratively in a team.
            <br />
            <br />
            I love working on fun projects and keeping up with the programming
            world that is growing constantly.
            <br />
            <br />I also love open-source, UI design, and orange cats :)
          </p>
        </div>
      </div>
    </Layout>
  );
}
