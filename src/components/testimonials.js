import React, { useEffect, useState } from "react";
import M from "materialize-css";
import axios from "axios";
import "./car.css";
import BackImage from "../assets/img/avatar.png";

function Testimonials() {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Obtener datos de Lorem Picsum para todas las imágenes
        const picsumResponse = await axios.get(
          "https://picsum.photos/v2/list?page=1&limit=5"
        );

        const picsumSlides = picsumResponse.data.map((image, index) => ({
          url: image.download_url,
          title: `Testimonio ${index + 1}`,
          content: "Texto de ejemplo para el testimonio.",
        }));

        // Obtener datos de demostración de texto con jsonplaceholder
        const textResponse = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?_limit=5"
        );

        const textSlides = textResponse.data.map((post, index) => ({
          url: picsumSlides[index].url,
          title: `Testimonio ${index + 1}`,
          content: truncateText(post.body, 50), // Limitar a 100 caracteres
        }));

        setSlides(textSlides);

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
      } catch (error) {
        console.error("Error al obtener datos ficticios:", error);
      }
    };

    // Función para truncar el texto a una longitud específica
    const truncateText = (text, maxLength) => {
      return text.length > maxLength
        ? text.substring(0, maxLength - 3) + "..."
        : text;
    };

    fetchData();
  }, []);

  return (
    <div className="carousel overflow-x-hidden max-w-full -mt-16 md:mt-8 overflow-y-clip">
      {slides.map((slide, index) => (
        <div
          key={index}
          className="text-white dark:text-slate-300 carousel-item mx-4"
        >
          <img
            alt={`Slide ${index + 1}`}
            className="rounded-t-lg shadow-lg"
            src={slide.url}
          />
          <div className="bg-neon-pink dark:bg-dark-pink rounded-b-lg p-6">
            <div
              style={{
                backgroundImage: `url(${BackImage})`,
              }}
              className="bg-blue-300 bg-cover w-16 h-16 rounded-full absolute top-24 -right-2"
            ></div>

            <h1 className="select-none font-bold text-lg mb-4">
              {slide.title}
            </h1>
            <p className="select-none">{slide.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Testimonials;
