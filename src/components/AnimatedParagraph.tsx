import { motion } from "framer-motion";

const AnimatedParagraph = ({
  children,
  className,
  delay,
}: {
  children: any;
  className: string;
  delay: number;
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, delay: delay }}
    >
      {children}
    </motion.div>
  );
};
export default AnimatedParagraph;
