import { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import { Fragment } from "react";

function AnimalPage() {
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
  };

// const Animals = (props) => {
//   const animals = props.animals;
return (
    <Fragment>

      <main>
        
          <section className="animals-container">

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
            Click to know another one!
            </button>
          </section>
    </main>
    </Fragment>
  );
};

export default AnimalPage;