import React from "react";
import Collapse from "../../components/Collapse/Collapse";
import Banner from "../../components/Banner/Banner";
import "./About.css";

const About = () => {
  const bannerImage = "/banner2.png";

  return (
    <>
      <div>
        <Banner image={bannerImage} />
      </div>
      <main className="main-about">
        <Collapse label="Fiabilité">
          <div className="container-description">
            <p className="content-description">
              Les annonces postées sur Kasa garantissent une fiabilité totale.
              Les photos sont conformes aux logements, et toutes les
              informations sont régulièrement vérifiées par nos équipes.
            </p>
          </div>
        </Collapse>

        <Collapse label="Respect">
          <div className="container-description">
            <p className="content-description">
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement <br /> discriminatoire ou de perturbation du
              voisinage entraînera une exclusion de <br /> notre plateforme.
            </p>
          </div>
        </Collapse>

        <Collapse label="Service">
          <div className="container-description">
            <p className="content-description">
              Nos équipes se tiennent à votre disposition pour vous fournir une
              expérience parfaite. N'hésitez pas à nous contacter si vous avez
              la moindre question.
            </p>
          </div>
        </Collapse>

        <Collapse label="Sécurité">
          <div className="container-description">
            <p className="content-description">
              La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
              pour les voyageurs, chaque logement correspond aux critères de
              sécurité établis par nos services. En laissant une note aussi bien
              à l'hôte qu'au locataire, cela permet à nos équipes de vérifier
              que les standards sont bien respectés. Nous organisons également
              des ateliers sur la sécurité domestique pour nos hôtes.
            </p>
          </div>
        </Collapse>
      </main>
    </>
  );
};

export default About;
