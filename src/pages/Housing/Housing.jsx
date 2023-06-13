import React, { useEffect, useState } from "react"; // Importation des composants React nécessaires
import Tag from "../../components/Tag/Tag";
import Collapse from "../../components/Collapse/Collapse";
import "./Housing.css";
import Carousel from "../../components/Carousel/Carousel";
import { useNavigate, useParams } from "react-router-dom";
import Host from "../../components/Host/Host";
import Rating from "../../components/Rating/Rating";

const Housing = () => {
  const navigate = useNavigate(); //Déclaration d'une variable qui utilise le hook useNavigate.
  const { id } = useParams(); // Récupération de la valeur de l'ID à partir des paramètres d'URL grâce au hook useParams
  const [housing, setHousing] = useState(); // Initialisation du state housing avec une valeur par défaut vide

  //UseEffect permet de déclencher le Fetch et useState permet de stocker le retour de l'pi dans le state
  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json()) //Conversion de la réponse en JSON
      .then((jsonData) => {
        const foundHousing = jsonData.find((house) => house.id == id); // Recherche du logement correspondant à l'ID
        console.log(foundHousing); // Affichage du logement trouvé dans la console
        //Cette condition vérifie si le logement à été trouvé. dans ce cas setPictures est utilisé pour mettre à jour le stat pictures avec la liste d'image trouvé. (...)permet d'afficher les img
        if (foundHousing) {
          setHousing(foundHousing); // Mise à jour du state housing avec le logement trouvé
        } else {
          navigate("/logement-non-trouvé"); // Redirection vers une page indiquant que le logement n'a pas été trouvé
        }
      })
      .catch((error) => console.log(error)); // Gestion des erreurs
  }, []);

  return (
    <>
      {housing ? (
        <div>
          <div>
            <Carousel images={housing.pictures} />
          </div>

          <div className="container-principal">
            <div className="container-title">
              <h4 className="housing-title"> {housing.title} </h4>
              <p className="housing-location"> {housing.location} </p>
              <div className="container-tag">
                {housing.tags.map((tag, i) => (
                  <Tag text={tag} key={tag + i} />
                ))}
              </div>
            </div>
            <div className="container-bis">
              <div className="name">
                <Host name={housing.host.name} picture={housing.host.picture} />
              </div>
              <div className="rating">
                <Rating rating={housing.rating} />
              </div>
            </div>
          </div>

          <div className="container-collapse">
            <Collapse label="Description">
              <div className="container-description">
                <p className="content-description">{housing.description}</p>
                {/* Paragraphe avec le contenu de la description du logement */}
              </div>
            </Collapse>
            <Collapse label="Équipements">
              <div className="container-description">
                <ul className="content-description">
                  {housing.equipments && // Vérification que la liste des équipements existe dans le logement
                    housing.equipments.map((equipments, index) => (
                      <li key={equipments + index}>{equipments}</li> // Élément de liste pour chaque équipement
                    ))}
                </ul>
              </div>
            </Collapse>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Housing;
