import React from "react";

const Host = ({ name, picture }) => {
  return (
    <div>
      <h3 className="nom">{name}</h3>
      <img className="photo" src={picture} alt="Photo" />
    </div>
  );
};

export default Host;
