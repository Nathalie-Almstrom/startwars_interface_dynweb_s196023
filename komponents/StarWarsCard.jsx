import * as React from 'react';

const StarWarsCard = (props) => {
  const array = props.film; // this allowes to write shorter keys to the API.

  return (
    <div className="carBorder">
      <h1>{array.title}</h1>
      <p>Releasedatum: {array.release_date}</p>
      <ul className="listOneLine">
        <li>Regissör: {array.director} </li>
        <li>Producent: {array.producer}</li>
      </ul>
      <p>{array.opening_crawl}</p>
      <ul className="listOneLine">
        <li>Antalet karaktärer: {array.characters.length}</li>
        <li>Antalet rymdskepp: {array.starships.length}</li>
      </ul>
    </div>
  );
};

export default StarWarsCard;
