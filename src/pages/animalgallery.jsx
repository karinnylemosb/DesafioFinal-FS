// import Animals from '../pages/animal';
import { Fragment } from "react";
import { useEffect, useState } from 'react';
import Animals from '../model/animal-model';
import Navbar from '../components/navbar';

function AnimalGalery() {
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
    <Fragment>
      <body>
      <Navbar />
        <main>
          
          <div className="box">
            <h1 className="text-title"> What do we have in our house:  </h1>
              <div className="grid">
                <Animals animals={animals} elevation={10} />
                <Animals animals={animals} />
                <Animals animals={animals} />
                <Animals animals={animals} />
                <Animals animals={animals} />
                <Animals animals={animals} />
              </div>
          </div>
          
        
        </main>
    </body>
    </Fragment>
  );
}

export default AnimalGalery;

