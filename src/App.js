import React, { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";
import Footer from "./components/Footer";
import ImageSearch from "./components/ImageSearch";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Trends from "./components/Trends";

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // Create and initialize term to localStorage variable or empy string
  const [term, setTerm] = useState(
    JSON.parse(localStorage.getItem("term")) || ""
  );

  useEffect(() => {
    // Hide API key using an external .env file
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));

    // Set term to localStorage everytime term changes onSubmit
    localStorage.setItem("term", JSON.stringify(term));
  }, [term]);

  return (
    <div className="app font-font-main">
      <Navbar searchText={(text) => setTerm(text)} />
      <Trends searchTrend={(trend) => setTerm(trend)} />
      <main>
        <div className="container min-h-screen p-5 mx-auto">
          <ImageSearch searchText={(event) => setTerm(event)} />
          {/* Error message */}
          {!isLoading && images.length === 0 && (
            <h1 className="mx-auto text-6xl text-center">No Images Found</h1>
          )}
          {/* Loading message */}
          {isLoading ? (
            <div role="status" className="flex items-center justify-center ">
              <svg
                aria-hidden="true"
                className="w-16 text-black animate-spin dark:text-gray-300 fill-blue-700"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <div className="grid gap-4 mt-16 md:grid-cols-2 lg:grid-cols-3">
              {images.map((image) => (
                <ImageCard
                  key={image.id}
                  image={image}
                  searchForTag={(tag) => setTerm(tag)}
                />
              ))}
            </div>
          )}
        </div>
      </main>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0F766E"
          fillOpacity="1"
          d="M0,224L80,240C160,256,320,288,480,282.7C640,277,800,235,960,218.7C1120,203,1280,213,1360,218.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <Newsletter />
      <hr></hr>
      <Footer />
    </div>
  );
}
