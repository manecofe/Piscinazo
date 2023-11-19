import React, { useEffect } from "react";
import M from "materialize-css";
import "./car.css";
import BackImage from "../assets/img/avatar.png";
function Testimonials() {
  const slides = [
    {
      url: "https://cdn.pixabay.com/photo/2020/04/17/12/28/pool-5055009_960_720.jpg",
      title: "Testimonio 1",
      content:
        "Este es un testimonio sobre la empresa de construcción de piscinas.",
    },
    {
      url: "https://cdn.pixabay.com/photo/2017/05/31/10/23/manor-house-2359884_1280.jpg",
      title: "Testimonio 2",
      content:
        "Otro cliente satisfecho comparte su experiencia. Nulla facilisi.",
    },
    {
      url: "https://cdn.pixabay.com/photo/2014/07/10/17/17/swimming-pool-389267_960_720.jpg",
      title: "Testimonio 3",
      content: "Un tercer cliente comparte sus pensamientos sobre el servicio.",
    },
    {
      url: "https://cdn.pixabay.com/photo/2016/10/13/09/10/swimming-pool-1737173_960_720.jpg",
      title: "Testimonio 4",
      content:
        "Otro testimonio positivo que destaca la calidad del trabajo realizado.",
    },
    {
      url: "https://cdn.pixabay.com/photo/2016/10/06/16/35/summer-1719401_1280.jpg",
      title: "Testimonio 5",
      content:
        "El último cliente elogia la profesionalidad y la eficiencia del equipo de construcción.",
    },
  ];

  useEffect(() => {
    const options = {
      duration: 300,
      onCycleTo: () => {},
    };
    const instance = M.Carousel.init(
      document.querySelector(".carousel"),
      options
    );
    return () => {
      instance.destroy();
    };
  }, []);

  return (
    <div className="carousel overflow-x-hidden max-w-full -mt-16 md:mt-8 overflow-y-clip">
      {slides.map((slide, index) => (
        <div key={index} className="carousel-item mx-4">
          <img
            alt={`Slide ${index + 1}`}
            className="rounded-t-lg shadow-lg"
            src={slide.url}
          />
          <div className="bg-neon-pink rounded-b-lg p-6">
            <div
              style={{
                backgroundImage: `url(${BackImage})`,
              }}
              className="bg-blue-300 bg-cover w-16 h-16 rounded-full absolute top-24 -right-2"
            ></div>

            <h1 className="select-none text-white font-bold text-lg mb-4">
              {slide.title}
            </h1>
            <p className="select-none text-white">{slide.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Testimonials;
