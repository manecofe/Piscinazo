import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

function Carousel() {
  const slides = [
    {
      url: "https://cdn.pixabay.com/photo/2020/04/17/12/28/pool-5055009_960_720.jpg",
    },
    {
      url: "https://cdn.pixabay.com/photo/2017/05/31/10/23/manor-house-2359884_1280.jpg",
    },
    {
      url: "https://cdn.pixabay.com/photo/2014/07/10/17/17/swimming-pool-389267_960_720.jpg",
    },
    {
      url: "https://cdn.pixabay.com/photo/2016/10/13/09/10/swimming-pool-1737173_960_720.jpg",
    },
    {
      url: "https://cdn.pixabay.com/photo/2016/10/06/16/35/summer-1719401_1280.jpg",
    },
  ];

  const [isLoaded, setIsLoaded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const imagePromises = slides.map((slide) => {
      const image = new Image();
      image.src = slide.url;
      return new Promise((resolve) => {
        image.onload = resolve;
      });
    });

    Promise.all(imagePromises).then(() => {
      setIsLoaded(true);
    });
  }, [slides]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[1400px] h-[400px] md:h-[780px] w-full m-auto py-16 px-4 relative group">
      {isLoaded && (
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        ></div>
      )}
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <FontAwesomeIcon onClick={prevSlide} icon={faAngleLeft} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <FontAwesomeIcon onClick={nextSlide} icon={faAngleRight} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <FontAwesomeIcon icon={faMinus} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
