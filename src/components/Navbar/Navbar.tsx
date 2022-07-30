import "./style.scss";
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
          <Link to="/projects">projects</Link>
          <Link to="/contact">contact_me</Link>
          <a href="https://filipblog.netlify.app/" target="_blank">
            blog
          </a>
        </div>
        <ThemeToggle />
      </div>
      <div className="line"></div>
    </nav>
  );
}
