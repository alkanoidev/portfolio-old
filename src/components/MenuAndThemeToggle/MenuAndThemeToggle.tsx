import { Dispatch, SetStateAction } from "react";
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
      className="flex text-icon-sm flex-col top-0 backdrop-blur-md fixed z-20 h-[70px] items-center justify-between w-full sm:hidden left-0"
    >
      <div className="flex px-3 z-20 h-full items-center justify-between w-full">
        <ThemeToggle />
        <button
          name="toggleMenu"
          className="h-[70px] w-[70px] flex justify-end items-center"
          onClick={() => {
            setMenu((prev) => !prev);
          }}
        >
          {menu ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
          )}
        </button>
      </div>
      <GradientLine />
    </div>
  );
}
