import React, { useState } from "react";
import { motion } from "framer-motion";

function ImageSearch({ searchText }) {
  const [text, setText] = useState("");

  // Create a function which gets event from the browser as a parameter
  function handleChange(event) {
    // Destructure event.target object into smaller variables like name and value
    const searchText = event.target.value;
    // Set a new state with event.value from input
    setText(searchText);
  }

  function onSubmit(event) {
    // prevent from page refreshing
    event.preventDefault();
    // setTerm in App component calling searchText function via props
    searchText(text);
  }

  // Variants for framer motion animations
  const formVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 1,
        duration: 0.75,
      },
    },
  };

  // {/* onChange event for getting every change made in the form and set it to Text state */}
  return (
    <div className="max-w-sm mx-auto my-10 overflow-hidden rounded">
      <motion.form
        onSubmit={onSubmit}
        variants={formVariants}
        initial="hidden"
        animate="show"
      >
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
        >
          Search
        </label>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>

          <input
            type="input"
            id="default-search"
            onChange={handleChange}
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search images"
            required
          />
          <button
            type="submit"
            className="btn absolute right-2.5 bottom-2.5 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Search
          </button>
        </div>
      </motion.form>
    </div>
  );
}

export default ImageSearch;
