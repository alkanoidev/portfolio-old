import "./style.scss";
import ThemeToggle from "../Buttons/ThemeToggle";
import { Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import GradientLine from "../GradientLine";

export default function Navbar() {
  const { pathname } = useLocation();

  const nav = useRef<HTMLDivElement | null>(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .fromTo(".line",{opacity: 0}, { opacity: 1, ease: "power3.in" })
        .delay(pathname === "/" ? 2.8 : 0);
    }, nav);

    return () => ctx.revert();
  }, []);
  return (
    <nav ref={nav}>
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
