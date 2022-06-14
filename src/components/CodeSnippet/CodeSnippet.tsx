import React, { useContext, useState } from "react";
import "./style.scss";
import { CodeBlock, atomOneDark, atomOneLight } from "react-code-blocks";
import ThemeContext from "../../context/ThemeContext";

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
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <CodeBlock
      text={code}
      language={language}
      showLineNumbers={showLineNumbers}
      wrapLines={true}
      theme={theme === "dark" ? atomOneDark : atomOneLight}
    />
  );
}
