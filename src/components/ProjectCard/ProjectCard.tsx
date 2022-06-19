import React from "react";
import { useLocation } from "react-router-dom";
import "./style.scss";
import { motion } from "framer-motion";

type Props = {
  children: any;
  comingSoon?: boolean;
  image?: string;
  demo?: string;
  githubRepoName?: string;
};

const item = {
  initial: {
    opacity: 0,
    scale: 0.5,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
      type: "spring",
    },
  },
};

export default function ProjectCard({
  children,
  comingSoon,
  githubRepoName,
  image,
}: Props) {
  const { pathname } = useLocation();

  return (
    <motion.div
      className={`card  ${comingSoon && "opacity-20"} group`}
      onClick={() => {
        window.open(`${pathname}/${githubRepoName}`, "_blank");
      }}
      variants={item}
    >
      <div className={`card-inner`}>{children}</div>
    </motion.div>
  );
}
