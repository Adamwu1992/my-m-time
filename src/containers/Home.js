import React, { useEffect } from 'react';
import Digital from '../componnets/DigitalList';
import { connect } from 'react-redux';

function Home(props) {
  const { currentCity, queryHotMovies, hotMovies } = props;

  useEffect(() => {
    queryHotMovies(currentCity);
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
    queryHotMovies(payload) {
      dispatch({ type: 'home/hotmovies/list', payload });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);