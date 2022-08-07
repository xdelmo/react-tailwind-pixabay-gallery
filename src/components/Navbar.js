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
    <header className="flex-col items-center py-5 text-white bg-teal-700 body-font md:flex-row drop-shadow-lg">
      <div className="container flex flex-col items-center justify-between px-5 mx-auto md:flex-row">
        <a
          href={anchorURL}
          className="flex items-center mb-4 font-medium title-font md:mb-0"
          onClick={resetSearch}
        >
          <img src={logoURL} alt="logo" className="w-8" />
          <span className="ml-3 text-2xl">Shutter Up</span>
        </a>
        <span className="text-center">
          Built with React, Tailwind and Pixabay's APIs
        </span>
      </div>
    </header>
  );
}

export default Navbar;
