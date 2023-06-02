import React from "react";
import { Link } from "react-router-dom";
import "./Thumb.css";

const Thumb = ({ id, title, cover }) => {
  return (
    // Utilisation du composant Link pour créer un lien vers la page Housing correspondante
    <Link to={`/housing/${id}`}>
      <div className="thumb">
        <img src={cover} alt={title} />
        <h2>{title}</h2>
      </div>
    </Link>
  );
};

export default Thumb;
