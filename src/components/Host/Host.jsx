import React from "react";
import "./Host.css";

const Host = ({ name, picture }) => {
  return (
    <div className="host">
      <h5 className="nom">{name}</h5>
      <img className="photo" src={picture} alt="Photo" />
    </div>
  );
};

export default Host;
