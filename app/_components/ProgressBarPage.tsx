import { motion, useScroll } from "framer-motion";

export const ProgressBarPage = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[10px] bg-red-500 origin-[0%] z-40"
      style={{ scaleX: scrollYProgress }}
    />
  );
};
