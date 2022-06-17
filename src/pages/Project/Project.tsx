import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import "./style.scss";
import remarkGfm from "remark-gfm";
type Props = {};

export default function Project({}: Props) {
  const { projectName } = useParams();
  const [readme, setReadme] = useState<string>("");
  useEffect(() => {
    const getReadme = async () => {
      const res = await fetch(
        `https://raw.githubusercontent.com/alkanoidev/${projectName}/master/README.md`
      );
      const data = await res.text();
      setReadme(data);
    };
    getReadme();
  }, []);

  return (
    <div className="flex justify-center">
      <ReactMarkdown
        className="markdown"
        skipHtml={false}
        remarkPlugins={[remarkGfm]}
      >
        {readme}
      </ReactMarkdown>
    </div>
  );
}
