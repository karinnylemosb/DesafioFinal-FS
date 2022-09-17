import { Fragment } from 'react';

const AnimalList = (props) => {
  const animals = props.animals;

  return (
    <Fragment>
      {animals.map((object) => {
        return (
          <article key={animals.id} className="animals">

            <div>
              {/* <p>{obj.image_link}</p>             */}
              <h2>{object.name}</h2>
              <h2>{object.latin_name}</h2>
              <h2>{object.habitat}</h2>
              <h2>{object.diet}</h2>
              <h2>{object.geo_range}</h2>
              
            </div>
          </article>
        );
      })}
      console.log(animals.name);
    </Fragment>
  );
};

export default AnimalList;


            {/* <img
              src={`https://zoo-animal-api.herokuapp.com/animals/rand/${obj.id.}`}
              alt={obj.name}
            /> */}