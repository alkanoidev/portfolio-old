import { Dispatch, SetStateAction } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import useAnimateGradientLine from "../../utils/hooks/useAnimateGradientLine";
import ThemeToggle from "../Buttons/ThemeToggle";
import GradientLine from "../GradientLine";

export default function MenuAndThemeToggle({
  menu,
  setMenu,
}: {
  menu: boolean;
  setMenu: Dispatch<SetStateAction<boolean>>;
}) {
  const { divRef } = useAnimateGradientLine();

  return (
    <div
      ref={divRef}
      className="flex text-icon-sm flex-col-reverse backdrop-blur-md fixed z-20 h-[70px] items-center justify-between w-full sm:hidden left-0 top-0"
    >
      <div className="flex px-3 fixed z-20 h-full items-center justify-between w-full sm:hidden left-0 top-0">
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
      <GradientLine />
    </div>
  );
}
