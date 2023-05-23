import React from "react";
import "./Thumb.css";

const Thumb = ({ title, image }) => {
  return (
    <div className="thumb">
      <img src={image} alt={title} />
      <h2>{title}</h2>
    </div>
  );
};

export default Thumb;
