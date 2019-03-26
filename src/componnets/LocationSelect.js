import React, { useState, useEffect } from 'react';
import http from '../http'

export default function LocationSelect(props) {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await http.get('http://localhost:5000/hot-city-by-cinema');
      const _data = data.slice(0, 10)
      setLocations(_data);
      if (props.onSelect) {
        props.onSelect(_data[0]);
      }
    }
    fetchData();
  }, []);

  function handleSelect(evt) {
    const id = Number(evt.target.value);
    const location = locations.filter(l => l.id === id)[0];
    console.log('dads', location, id, locations)
    if (location && props.onSelect) {
      props.onSelect(location)
    }
  }

  return (
    <select onChange={handleSelect}>
      {
        locations.map(l => (
          <option key={l.id} value={l.id}>{l.n}</option>
        ))
      }
    </select>
  )
}