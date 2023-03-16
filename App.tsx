import React, { useEffect, useState } from 'react';
import './style.css';
import SearchBar from './komponents/SearchBar.jsx';

export default function App() {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    fetch('https://swapi.dev/api/films/')
      .then((response) => response.json())
      .then((data) => setFilms(data.results));
  }, []);



  return (
    <div className="body">
      <h1 className="intro">MAY THE FORCE BE WITH YOU</h1>
      <SearchBar films={films} />
    </div>
  );
}
