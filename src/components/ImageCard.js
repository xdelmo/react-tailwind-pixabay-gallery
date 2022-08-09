import React from "react";

// Destructuring of props using {image}
function ImageCard({ image, searchForTag }) {
  // image.tags in API is a unique string and each tag is separated from the others by a comma
  // use split(",") to create an array that contains n value for n words in image.tags
  let tags = image.tags.split(",");
  // Remove the leading and trailing spaces from a string with trim() method
  tags = tags.map((tag) => {
    return tag.trim();
  });

  // function to set term state in App to the hashtag clicked
  function searchTag(hashtag) {
    searchForTag(hashtag);
  }

  function downloadImage(src, url) {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = src;
    img.onload = () => {
      // create Canvas
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      // create <a> tag
      const a = document.createElement("a");
      a.download = `${url}.png`;
      a.href = canvas.toDataURL("image/png");
      a.click();
    };
  }

  // Generate random integer (1, 59)
  function getRandomInt() {
    let randomInt = Math.ceil(Math.random() * 59);
    if (randomInt < 10) {
      // Avatar images before 10 are named 01, 02, ecc..
      // Convert number into a string
      randomInt = randomInt.toString();
      // Add a leading zero
      randomInt = "0" + randomInt;
    }
    return randomInt;
  }

  return (
    <div className="flex flex-col flex-grow">
      {/* Avatar + nickname section */}
      <div className="flex items-center justify-start gap-2 px-4 py-3 text-xl font-bold">
        <img
          className="w-6 rounded-full ring-2 ring-teal-500 "
          src={`./images/avatars/Artboards_Diversity_Avatars_by_Netguru-${getRandomInt()}.svg`}
          alt="Bordered avatar"
        />{" "}
        <h3 className="text-sm">{image.user} </h3>
      </div>

      <div className="flex flex-col flex-grow overflow-hidden rounded shadow-lg">
        <div>
          <img
            src={image.webformatURL}
            alt="search result"
            className="transition-all ease-in-out hover:brightness-75"
          />
        </div>
        <div className="px-4 py-4">
          <ul>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block w-5 h-5 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fillRule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clipRule="evenodd"
                />
              </svg>
              <strong className="mr-1">Views: </strong> {image.views}
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block w-5 h-5 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <strong className="mr-1">Downloads: </strong> {image.downloads}
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block w-5 h-5 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
              </svg>
              <strong className="mr-1">Likes: </strong> {image.likes}
            </li>
          </ul>
        </div>
        {/* DOWNLOAD BUTTON */}
        <div className="px-4 py-0 ">
          <button
            className="inline-flex items-center px-4 py-2 font-bold text-white transition-all bg-blue-500 border-blue-500 rounded hover:bg-blue-700 hover:border-blue-700 hover:drop-shadow-lg hover:transition-all"
            onClick={() => downloadImage(image.webformatURL, image.pageURL)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block w-5 h-5 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span>Download</span>
          </button>
        </div>
        <div className="px-4 py-4 ">
          {/* Pass index as second parameter to map*/}
          {tags.map((tag, index) => (
            <span
              key={index}
              // onClick run at the same time 2 function
              // 👇️ scroll to top on page load
              onClick={() => {
                searchTag(tag);
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              className="inline-block px-3 py-1 mt-2 mr-2 text-sm font-semibold text-gray-700 transition-all bg-gray-200 rounded-full cursor-pointer hover:bg-gray-700 hover:text-white hover:drop-shadow-md"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageCard;
