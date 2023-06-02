import React, { useState } from "react";
// import "./Caroussel.css";

const Carousel = ({ images }) => {
  //Déclare une variable d'état "currentSLide" pour suivre l'index de l'image actuelle ds le diapo
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    // Si l'index précédent (prevIndex) est égal à 0, on passe à la dernière image
    // Sinon, on retire l'index pour passer à la diapositive précédente
  };

  const nextSlide = () => {
    setCurrentSlide((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    // Si l'index précédent (prevIndex) est égal à l'index de la dernière image,
    // on passe à la première image (index 0)
    // Sinon, on incrémente l'index pour passer à la diapositive suivante
  };
  return (
    <div>
      <button onClick={prevSlide}>Prev</button>
      <img src={images[currentSlide]} alt="Slide" />
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Carousel;
