import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./style.scss";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import NavbarMobile from "../NavbarMobile/NavbarMobile";
import ThemeToggle from "../Buttons/ThemeToggle/ThemeToggle";
import { useLocation } from "react-router-dom";

type Props = {
  children?: any;
};

export default function Layout({ children }: Props) {
  const [menu, setMenu] = useState<boolean>(false);
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <div className="Layout">
      <Navbar />
      <div
        className={`theme-menu ${pathname === "/" ? "relative" : "fixed z-20"}`}
      >
        <ThemeToggle />
        <button
          onClick={() => {
            setMenu((prev) => !prev);
          }}
        >
          {menu ? <IoMdClose /> : <FaBars />}
        </button>
      </div>
      {menu && <NavbarMobile setMenu={setMenu} menu={menu} />}
      {children}
    </div>
  );
}
