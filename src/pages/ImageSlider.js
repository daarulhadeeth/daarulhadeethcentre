import React, { useState } from 'react';

const ImageSlider = ({ images }) => {
  const [index, setIndex] = useState(0);

  const goToNext = () => {
    setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPrev = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="relative">
      <div className="w-full overflow-hidden rounded-lg shadow-lg">
        <img
          src={images[index].src}
          alt={images[index].alt}
          className="w-full object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between px-4">
        <button
          onClick={goToPrev}
          className="bg-gray-800 text-white rounded-full p-2 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={goToNext}
          className="bg-gray-800 text-white rounded-full p-2 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
      <div className="w-full bg-gray-900 bg-opacity-50 text-white px-4 py-2">
        <p className="text-sm">{images[index].description}</p>
      </div>
    </div>
  );
};

export default ImageSlider;
