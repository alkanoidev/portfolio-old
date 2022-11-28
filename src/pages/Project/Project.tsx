import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import "./style.scss";
import remarkGfm from "remark-gfm";

export default function Project() {
  const { projectName } = useParams();
  const [readme, setReadme] = useState("");
  const [repoData, setRepoData] = useState({
    created_at: "",
    topics: [""],
  });

  useEffect(() => {
    const getReadme = async () => {
      const res = await fetch(
        `https://raw.githubusercontent.com/alkanoidev/${projectName}/master/README.md`
      );
      const data = await res.text();
      setReadme(data);
    };
    const getRepositoryData = async () => {
      const res = await fetch(
        `https://api.github.com/repos/alkanoidev/${projectName}`
      );
      const data = await res.json();
      setRepoData({
        created_at: data.created_at,
        topics: data.topics,
      });
    };

    getReadme();
    getRepositoryData();
  }, []);

  return (
    <div className="flex justify-center flex-col items-center mt-12 sm:mt-0">
      <div className="flex max-w-[700px] flex-wrap gap-3 mt-12 mx-2 sm:mx-0">
        <Link to={"/projects"}>{"<-"} back</Link>
        <div className="flex flex-wrap gap-2 w-full">
          {repoData.topics.map((topic) => (
            <span className="bg-secondary/90 font-bold text-bg-dark tracking-wide py-1 px-3 text-labels rounded-full">
              {topic}
            </span>
          ))}
        </div>
        <div>
          Created at:{" "}
          <span className="text-secondary font-bold">
            {new Date(repoData.created_at).toLocaleDateString()}
          </span>
        </div>
      </div>
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
