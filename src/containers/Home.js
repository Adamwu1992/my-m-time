import React from 'react';
// import Movies from '../componnets/Movies';
import Digital from '../componnets/DigitalList';
import { connect } from 'react-redux';

function Home(props) {
  console.log(props);
  return (
    <Digital total={59} title="正在热映" />
  )
}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    setLocation(location) {
      dispatch('home/location/set', { payload: location })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);