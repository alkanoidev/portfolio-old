import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./style.scss";
import NavbarMobile from "../NavbarMobile/NavbarMobile";
import MenuAndThemeToggle from "../MenuAndThemeToggle/MenuAndThemeToggle";
import ScrollToTop from "../Buttons/ScrollToTop";

type Props = {
  children?: any;
};

export default function Layout({ children }: Props) {
  const [menu, setMenu] = useState<boolean>(false);

  return (
    <div className={`Layout${menu ? "pt-0" : ""}`}>
      <Navbar />
      <MenuAndThemeToggle menu={menu} setMenu={setMenu} />
      {menu && <NavbarMobile setMenu={setMenu} menu={menu} />}
      {children}
      <ScrollToTop />
    </div>
  );
}
