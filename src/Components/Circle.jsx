import React from 'react';
import s1 from '../assets/sec/s1.jpg';
import s2 from '../assets/sec/s2.jpg';
import s3 from '../assets/sec/s3.jpg';
import s4 from '../assets/sec/s4.jpg';
import s5 from '../assets/sec/s5.jpg';
import video from '../assets/sec/walk.mp4';

const categories = [
    { id: 1, title: 'CONCEPT SKETCHES', image: s1 },
    { id: 2, title: 'HAND RENDERINGS', image: s2 },
    { id: 3, title: 'AUTOCAD', image: s3 },
    { id: 4, title: '3D RENDERINGS', image: s4 },
    { id: 5, title: 'MATERIAL BOARDS', image: s5 },
   
];

function Circle() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 py-10">
      {categories.map((category) => (
        <div key={category.id} className="text-center flex flex-col items-center mb-5">
          <h1 className="text-lg font-bold mb-4">{category.title}</h1>
          <div className="relative w-52 h-52">
            <img
              src={category.image}
              alt={category.title}
              className="rounded-full object-cover w-full h-full transition-transform transform hover:scale-105 hover:translateZ-0"
            />
          </div>
        </div>
      ))}
      <div className="text-center flex flex-col items-center">
        <h1 className="text-lg font-bold mb-4">VIRTUAL WALK-THROUGHS</h1>
        <div className="relative w-52 h-52">
          <video
            src={video}
            autoPlay
            muted
            loop
            className="rounded-full object-cover w-full h-full transition-transform transform hover:scale-105 hover:translateZ-0"
          />
        </div>
      </div>
    </div>
  );
}

export default Circle;
