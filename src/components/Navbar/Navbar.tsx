import "./style.scss";
import ThemeToggle from "../Buttons/ThemeToggle/ThemeToggle";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
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
          <a href="https://filipblog.netlify.app/" className="" target="_blank">
            blog
          </a>
        </div>
        <ThemeToggle />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, ease: "easeOut", delay: 2.8 }}
        className="line"
      ></motion.div>
    </nav>
  );
}
