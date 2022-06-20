import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./style.scss";
import NavbarMobile from "../NavbarMobile/NavbarMobile";
import MenuAndThemeToggle from "../MenuAndThemeToggle/MenuAndThemeToggle";

type Props = {
  children?: any;
};

export default function Layout({ children }: Props) {
  const [menu, setMenu] = useState<boolean>(false);

  return (
    <div className="Layout">
      <Navbar />
      <MenuAndThemeToggle menu={menu} setMenu={setMenu} />
      {menu && <NavbarMobile setMenu={setMenu} menu={menu} />}
      {children}
    </div>
  );
}
