import { useInView } from "react-intersection-observer";
import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";

import { useOnScreen } from "../hooks/useOnScreen";

export default function Home() {
  const grayRef = useRef(null);

  const IntersectGrayRef = useOnScreen(grayRef, "-100px");
  console.log(IntersectGrayRef);

  const { ref, inView, entry } = useInView({ threshold: 0.8 });
  const parentVariant = {
    init: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: { duration: 0, when: "beforeChildren", staggerChildren: 0.4 },
    },

    exit: {
      opacity: 0,
      y: "100vw",
    },
  };

  const childVariant = {
    init: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
  };

  return (
    <motion.div
      variants={parentVariant}
      initial="init"
      animate="animate"
      exit="exit"
      className="mx-auto border-2 max-w-xl"
    >
      <motion.div
        variants={childVariant}
        className="mx-auto w-56 h-56 bg-blue-300 border-2 border-black"
      >
        Emty Div lfjosdkad
      </motion.div>
      <motion.div
        variants={childVariant}
        className="mx-auto w-56 h-56 bg-green-300 border-2 border-black"
      >
        Emty Div lfjosdkad
      </motion.div>
      <motion.div
        variants={childVariant}
        className="mx-auto w-56 h-56 bg-red-300 border-2 border-black"
      >
        Emty Div lfjosdkad
      </motion.div>

      <motion.div
        variants={childVariant}
        ref={grayRef}
        animate={IntersectGrayRef ? { opacity: 1 } : { opacity: 0 }}
        className="mx-auto w-56 h-56 bg-gray-300 border-2 border-black"
      >
        Emty Div lfjosdkad
      </motion.div>

      <motion.div
        variants={childVariant}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        ref={ref}
        className="mx-auto w-56 h-56 bg-blue-300 border-2 border-black"
      >
        Emty Div lfjosdkad
      </motion.div>
    </motion.div>
  );
}
