import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './SubHeader.css';
import { Picker } from 'antd-mobile';

const queryCities = () => Promise.resolve([
  { id: 292, n: '上海', pinyinFull: 'Shanghai', pinyinShort: 'sh' },
  { id: 366, n: '深圳', pinyinFull: 'Shenzhen', pinyinShort: 'sz' },
  { id: 291, n: '重庆', pinyinFull: 'Chongqing', pinyinShort: 'cq' },
  { id: 290, n: '北京', pinyinFull: 'Beijing', pinyinShort: 'bj' },
  { id: 880, n: '成都', pinyinFull: 'Chengdu', pinyinShort: 'cd' },
  { id: 365, n: '广州', pinyinFull: 'Guangzhou', pinyinShort: 'gz' },
  { id: 974, n: '杭州', pinyinFull: 'Hangzhou', pinyinShort: 'hz' },
  { id: 371, n: '东莞', pinyinFull: 'Dongguan', pinyinShort: 'dg' },
  { id: 561, n: '武汉', pinyinFull: 'Wuhan', pinyinShort: 'wh' },
  { id: 373, n: '佛山', pinyinFull: 'Foshan', pinyinShort: 'fs' },
]);

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
      const cities = await queryCities();
      setCityList(cities);
      const defaultCity = cities[0];
      setCity({
        id: defaultCity.id,
        name: defaultCity.n
      });
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