import React, { useState } from "react";
import { MdClose, MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

function ImageSlider({ images, closeImageSlider }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 bg-black bg-opacity-75 z-50 flex items-center justify-center rounded-lg">
      <div className="w-full h-full max-w-full max-h-full relative">
        <img src={images[currentImageIndex]} alt="" className="w-full h-full object-contain" />
        <button onClick={prevImage} className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white text-3xl cursor-pointer">
          <MdKeyboardArrowLeft />
        </button>
        <button onClick={nextImage} className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white text-3xl cursor-pointer">
          <MdKeyboardArrowRight />
        </button>
        <button onClick={closeImageSlider} className="absolute top-2 right-2 text-white text-3xl cursor-pointer">
          <MdClose />
        </button>
      </div>
    </div>
  );
}

export default ImageSlider;
