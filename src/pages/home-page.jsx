import { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import {DemoCarousel} from '../components/carousel';
import photo from '../images/photo.jpg';

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
      <DemoCarousel/>
      <main>
        <h1 className='frase-capa'> Close to nature we are much happier. </h1>
        <section className='text-description'>
          <div className='format-text'>
          <h1> About us </h1>
          <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          </div>
          <img className= "photo"src={photo} alt="baby"></img>
        </section>
      </main>

      <footer className='footer'> 
      <p className='footer'></p>
        <a href='https://www.google.com.br/' className='footer'> Clique aqui para entrar em contato </a> </footer>
    </article>
  );
}

export default HomePage;
