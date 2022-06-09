import React, { useState } from "react";
import "./style.scss";
import Button from "../Buttons/Button/Button";
import ThemeToggle from "../Buttons/ThemeToggle/ThemeToggle";

type Props = {
  showContact?: boolean;
};

export default function Navbar({ showContact }: Props) {
  return (
    <nav>
      <div className="content">
        <div>
          <a href="#">filip_ivanovic</a>
        </div>
        <div className="links">
          <a href="#">home</a>
          <a href="#">about_me</a>
          <a href="#">skills</a>
          <a href="#">projects</a>
        </div>
        <div className="socials">
          {showContact ? (
            <Button type="primary">contact_me</Button>
          ) : (
            <ThemeToggle />
          )}
        </div>
      </div>
      <div className="line"></div>
    </nav>
  );
}
