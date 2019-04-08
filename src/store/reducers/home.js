const inititalState = {
  hotMovies: [],
  loading: false
}

export default function(state = inititalState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'home/hotmovies/list':
      return {
        ...state,
        loading: true
      };
    case 'home/hotmovies/list/success':
      return {
        ...state,
        loading: false,
        hotMovies: payload.data
      };
    case 'home/hotmovies/list/fail':
      return {
        ...state,
        loading: false
      };
    default: return state;
  }
}