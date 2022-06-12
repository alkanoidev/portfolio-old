import React, { useState } from "react";
import "./style.scss";
import Button from "../Buttons/Button/Button";
import ThemeToggle from "../Buttons/ThemeToggle/ThemeToggle";
import { Link } from "react-router-dom";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <nav>
      <div className="content">
        <div>
          <Link to="/">filip_ivanovic</Link>
        </div>
        <div className="links">
          <Link to="/">home</Link>
          <Link to="/about">about_me</Link>
          <a href="#">projects</a>
          <Link to="/contact">contact_me</Link>
        </div>
          <ThemeToggle />
      </div>
      <div className="line"></div>
    </nav>
  );
}
