import React from "react";

export default function Footer() {
  //  Render `<a>` with Optional href
  let anchorURL = "#";

  return (
    <footer className="text-white bg-teal-700 body-font drop-shadow-lg">
      <div className="container flex flex-col items-center px-5 py-5 mx-auto sm:flex-row">
        <a
          href={anchorURL}
          className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-red-700"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
          {/* <span className="ml-3 text-xl">Gallery</span> */}
        </a>
        <p className="mt-4 text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0">
          © 2022 Emanuele Del Monte —
          <a
            href="https://github.com/xdelmo"
            className="ml-1 "
            rel="noopener noreferrer"
            target="_blank"
          >
            @xdelmo
          </a>
        </p>
        <span className="inline-flex justify-center mt-4 sm:ml-auto sm:mt-0 sm:justify-start">
          <a
            className="ml-3"
            href="https://www.linkedin.com/in/emanueledelmonte/"
          >
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
}
