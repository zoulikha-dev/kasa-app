import React from "react";
import { Link } from "react-router-dom";
import "./Error404.css";

const Erreur404 = () => {
  return (
    <div>
      <h3>404</h3>
      <p>Oups! la page que vous demandez n'existe pas.</p>
      <div className="lien-accueil">
        <Link to="/" className="lien">
          Retourner sur la page d'accueil
        </Link>
      </div>
    </div>
  );
};

export default Erreur404;
