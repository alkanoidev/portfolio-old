import { Link } from "react-router-dom";
import Button from "../../components/Buttons/Button";
import "./style.scss";
import { motion } from "framer-motion";

const container = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.35 } },
};

const item = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

export default function ContactSuccess() {
  return (
    <div className="contact-success">
      <motion.div
        className="form-submitted"
        variants={container}
        initial="initial"
        animate="animate"
      >
        <motion.h1 variants={item} className="text-headline mt-[70px] sm:mt-0">
          thank you!
        </motion.h1>
        <motion.h2 variants={item} className="text-subh text-center">
          i will reach back to you shortly
        </motion.h2>
        <motion.img variants={item} src="../cat.gif" alt="cat gif" />
        <Button variant="primary">
          <Link to="/contact">send-a-new-message</Link>
        </Button>
      </motion.div>
    </div>
  );
}
