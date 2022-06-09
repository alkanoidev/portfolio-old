import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

type Props = {};

export default function NavbarMobile({}: Props) {
  return (
    <div className="navbar-mobile">
      <div className="links">
        <Link to="/">home</Link>
        <Link to="/about">about_me</Link>
        <a href="#">projects</a>
        <a href="#">
          <span>contact_me</span>
        </a>
      </div>
      <div className="blobs">
        <div id="blob1"></div>
        <div id="blob2"></div>
      </div>
    </div>
  );
}
