import React from "react";
import "./style.scss";
import { motion } from "framer-motion";

type Props = {
  icon: JSX.Element;
  title: string;
  small?: boolean;
};
const item = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
};
export default function Technology({ icon, title, small }: Props) {
  return (
    <motion.button
      variants={item}
      className={`${
        small ? "text-subh" : "text-headline"
      } technology flex justify-center relative transition text-primary bg-clip-text group`}
    >
      <div
        className={`capitalize max-w-[100px] ${
          small ? "top-[-120%]" : "top-[-70%]"
        } absolute z-10  text-code font-extralight bg-off-white dark:bg-off-dark
            text-bg-dark dark:text-bg px-3 py-2 rounded-sm transition
            hidden group-hover:block shadow`}
      >
        {title}
      </div>
      {icon}
    </motion.button>
  );
}
