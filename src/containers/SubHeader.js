import React from 'react';
import { connect } from 'react-redux';
import './SubHeader.css';

function SubHeader(props) {
  console.log(props);
  const { search, location } = props
  return (
    <div className="sub-header-wrap">
      <div className="location">{location.locationName}</div>
      <div className="search">影片/影院/影人，任你搜</div>
    </div>
  )
}

function mapStateToProps(state) {
  const { search, location } = state;
  return {
    search,
    location
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setSearch(search) {
      dispatch('search/set', {
        payload: search
      })
    },

    setLocation(location) {
      dispatch('location/set', {
        payload: location
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubHeader);