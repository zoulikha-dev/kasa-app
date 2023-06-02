import React from "react";
import "./Tag.css";

const Tag = ({ text }) => {
  return (
    <div className="tag">
      <p>{text}</p>
    </div>
  );
};

export default Tag;
