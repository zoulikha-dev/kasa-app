import React from "react";
import "./Banner.css";
const Banner = ({ image }) => {
  return (
    <div className="banner">
      <img src={image} alt="Banner" />
    </div>
  );
};

export default Banner;
