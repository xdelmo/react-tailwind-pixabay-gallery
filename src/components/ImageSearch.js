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
    event.preventDefault();
    // setTerm in App component calling searchText function via props
    searchText(text);
  }

  return (
    <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
      <form onSubmit={onSubmit} className="w-full max-w-sm">
        <div className="flex items-center border-b-2 border-teal-500 py-2">
          {/* onChange event for getting every change made in the form and set it to Text state */}
          <input
            onChange={handleChange}
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search Image Term..."
          />
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default ImageSearch;
