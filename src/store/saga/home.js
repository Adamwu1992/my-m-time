import { put, call, takeEvery } from 'redux-saga/effects';
import { getHotMovies } from '../../api/movie'

function* queryHotMovies(action) {
  const res = yield call(getHotMovies, action.payload);
  yield put({ type: 'home/hotmovies/list/success', payload: { data: res.data } })
}

export default function* watch() {
  yield takeEvery('home/hotmovies/list', queryHotMovies)
}