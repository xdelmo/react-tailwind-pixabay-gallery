import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar({ searchText }) {
  //  Render `<a>` with Optional href
  let anchorURL = "#";
  const logoURL = "/images/logo.png";

  // Reset term to empty string everytime user clicks on logo
  function resetSearch() {
    searchText("");
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to handle mobile menu
  function handleMenu() {
    // Revert isMenuOpen false to true, true to false
    setIsMenuOpen((prevState) => !prevState);
    // Prevent body scrolling when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = "unset";
    } else {
      document.body.style.overflow = "hidden";
    }
  }

  // Variants for framer motion animations
  const navVariants = {
    hidden: {
      opacity: 0,
      y: "-20vh",
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        when: "beforeChildren",
        staggerChildren: 0.4,
      },
    },
  };

  const logoVariants = {
    hidden: {
      opacity: 0,
      rotate: 360,
    },
    show: {
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 0.75,
        ease: "backInOut",
      },
    },
  };

  const navMobileVariants = {
    hidden: {
      opacity: 0,
      x: "100vw",
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.75,
      },
    },
  };

  return (
    <div>
      <header className="z-50 flex-col items-center py-5 text-white bg-teal-700 body-font drop-shadow-lg">
        {/* DESKTOP NAV */}
        <motion.nav
          className="container flex items-center justify-between px-5 mx-auto"
          variants={navVariants}
          initial="hidden"
          animate="show"
        >
          <a
            href={anchorURL}
            className="flex items-center font-medium title-font md:mb-0"
            onClick={resetSearch}
          >
            {/* LOGO */}
            <motion.img
              src={logoURL}
              alt="logo"
              className="w-8"
              variants={logoVariants}
            />
            <span className="ml-3 text-2xl">Shutter Up</span>
          </a>
          {/* OPEN MENU BUTTON */}
          <button onClick={() => handleMenu()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 md:hidden"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <div className="hidden md:block">
            <a href={anchorURL}>Log In</a>
            <a href={anchorURL}>
              <button className="ml-4 transition-all focus:ring-4 focus:outline-none focus:ring-blue-300 btn">
                Sign up
              </button>
            </a>
          </div>
        </motion.nav>
      </header>

      {/* POP UP NAVIGATION FOR MOBILE */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="fixed top-0 bottom-0 left-0 right-0 z-20 backdrop-blur-sm"
            variants={navMobileVariants}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            {/* UL LINKS */}
            <ul className="absolute top-0 bottom-0 right-0 z-20 w-10/12 px-5 py-3 bg-white drop-shadow-2xl">
              <li className="border-b border-inherit">
                <a href={anchorURL} className="block p-4 ">
                  Home
                </a>
              </li>
              <li className="border-b border-inherit">
                <a href={anchorURL} className="block p-4 ">
                  Log In
                </a>
              </li>
              <li className="border-b border-inherit">
                <a href={anchorURL} className="block p-4 ">
                  <button className="transition-all focus:ring-4 focus:outline-none focus:ring-blue-300 btn">
                    Sign up
                  </button>
                </a>
              </li>
            </ul>
            {/* CLOSE BUTTON */}
            <button
              className="absolute top-0 bottom-0 left-0 right-0"
              onClick={() => handleMenu()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute w-8 p-1 text-white bg-blue-500 border-2 border-solid rounded-full top-5 left-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
