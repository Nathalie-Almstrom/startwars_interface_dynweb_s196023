import React, { useState } from 'react';
import StarWarsCard from '../komponents/StarWarsCard.jsx';

const SearchBar = (props) => {
  const [input, setInput] = useState(''); // used to pick up text in searchBar,
  const num = 1; // this can be used to further evolve app by adding a button that allowes the amount of search results to be changed.
  const emptyArray = []; //this hides search results when SearchBar is not used.
  const search = input.toLowerCase(''); //this makes what you write in SearchBar case insensative.

  //search filter function and case insensetive
  const filteredFilms = input
    ? props.films.filter(
        (item) =>
          item.title.toLowerCase().includes(search) ||
          item.director.toLowerCase().includes(search) ||
          item.opening_crawl.toLowerCase().includes(search)
      )
    : emptyArray; 

    console.log(filteredFilms)

  return (
    <>
      <input
        className="imputBox"
        type="search"
        id="search"
        placeholder="Search a Star Wars movie here... "
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      {/*this hides any search results untill search has been entered*/}
      <div className="lightText">
        Search results {filteredFilms.length}
      </div>
      {/*this loops the filtered objects to StarWarsCard*/}
      {filteredFilms.map((item, index) => 
        index < num && 
        <StarWarsCard 
          key={item.episode_id}
          film={item}/>
        )      
      }
    </>
  );
};

export default SearchBar;

/*{input.length > 0 ? filteredFilms.length : 0}*/