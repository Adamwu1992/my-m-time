import { delay } from 'redux-saga/effects'

export default function* hello() {
  yield delay;
  console.log('hello saga');
}