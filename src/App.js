import React, { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";
import Footer from "./components/Footer";
import ImageSearch from "./components/ImageSearch";
import Navbar from "./components/Navbar";

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

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
  }, [term]);

  return (
    <div className="app">
      <Navbar />
      <div className="container mx-auto p-5 min-h-screen">
        <ImageSearch searchText={(text) => setTerm(text)} />
        {/* Error message */}
        {!isLoading && images.length === 0 && (
          <h1 className="text-6xl text-center mx-auto">No Images Found</h1>
        )}
        {/* Loading message */}
        {isLoading ? (
          <h1 className="text-6xl text-center mx-auto">Loading...</h1>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
            {images.map((image) => (
              <ImageCard key={image.id} image={image} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
