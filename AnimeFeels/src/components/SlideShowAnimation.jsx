// src/Slideshow.js
import React, { useState, useEffect } from 'react';


const images = [
  "https://i.pinimg.com/1200x/dd/a4/db/dda4db353125462e209aa847b4ac3135.jpg",
    "https://image.tmdb.org/t/p/original/4dzp7aZnBaIL1YFzErKUdo6XWUn.jpg",
    "../../anime-images/demonslayer.jpg",
    "../../anime-images/image.jpeg",
   
  "https://wallpapers.com/images/hd/death-note-light-yagami-l-and-ryuk-htruruirspqq0zot.jpg",

  
];

const SlideShowAnimation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative top-0 w-full h-[400px] overflow-hidden ">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
        >
          <img src={image} alt={`Slide ${index}`} className=" object-cover w-full h-full" />
        </div>
      ))}
    </div>
  )
};

export default SlideShowAnimation;
