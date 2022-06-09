import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./style.scss";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import NavbarMobile from "../NavbarMobile/NavbarMobile";

type Props = {
  children?: any;
};

export default function Layout({ children }: Props) {
  const [menu, setMenu] = useState<boolean>(false);
  return (
    <div className="Layout">
      <Navbar />
      {menu && <NavbarMobile />}
      {children}

      <button
        className="menu-button"
        onClick={() => {
          setMenu((prev) => !prev);
        }}
      >
        {menu ? <IoMdClose /> : <FaBars />}
      </button>
    </div>
  );
}
