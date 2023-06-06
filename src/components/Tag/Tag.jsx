import React from "react";
import "./Tag.css";

const Tag = ({ text }) => {
  return (
    <div className="tag">
      <h4>{text}</h4>
    </div>
  );
};

export default Tag;
