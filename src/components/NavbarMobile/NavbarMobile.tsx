import React, { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

type Props = {
  setMenu: Dispatch<SetStateAction<boolean>>;
};

export default function NavbarMobile({ setMenu }: Props) {
  const handleClick = (): void => {
    setMenu(false);
  };

  return (
    <div className="navbar-mobile">
      <div className="links">
        <Link to="/" onClick={handleClick}>
          home
        </Link>
        <Link to="/about" onClick={handleClick}>
          about_me
        </Link>
        <a href="#" onClick={handleClick}>
          projects
        </a>
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
