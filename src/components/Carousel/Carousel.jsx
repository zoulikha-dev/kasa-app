import React, { useState } from "react";
import "./Carousel.css";

const Carousel = ({ images }) => {
  //Déclare une variable d'état "currentSLide" pour suivre l'index de l'image actuelle ds le diapo
  const [currentSlide, setCurrentSlide] = useState(0);

  // Fonction pour passer à la diapositive précédente
  const prevSlide = () => {
    setCurrentSlide((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    // Si prevIndex est égal à 0, on passe à la dernière image
    // Sinon, on retire l'index pour passer à la diapositive précédente
  };

  // Fonction pour passer à la diapositive suivante
  const nextSlide = () => {
    setCurrentSlide((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    // Si prevIndex est égal à l'index de la dernière image,
    // on passe à la première image (index 0)
    // Sinon, on incrémente l'index pour passer à la diapositive suivante
  };

  const prev = "/left-arrow.png";
  const next = "/right-arrow.png";

  return (
    <div className="container-carroussel">
      {/* cela permet de vérifier si il y a plus d'une image, affiche le btn de la diapo. */}
      {images.length > 1 && (
        <button onClick={prevSlide}>
          <img className="prev" src={prev} alt="Previous" />
        </button>
      )}
      {/* Affiche l'image de la diapositive actuelle */}
      <img className="img-caroussel" src={images[currentSlide]} alt="Slide" />

      {/* Cela permet de vérifier si il y a plus d'une image, affiche le bouton de diapo suivante */}
      {images.length > 1 && (
        <button onClick={nextSlide}>
          <img className="next" src={next} alt="Next" />
        </button>
      )}

      {/* Cela permet de vérifier s'il y a plus d'une image, affiche le compteur de la diapo. */}
      {images.length > 1 && (
        <div className="slide-counter">
          {currentSlide + 1}/{images.length}
        </div>
      )}
    </div>
  );
};

export default Carousel;
