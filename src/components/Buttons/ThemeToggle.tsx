import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import { useThemeContext } from "../../context/ThemeProvider";
type Props = {};

export default function ThemeToggle({}: Props) {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button
      className="text-icon-sm h-[70px] w-[70px]"
      onClick={() => {
        toggleTheme();
      }}
      name="toggle theme"
    >
      {theme === "light" ? <BsMoonStarsFill /> : <BsSunFill />}
    </button>
  );
}
