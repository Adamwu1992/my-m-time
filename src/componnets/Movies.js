import React, { useState, useEffect, Fragment } from 'react';
import http from '../http';


export default function Movies() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // const fetchMovies = async () => {
    //   const { data } = await http.get(`http://localhost:5000/hot-play-movies?locationId=290`);
    //   setMovies(data.movies);
    // }
    const fetchMovies = () => {
      http.get(`http://localhost:5000/hot-play-movies?locationId=290`).then(res => {
        setMovies(res.data.movies);
      })
    }
    fetchMovies();
  }, []);


  return (
    <Fragment>
      <ul>
        {
          movies.map(m => (
            <li key={m.movieId}>{m.titleCn} / {m.titleEn}</li>
          ))
        }
      </ul>
    </Fragment>
  )
}