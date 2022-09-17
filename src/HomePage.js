import { useEffect, useState } from 'react';
import Animals from './pages/animal';
import Navbar from './components/navbar';

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
    <article key={animals.id}>
      <Navbar />
      <Animals animals={animals} />
    </article>
  );
}

export default App;
