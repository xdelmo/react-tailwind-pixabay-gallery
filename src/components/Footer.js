import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  //  Render `<a>` with Optional href
  let anchorURL = "#";

  const heartVariants = {
    animate: {
      scale: [1, 1.1, 1, 1.2, 1, 1],
      transition: {
        yoyo: Infinity,
        delay: 1,
        duration: 2,
      },
    },
  };

  return (
    <footer className="text-white bg-teal-700 body-font drop-shadow-lg">
      <div className="container flex flex-col items-center px-5 py-5 mx-auto sm:flex-row">
        <a
          onClick={() =>
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
          }
          href="https://www.paypal.com/paypalme/emanueledelmo"
          rel="noopener noreferrer"
          target="_blank"
          className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start"
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-red-600"
            viewBox="0 0 20 20"
            fill="currentColor"
            variants={heartVariants}
            animate="animate"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </motion.svg>
        </a>
        <p className="mt-4 text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0">
          © 2022{" "}
          <a
            href="https://www.linkedin.com/in/emanueledelmonte/"
            className="ml-1 transition-all hover:text-gray-300"
            rel="noopener noreferrer"
            target="_blank"
          >
            Emanuele Del Monte
          </a>
        </p>
        <div className="inline-flex items-center justify-center gap-2 mt-4 sm:ml-auto sm:mt-0 sm:justify-start">
          {/* GITHUB ICON */}
          <a
            href="https://github.com/xdelmo/react-tailwind-pixabay-gallery"
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 transition-all hover:text-black"
              viewBox="0 0 30 30"
            >
              <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
            </svg>
          </a>
          {/* LINKEDIN ICON */}
          <a
            href="https://www.linkedin.com/in/emanueledelmonte/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0"
              className="w-5 h-5 transition-all hover:text-blue-500"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
