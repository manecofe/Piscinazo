import React from "react";
import { useInView } from "react-intersection-observer";

const FadeInImage = ({ src, alt, className }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`fade-in-container transition-all duration-1000 ${
        inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
      } ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="max-w-full hover:scale-100 transition-transform scale-125 overflow-clip mx-auto rounded-lg shadow-lg"
      />
    </div>
  );
};

export default FadeInImage;
