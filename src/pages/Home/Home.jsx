import React, { useEffect, useState } from "react"; //composant react
import Banner from "../../components/Banner/Banner";
import Thumb from "../../components/Thumb/Thumb";
import "./Home.css";

const Home = () => {
  //UseEffect permet de déclencher le Fetch et useState permet de stocker le retour de l'api dans le state
  const [housings, setHousings] = useState([]); // Déclaration de l'état "housing" initialisé avec un tableau vide

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json()) //Conversion de la réponse en JSON
      .then((jsonData) => {
        setHousings(jsonData); // Mise à jour de l'état data avec les données JSON récupérées
        console.log(jsonData); // Affiche les données JSON dans la console
      })
      .catch((error) => console.log(error));
  }, []);

  const bannerImage = "/banner1.png";

  return (
    <main>
      <div>
        <Banner image={bannerImage} titre={`Chez vous, partout et ailleurs`} />
      </div>
      <div className="container-thumb">
        {housings.map((housing) => (
          <Thumb
            key={housing.id}
            title={housing.title}
            cover={housing.cover}
            id={housing.id}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
