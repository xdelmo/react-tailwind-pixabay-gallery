import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  function toggleVisible() {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  window.addEventListener("scroll", toggleVisible);

  const buttonVariants = {
    hidden: {
      x: "30vw",
    },
    whileHover: {
      y: [0, -10, 0],
      transition: {
        duration: 2,
        ease: "easeInOut",
        yoyo: Infinity,
      },
    },
    whileTap: { scale: 0.9 },
    show: {
      x: 0,
      transition: {
        duration: 0.75,
        ease: "easeInOut",
      },
    },
    exit: {
      x: "30vw",
      transition: {
        duration: 0.75,
        ease: "easeInOut",
      },
    },
  };

  return (
    <AnimatePresence exitBeforeEnter>
      {visible && (
        <motion.button
          className="z-50 shadow-xl btn btn-scrollToTop "
          onClick={scrollToTop}
          variants={buttonVariants}
          initial="hidden"
          animate="show"
          whileHover="whileHover"
          whileTap="whileTap"
          exit="exit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M11.47 2.47a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06l-6.22-6.22V21a.75.75 0 01-1.5 0V4.81l-6.22 6.22a.75.75 0 11-1.06-1.06l7.5-7.5z"
              clipRule="evenodd"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default ScrollTopButton;
