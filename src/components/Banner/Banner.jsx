import React from "react";
import "./Banner.css";
const Banner = ({ image, titre }) => {
  return (
    <div className="banner">
      <img src={image} alt={titre} />
      <h1> {titre} </h1>
    </div>
  );
};

export default Banner;
