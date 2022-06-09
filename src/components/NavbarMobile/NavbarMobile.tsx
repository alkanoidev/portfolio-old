import React from "react";
import "./style.scss";

type Props = {};

export default function NavbarMobile({}: Props) {
  return (
    <div className="navbar-mobile">
      <div className="links">
        <a href="#">home</a>
        <a href="#">about_me</a>
        <a href="#">skills</a>
        <a href="#">projects</a>
      </div>
      <div className="blobs">
        <div id="blob1"></div>
        <div id="blob2"></div>
      </div>
    </div>
  );
}
