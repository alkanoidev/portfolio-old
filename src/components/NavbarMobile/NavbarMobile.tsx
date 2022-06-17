import React, { Dispatch, SetStateAction, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

type Props = {
  setMenu: Dispatch<SetStateAction<boolean>>;
};

export default function NavbarMobile({ setMenu }: Props) {
  const handleClick = (): void => {
    setMenu(false);
  };

  useEffect(() => {
    document.body.setAttribute("scroll", "no");
    document.body.setAttribute("style", "overflow: hidden");

    return () => {
      document.body.removeAttribute("scroll");
      document.body.setAttribute("style", "overflow: scroll");
    };
  }, []);

  return (
    <div className="navbar-mobile">
      <div className="links">
        <Link to="/" onClick={handleClick}>
          home
        </Link>
        <Link to="/about" onClick={handleClick}>
          about_me
        </Link>
        <Link to="/projects" onClick={handleClick}>
          projects
        </Link>
        <Link to="/contact" onClick={handleClick}>
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
