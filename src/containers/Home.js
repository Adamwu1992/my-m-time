import React, { useEffect, useState } from 'react';
import Digital from '../componnets/DigitalList';
import { connect } from 'react-redux';
import { getHotMovies } from '../api/movie';

function Home(props) {
  const { currentCity } = props;
  const [hotMovies, setHotMovies] = useState([]);

  useEffect(() => {
    const queryHotMovies = async () => {
      if (!currentCity || !currentCity.id) return;
      const { data } = await getHotMovies(currentCity);
      setHotMovies(data);
      console.log(currentCity, data);
    }
    queryHotMovies();
  }, [currentCity])

  return (
    <Digital
      total={hotMovies.length}
      title="正在热映"
      data={hotMovies} />
  )
}

function mapStateToProps(state) {
  return {
    currentCity: state.sub_header.city,
    ...state.home
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setLocation(location) {
      dispatch('home/location/set', { payload: location })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);