import React from 'react';
import { connect } from 'react-redux';
import './SubHeader.css';
import { Picker, List } from 'antd-mobile';

function SubHeader(props) {
  console.log(props);
  const { location } = props;
  const data = [
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
  ]
  return (
    <div className="sub-header-wrap">
      <List>
        <Picker data={data} cols={1}>
          <List.Item className="location">{location.locationName}</List.Item>
        </Picker>
        
        <div className="search">影片/影院/影人，任你搜</div>
      </List>

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