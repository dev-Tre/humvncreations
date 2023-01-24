import { motion, AnimatePresence } from "framer-motion";
import styles from "./layout.module.css";
import { useRouter } from 'next/router'

const variants = {
  out: {
    opacity: 0,
    y: 40,
    transition: {
      duration: 0.85,
      staggerChildren: 0.5,
    },
  },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      staggerChildren: 0.5,
    },
  },
};

const Transition = ({ children }) => {
  const { asPath } = useRouter();

  return (
    <div className={styles.effect1}>
      <AnimatePresence initial={true} mode="wait">
        <motion.div
          variants={variants}
          animate="in"
          initial="out"
          exit="out"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Transition;
