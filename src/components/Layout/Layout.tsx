import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./style.scss";
import NavbarMobile from "../NavbarMobile/NavbarMobile";
import MenuAndThemeToggle from "../MenuAndThemeToggle/MenuAndThemeToggle";
import { useThemeContext } from "../../context/ThemeProvider";
import ScrollToTop from "../Buttons/ScrollToTop";

type Props = {
  children?: any;
};

export default function Layout({ children }: Props) {
  const [menu, setMenu] = useState<boolean>(false);
  const { theme } = useThemeContext();

  return (
    <div className="Layout">
      <Navbar />
      <MenuAndThemeToggle menu={menu} setMenu={setMenu} />
      {menu && <NavbarMobile setMenu={setMenu} menu={menu} />}
      {children}
      <ScrollToTop />
    </div>
  );
}
