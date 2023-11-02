import React from 'react';
import videobg from '../assets/1_1-Compressed.mp4';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

function Hero() {
  const handleNextClick = () => {
    window.scrollBy(0, 500); 
  };

  return (
    <div className="h-screen">
      <video className="w-full h-full object-cover absolute top-0 left-0 z-10" autoPlay loop muted>
        <source src={videobg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div
        className="absolute z-10 bottom-10 left-1/2 transform -translate-x-1/2 w-24 h-24 border rounded-full text-white flex items-center justify-center cursor-pointer hover:border hover-bg-white hover-bg-opacity-10"
        onClick={handleNextClick}
      >
        <MdOutlineKeyboardArrowDown className="hover-text-white text-5xl font-thin" />
      </div>
    </div>
  );
}

export default Hero;
