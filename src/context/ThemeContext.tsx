import React, { createContext, Dispatch, SetStateAction } from "react";

type ThemeProps = {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
};

const ThemeContext = createContext<ThemeProps>({
  theme: "",
  setTheme: () => {},
});

export default ThemeContext;
