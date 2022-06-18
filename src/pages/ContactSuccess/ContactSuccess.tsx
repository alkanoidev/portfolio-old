import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Buttons/Button/Button";
import withSplashScreen from "../SplashScreen/SplashScreen";
import "./style.scss";
import { motion } from "framer-motion";

type Props = {};
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

export function ContactSuccess({}: Props) {
  return (
    <div className="contact-success">
      <motion.div
        className="form-submitted"
        variants={container}
        initial="initial"
        animate="animate"
      >
        <motion.h1 variants={item} className="text-headline">
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

export default withSplashScreen(ContactSuccess);
