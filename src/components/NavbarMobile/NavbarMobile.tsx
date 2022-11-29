import { Dispatch, SetStateAction, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

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
        <a href="https://filipblog.netlify.app/" target="_blank">
          blog
        </a>
        <Link to="/contact" onClick={handleClick}>
          <span>contact_me</span>
        </Link>
      </div>
    </div>
  );
}
