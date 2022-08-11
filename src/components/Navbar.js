import React, { useState } from "react";

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

  return (
    <div>
      <header className="flex-col items-center py-5 text-white bg-teal-700 body-font drop-shadow-lg">
        <nav className="container flex items-center justify-between px-5 mx-auto">
          <a
            href={anchorURL}
            className="flex items-center font-medium title-font md:mb-0"
            onClick={resetSearch}
          >
            <img src={logoURL} alt="logo" className="w-8" />
            <span className="ml-3 text-2xl">Shutter Up</span>
          </a>
          {/* OPEN MENU BUTTON */}
          <button onClick={handleMenu}>
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
        </nav>
      </header>

      {/* POP UP NAVIGATION FOR MOBILE */}
      {isMenuOpen && (
        <nav className="fixed top-0 bottom-0 left-0 right-0 z-10 backdrop-blur-sm">
          {/* UL LINKS */}
          <ul className="absolute top-0 bottom-0 right-0 z-10 w-10/12 px-5 py-3 bg-white drop-shadow-2xl">
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
            onClick={handleMenu}
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
        </nav>
      )}
    </div>
  );
}

export default Navbar;
