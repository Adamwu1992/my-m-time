import React from 'react';
import Digital from '../componnets/DigitalList';
import { connect } from 'react-redux';

function Home(props) {
  const { hotMovies } = props;

  return (
    <Digital
      total={hotMovies.length}
      title="正在热映"
      data={hotMovies} />
  )
}

function mapStateToProps(state) {
  return {
    ...state.home
  }
}

function mapDispatchToProps(dispatch) {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);