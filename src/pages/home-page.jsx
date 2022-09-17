import { useEffect, useState } from 'react';
import capa from '../images/img4.jpg'
import Navbar from '../components/navbar';

function HomePage() {
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

  return (
    <article key={animals.id}>
      <Navbar />
      <img className='image-capa' src={capa} alt='img'></img>
      <h1 className='frase-capa'> Pertinho da natureza a gente é bem mais feliz. </h1>
      
    </article>
  );
}

export default HomePage;
