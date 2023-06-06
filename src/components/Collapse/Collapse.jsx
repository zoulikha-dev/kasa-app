import React, { useState } from "react";
import "./Collapse.css";

const Collapse = (props) => {
  const [isOpen, setIsOpen] = useState(false); //isOpen est initialisé à false, ce qui veux dire que le contenu du collapse est masqué

  return (
    <div>
      <button className="toggle" onClick={() => setIsOpen(!isOpen)}>
        {/* A chaquefois que l'on clique sur le bouton, la fonction fléchée est
        exécutée. //setIsopen ... inverse la valeur de isOpen. */}
        {props.label}
      </button>
      {isOpen && <div className="content"> {props.children} </div>}
      {/* si isOpen est true alors le contenu entre les balises d'ouverture et de
      fermeture est affiché */}
    </div>
  );
};

export default Collapse;
