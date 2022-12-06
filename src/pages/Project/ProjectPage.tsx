import { Link } from "react-router-dom";
import { Remarkable } from "remarkable";

const md = new Remarkable();

type Props = {
  readme: string;
};

export default function ProjectPage({ readme }: Props) {
  return (
    <div className="flex justify-center flex-col items-center mt-12 sm:mt-0">
      <div className="flex max-w-[700px] justify-start w-full mt-12">
        <Link to="/projects">
          <div className="flex rounded-lg bg-off-light dark:bg-off-dark p-2 text-dark dark:text-light gap-2 items-center justify-center hover:cursor-pointer">
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
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            Go Back
          </div>
        </Link>
      </div>
      <div
        className="markdown"
        dangerouslySetInnerHTML={{ __html: md.render(readme) }}
      ></div>
    </div>
  );
}
