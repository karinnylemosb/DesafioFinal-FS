import { useEffect, useState } from "react";

const ListadeAnimais = () => {
  const [animais, setAnimais] = useState("Olar");

  useEffect(() => {
    getAnimais();
  }, []);

  const getAnimais = async () => {
    const response = await fetch("https://zoo-animal-api.herokuapp.com/animals/rand/", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    const animal = await response.json();
    setAnimais(animal.value);
  };

  return (
    <div className="container">
      <h1>Animais lindos da Kaká </h1>
      <p className="">{animais}</p>
      {/* <button type="button" className="btn" onClick={getChuck}>
        Get Another Fact
      </button> */}
    </div>
  );
};

export default ListadeAnimais;