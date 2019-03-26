import React, { useState, useEffect } from 'react';
import LocationSelect from './LocationSelect';
import http from '../http';

console.log(React.version)

export default function Movies() {

  const [movies, setMovies] = useState([]);
  const [location, setLocation] = useState();

  useEffect(() => {
    console.log('location changed', location);
    const fetchMovies = async () => {
      const { data } = await http.get(`http://localhost:5000/hot-play-movies?locationId=${location.id}`);
      setMovies(data.movies);
    }
    if (location) {
      fetchMovies();
    }
  }, [location]);

  function handleSelect(location) {
    console.log('handle select', location);
    setLocation(location);
  }

  return (
    <>
      <h2>Movies: <LocationSelect onSelect={handleSelect} /></h2>
      <ul>
        {
          movies.map(m => (
            <li key={m.movieId}>{m.titleCn} / {m.titleEn}</li>
          ))
        }
      </ul>
    </>
  )
}