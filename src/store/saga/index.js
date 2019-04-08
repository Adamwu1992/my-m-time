import { all } from 'redux-saga/effects';
import subHeaderSaga from './sub_header';
import homeSaga from './home';

export default function* rootSaga() {
  yield all([
    subHeaderSaga(),
    homeSaga()
  ]);
}