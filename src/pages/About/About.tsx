import "./style.scss";
import { motion } from "framer-motion";
import Section1 from "./Section1";
import TechnologiesSection from "./TechnologiesSection";

export default function About() {

  return (
    <div className="about">
      <div className="about-content">
        <motion.div
          layout
          className="flex flex-col mt-[70px] sm:mt-0 sm:flex-row items-start sm:items-center gap-1"
        >

        </motion.div>

        <Section1 />
        <TechnologiesSection />
      </div>
    </div>
  );
}
