import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./style.scss";
import NavbarMobile from "../NavbarMobile/NavbarMobile";
import MenuAndThemeToggle from "../MenuAndThemeToggle/MenuAndThemeToggle";
import { Helmet } from "react-helmet";
import { useThemeContext } from "../../context/ThemeProvider";

type Props = {
  children?: any;
};

export default function Layout({ children }: Props) {
  const [menu, setMenu] = useState<boolean>(false);
  const { theme } = useThemeContext();

  return (
    <div className="Layout">
      <Helmet>
        <meta
          name={theme === "dark" ? "#121212" : "#f5f5f5"}
          content="#4285f4"
        />
      </Helmet>

      <Navbar />
      <MenuAndThemeToggle menu={menu} setMenu={setMenu} />
      {menu && <NavbarMobile setMenu={setMenu} menu={menu} />}
      {children}
    </div>
  );
}
