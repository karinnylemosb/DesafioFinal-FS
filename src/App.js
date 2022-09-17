import { useEffect, useState } from 'react';

function App() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    getAnimals();
  }, []);

  const getAnimals = async () => {
    const response = await fetch(
      'https://zoo-animal-api.herokuapp.com/animals/rand/',
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      },
    );
    const animals = await response.json();
    setAnimals(animals);
    console.log(animals);
  };

  return (
    <main>
      <section className="animals-container">
        <h1> Beautiful Animals </h1>
        <img
          className="img-monstros"
          src={animals.image_link}
          alt={animals.name}
        />
        <p className="animal">Name: {animals.name}</p>
        <p className="animal"> Latin name: {animals.latin_name}</p>
        <p className="animal"> Habitat: {animals.habitat}</p>
        <p className="animal">Diet: {animals.diet}</p>
        <p className="animal"> Geographic location: {animals.geo_range}</p>
        <button type="button" className="btn" onClick={getAnimals}>
          Get Another Animal
        </button>
      </section>
    </main>
  );
}

export default App;
