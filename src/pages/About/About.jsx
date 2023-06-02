import React from "react";
import Collapse from "../../components/Collapse/Collapse";
import Banner from "../../components/Banner/Banner";
import "./About.css";

const About = () => {
  const bannerImage = "/banner2.png";

  return (
    <>
      <div className="container-banner2">
        <Banner image={bannerImage} />
      </div>
      <main className="collapse1">
        <div className="collapse">
          <Collapse label="Fiabilité" />
          <Collapse label="Respect">
            <div className="content-p">
              <p className="content-collapse ">
                La bienveillance fait partie des valeurs fondatrices de Kasa.
                Tout comportement <br /> discriminatoire ou de perturbation du
                voisinage entraînera une exclusion de <br /> notre plateforme.
              </p>
            </div>
          </Collapse>
          <Collapse label="Service" />
          <Collapse label="Sécurité" />
        </div>
      </main>
    </>
  );
};

export default About;
