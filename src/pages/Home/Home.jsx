import React, { useEffect, useState } from "react"; //composant react
import Thumb from "../../components/Thumb/Thumb";
import "./Home.css";

const Home = () => {
  //UseEffect permet de déclencher le Fetch et useState permet de stocker le retour de l'pi dans le state
  const [data, setData] = useState([]); // Déclaration de l'état "data" initialisé avec un tableau vide (data est l'état qui contiendra les données)

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json()) //Conversion de la réponse en JSON
      .then((jsonData) => {
        setData(jsonData); // Mise à jour de l'état data avec les données JSON récupérées
        console.log(jsonData); // Affiche les données JSON dans la console
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <main>
      <div className="container-thumb">
        {/* c'est une boucle de transformation qui parcourt chaque élément du tableau data et éxécute la fonction de rendu spécifiée entre parenthèses */}
        {data.map((item) => (
          <Thumb key={item.id} title={item.title} image={item.cover} />
        ))}
        {/* cette ligne de code crée un composant Thumb pour chaque élément dans le tableau data en lui passant les props nécessaires pour afficher le titre et l'image de chaque élément. */}
      </div>
    </main>
  );
};

export default Home;
