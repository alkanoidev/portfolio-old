import React, { Dispatch, SetStateAction, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import { motion } from "framer-motion";

type Props = {
  setMenu: Dispatch<SetStateAction<boolean>>;
  menu: boolean;
};

export default function NavbarMobile({ setMenu, menu }: Props) {
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
    <motion.div
      className="navbar-mobile"
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      transition={{ type: "spring", duration: 1 }}
    >
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
    </motion.div>
  );
}
