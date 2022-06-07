import React from "react";
import Button from "../../components/Button/Button";
import Layout from "../../components/Layout/Layout";
import "./style.scss";
type Props = {};

export default function Home({}: Props) {
  return (
    <Layout>
      <main className="home-content">
        <p>
          Hi, <br />
          I'm Filip <br />
          <span>{">"} Front-end Developer</span>
        </p>
        <div className="buttons">
          <Button title="contact_me" type="primary" />
          <Button title="view_projects ↓" type="secondary" />
        </div>
      </main>
    </Layout>
  );
}
