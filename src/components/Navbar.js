import React from "react";

function Navbar() {
  return (
    <header className="text-white bg-teal-700 body-font p-5 flex-col md:flex-row items-center drop-shadow-lg">
      <div className="flex justify-between flex-col md:flex-row items-center container mx-auto px-5">
        <a
          href="#"
          className="flex title-font font-medium items-center mb-4 md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="ml-3 text-2xl">Gallery</span>
        </a>
        <span className="text-center">
          Built with React, Tailwind and Pixabay's APIs
        </span>
      </div>
    </header>
  );
}

export default Navbar;
