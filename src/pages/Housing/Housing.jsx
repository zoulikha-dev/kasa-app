import React from "react";
import Tag from "../../components/Tag/Tag";
import "./Housing.css";

const Logements = () => {
  return (
    <div className="container-tag">
      <Tag text="Cosy" />
      <Tag text="Canal" />
      <Tag text="Paris 10" />
    </div>
  );
};

export default Logements;
