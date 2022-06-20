import React from "react";
import "./style.scss";
import { Code, atomOneDark, atomOneLight } from "react-code-blocks";
import { useThemeContext } from "../../context/ThemeProvider";

type Props = {
  code: string;
  language: string;
  showLineNumbers?: boolean;
};

export default function CodeSnippet({
  code,
  language,
  showLineNumbers,
}: Props) {
  const { theme } = useThemeContext();

  return (
    <Code
      text={code}
      language={language}
      showLineNumbers={showLineNumbers}
      wrapLines={true}
      theme={theme === "dark" ? atomOneDark : atomOneLight}
    />
  );
}
