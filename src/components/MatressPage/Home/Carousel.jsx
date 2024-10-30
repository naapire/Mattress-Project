import React, { useState } from "react";
import Slide1 from "../../../assets/slide1.jpg";
import Slide2 from "../../../assets/slide2.jpg";
import Slide3 from "../../../assets/slide3.jpg";
import Slide4 from "../../../assets/slide4.jpg";

function Carousel() {
  const slides = [Slide1, Slide2, Slide3, Slide4];
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Function to set slide manually
  const setSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full mt-40">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {/* Slide Images */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${
              index === currentSlide ? "block" : "hidden"
            } duration-700 ease-in-out`}
          >
            <img src={slide} className="block w-full" alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Indicator Dots */}
      <div className="absolute bottom-5 left-1/2 z-30 flex space-x-3 -translate-x-1/2">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-gray-800" : "bg-gray-300"
            }`}
            onClick={() => setSlide(index)}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Navigation Controls */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={prevSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
          <svg
            className="w-4 h-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1L1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={nextSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
          <svg
            className="w-4 h-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 9l4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}

export default Carousel;
