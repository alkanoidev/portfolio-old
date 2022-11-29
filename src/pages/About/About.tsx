import "./style.scss";
import Section1 from "./Section1";
import TechnologiesSection from "./TechnologiesSection";

export default function About() {

  return (
    <div className="about">
      <div className="about-content">
        <Section1 />
        <TechnologiesSection />
      </div>
    </div>
  );
}
