import "./style.scss";
import ThemeToggle from "../Buttons/ThemeToggle";
import { Link } from "react-router-dom";
import GradientLine from "../GradientLine";
import useAnimateGradientLine from "../../utils/hooks/useAnimateGradientLine";

export default function Navbar() {
  const { divRef: navRef } = useAnimateGradientLine();

  return (
    <nav ref={navRef}>
      <div className="content">
        <div>
          <Link to="/">Filip Ivanovic</Link>
        </div>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/about">About Me</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact Me</Link>
          <a href="https://filipblog.netlify.app/" className="" target="_blank">
            Blog
          </a>
        </div>
        <ThemeToggle />
      </div>
      <GradientLine />
    </nav>
  );
}
