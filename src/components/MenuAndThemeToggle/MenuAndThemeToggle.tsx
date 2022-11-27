import { Dispatch, SetStateAction } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import ThemeToggle from "../Buttons/ThemeToggle";
import "./style.scss";

export default function MenuAndThemeToggle({
  menu,
  setMenu,
}: {
  menu: boolean;
  setMenu: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className={`theme-menu`}>
      <ThemeToggle />
      <button
      name="toggleMenu"
        onClick={() => {
          setMenu((prev) => !prev);
        }}
      >
        {menu ? <IoMdClose /> : <FaBars />}
      </button>
    </div>
  );
}
