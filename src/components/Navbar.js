import React from "react";

function Navbar({ searchText }) {
  //  Render `<a>` with Optional href
  let anchorURL = "#";
  const logoURL = "/images/logo.png";

  // Reset term to empty string everytime user clicks on logo
  function resetSearch() {
    searchText("");
  }

  return (
    <header className="flex-col items-center py-5 text-white bg-teal-700 body-font drop-shadow-lg">
      <div className="container flex items-center justify-between px-5 mx-auto">
        <a
          href={anchorURL}
          className="flex items-center font-medium title-font md:mb-0"
          onClick={resetSearch}
        >
          <img src={logoURL} alt="logo" className="w-8" />
          <span className="ml-3 text-2xl">Shutter Up</span>
        </a>

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

        <div className="hidden md:block">
          <button>Log In</button>
          <button className="ml-4 transition-all focus:ring-4 focus:outline-none focus:ring-blue-300 btn">
            Sign up
          </button>
        </div>
        {/* <span className="text-center lg:hidden">
          Built with React, Tailwind and Pixabay's APIs
        </span> */}
      </div>
    </header>
  );
}

export default Navbar;
