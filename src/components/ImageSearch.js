import React, { useState } from "react";

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

  return (
    <div className="max-w-sm mx-auto my-10 overflow-hidden rounded">
      <form onSubmit={onSubmit} className="w-full max-w-sm">
        <div className="flex items-center py-2 border-b-2 border-teal-500">
          {/* onChange event for getting every change made in the form and set it to Text state */}
          <input
            onChange={handleChange}
            className="w-full px-2 py-1 mr-3 leading-tight text-gray-700 bg-transparent border-none appearance-none focus:outline-none"
            type="text"
            placeholder="Search Image Term..."
          />
          <button
            className="flex flex-row flex-shrink-0 px-2 py-1 text-sm font-bold text-white bg-blue-500 border-4 border-blue-500 rounded hover:bg-blue-700 hover:border-blue-700 hover:drop-shadow-lg"
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
      </form>
    </div>
  );
}

export default ImageSearch;
