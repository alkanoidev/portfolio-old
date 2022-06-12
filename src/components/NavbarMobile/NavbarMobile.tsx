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
        <Link to="/contact">
          <span>contact_me</span>
        </Link>
      </div>
      <div className="blobs">
        <div id="blob1"></div>
        <div id="blob2"></div>
      </div>
    </div>
  );
}
