import { Link } from "react-router-dom";
import { Remarkable } from "remarkable";

const md = new Remarkable();

type Props = {
  repoData: {
    created_at: string;
    topics: string[];
  };
  readme: string;
};

export default function ProjectPage({ repoData, readme }: Props) {
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
      <div
        className="markdown"
        dangerouslySetInnerHTML={{ __html: md.render(readme) }}
      >
      </div>
    </div>
  );
}
