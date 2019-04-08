import { delay, takeEvery } from 'redux-saga/effects';

function* setCityAsync() {
  yield delay(500);
  console.log('setCityAsync');
}

export default function* watch() {
  yield takeEvery('city/set/test', setCityAsync);
}
