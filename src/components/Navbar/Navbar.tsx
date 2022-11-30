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
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT ME</Link>
          <Link to="/projects">PROJECTS</Link>
          <Link to="/contact">CONTACT ME</Link>
          <a href="https://filipblog.netlify.app/" className="" target="_blank">
            BLOG
          </a>
        </div>
        <ThemeToggle />
      </div>
      <GradientLine />
    </nav>
  );
}
