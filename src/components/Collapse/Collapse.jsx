import React, { useState } from "react";
import "./Collapse.css";

const Collapse = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false); //isOpen est initialisé à false, ce qui veux dire que le contenu du collapse est masqué

  return (
    <div className="collapse-block">
      <button className="toggle" onClick={() => setIsOpen(!isOpen)}>
        {/* A chaquefois que l'on clique sur le bouton, la fonction fléchée est
        exécutée. //setIsopen ... inverse la valeur de isOpen. */}
        <span>{label}</span>
        <img src={isOpen ? "/up-arrow.png" : "/down-arrow.png"} alt="flèche" />
      </button>
      {isOpen && <div className="content"> {children} </div>}
      {/* si isOpen est true alors le contenu entre les balises d'ouverture et de
      fermeture est affiché */}
    </div>
  );
};

export default Collapse;
