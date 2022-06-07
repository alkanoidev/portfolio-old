import React from "react";
import "./style.scss";
import { ReactComponent as MoonIcon } from "../../assets/moon.svg";

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
        <div>
          {showContact ? (
            <h1>contact</h1>
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
              <MoonIcon />
            </button>
          )}
        </div>
      </div>
      <div className="line"></div>
    </nav>
  );
}
