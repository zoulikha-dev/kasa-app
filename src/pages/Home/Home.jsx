import React from "react";
import Thumb from "../../components/Thumb/Thumb";
import "./Home.css";

const Home = () => {
  return (
    <main>
      <div className="container-thumb">
        <Thumb />
        <Thumb />
        <Thumb />
        <Thumb />
        <Thumb />
        <Thumb />
      </div>
    </main>
  );
};

export default Home;
