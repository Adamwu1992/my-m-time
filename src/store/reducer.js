import { createStore } from 'redux';

const initialState = {
  location: {
    locationId: 290,
    locationName: '北京'
  },
  search: '',
  hotMovies: [],
  comingMovies: []
}

function home(state = initialState, action) {
  const { payload, type } = action;
  switch(type) {
    case 'home/hotMovies/set':
      return {
        ...state,
        hotMovies: payload.hotMovies
      };
    case 'home/location/set':
      return {
        ...state,
        location: payload.location
      };
    case 'home/search/set':
      return {
        ...state,
        search: payload.search
      };
    default:
      return state;
  }
}

export default createStore(home)