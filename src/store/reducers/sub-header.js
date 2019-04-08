const initialState = {
  city: {},
  search: '',
}

export default function (state = initialState, action) {
  const { payload, type } = action;
  switch(type) {
    case 'city/set':
      return {
        ...state,
        city: payload.city
      };
    case 'search/set':
      return {
        ...state,
        search: payload.search
      };
    default:
      return state;
  }
}