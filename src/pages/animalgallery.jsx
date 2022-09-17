import { useEffect, useState } from 'react';
import Animals from './components/Animal';

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
      <div className="box-animals">
        <Animals animals={animals} />
        <Animals animals={animals} />
        <Animals animals={animals} />
        <Animals animals={animals} />
        <Animals animals={animals} />
        <Animals animals={animals} />
      </div>

      
    </main>
  );
}

export default App;