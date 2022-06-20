import { Dispatch, SetStateAction } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useLocation } from "react-router-dom";
import ThemeToggle from "../Buttons/ThemeToggle/ThemeToggle";
import "./style.scss";

export default function MenuAndThemeToggle({
  menu,
  setMenu,
}: {
  menu: boolean;
  setMenu: Dispatch<SetStateAction<boolean>>;
}) {
  const { pathname } = useLocation();

  return (
    <div
      className={`theme-menu
      `}
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
  );
}
