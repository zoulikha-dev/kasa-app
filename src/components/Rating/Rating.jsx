import React from "react";

const Rating = ({ rating }) => {
  const stars = []; //Tableau pour stocker les étoiles

  // Boucle for pour générer les étoiles en fonction de la valeur de rating
  for (let index = 0; index < rating; index++) {
    stars.push(<img key={index + rating} src="/pink-star.png" alt="Etoile" />);
  } // Ajoute une balise <img> à l'array stars pour chaque étoile

  return <div>{stars}</div>;
};

export default Rating;
