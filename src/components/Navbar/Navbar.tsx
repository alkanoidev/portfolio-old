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
          <Link to="/">filip_ivanovic</Link>
        </div>
        <div className="links">
          <Link to="/">home</Link>
          <Link to="/about">about_me</Link>
          <Link to="/projects">projects</Link>
          <Link to="/contact">contact_me</Link>
          <a href="https://filipblog.netlify.app/" className="" target="_blank">
            blog
          </a>
        </div>
        <ThemeToggle />
      </div>
      <GradientLine />
    </nav>
  );
}
