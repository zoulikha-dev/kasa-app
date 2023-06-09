import React from "react";

const Rating = ({ rating }) => {
  const stars = []; //Tableau pour stocker les étoiles

  // Boucle for pour générer les étoiles en fonction de la valeur de rating
  for (let index = 0; index < 5; index++) {
    stars.push(
      <img
        key={index + rating}
        src={index < rating ? "/pink-star.png" : "/grey-star.png"}
        alt="Etoile"
      />
    );
  } // Ajoute une balise <img> à l'array stars pour chaque étoile

  return <div>{stars}</div>;
};

export default Rating;
