import React, { useState } from "react";

// import resolveConfig from "tailwindcss/resolveConfig";

// const styleConfig = resolveConfig().theme;

// console.log("🚀 ~ file: ImageSearch.js ~ line 6 ~ styleConfig", styleConfig);

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

  // {/* onChange event for getting every change made in the form and set it to Text state */}
  return (
    <div className="max-w-sm mx-auto my-10 overflow-hidden rounded">
      <form onSubmit={onSubmit}>
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
      </form>
      {/* <form onSubmit={onSubmit} className="w-full max-w-sm">
        <div className="flex items-center py-2 border-b-2 border-teal-500">
          <input
            onChange={handleChange}
            className="w-full px-2 py-1 mr-3 leading-tight text-gray-700 bg-transparent border-none appearance-none focus:outline-none"
            type="text"
            placeholder="Search Image Term..."
          />
          
          <button
            className="flex flex-row flex-shrink-0 px-2 py-1 text-sm font-bold text-white transition-all bg-blue-500 border-4 border-blue-500 rounded hover:bg-blue-700 hover:border-blue-700 hover:drop-shadow-lg"
            type="submit"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
            <span>Search</span>
          </button>
        </div>
      </form> */}
    </div>
  );
}

export default ImageSearch;
