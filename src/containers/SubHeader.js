import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './SubHeader.css';
import { Picker } from 'antd-mobile';
import { getCityList } from '../api/city';

function SubHeader(props) {
  const { cityList, city, setCityList, setCity } = props;
  let cityPickerData = [];
  if (cityList && cityList.length) {
    cityPickerData = cityList.map(city => ({
      value: city.id,
      label: city.n
    }));
  }

  useEffect(() => {
    const query = async () => {
      const { data } = await getCityList();
      setCityList(data);
      if (data && data.length) {
        const defaultCity = data[0];
        setCity({
          id: defaultCity.id,
          name: defaultCity.n
        });
      }
    }
    query();
  }, []);

  function handlePickerChanged([cityId]) {
    const city = cityList.filter(c => c.id === cityId)[0];
    setCity({
      id: city.id,
      name: city.n
    });
  }

  return (
    <div className="sub-header-wrap">
      <Picker
        data={cityPickerData}
        cols={1}
        onChange={handlePickerChanged}
      >
        <div className="location">{city.name}</div>
      </Picker>
      <div className="search">影片/影院/影人，任你搜</div>
    </div>
  )
}

function mapStateToProps(state) {
  const { sub_header } = state;
  return { ...sub_header }
}

function mapDispatchToProps(dispatch) {
  return {
    setSearch(search) {
      dispatch('search/set', {
        payload: { search }
      })
    },

    setCity(city) {
      dispatch({
        type: 'city/set',
        payload: { city }
      })
    },

    setCityList(cityList) {
      dispatch({
        type: 'city/list/set',
        payload: { cityList }
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubHeader);