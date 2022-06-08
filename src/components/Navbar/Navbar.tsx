import React from "react";
import "./style.scss";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import Button from "../Button/Button";

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
              <button
                onClick={() => {
                  if (localStorage.theme === "light") {
                    localStorage.theme = "dark";
                  } else {
                    localStorage.theme = "light";
                  }
                }}
              >
                <BsMoonStarsFill />
              </button>
          )}
        </div>
      </div>
      <div className="line"></div>
    </nav>
  );
}
