import React from "react";
import { Link } from "react-router-dom";
import "./Error404.css";
import "./../../styles/index.css";

const Erreur404 = () => {
  return (
    <div>
      <h1>404</h1>
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
