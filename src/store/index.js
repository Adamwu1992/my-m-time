import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';

const logger = store => next => action => {
  console.log('%c dispatching', 'color: #ff713f; font-weight: bold;', action);
  const result = next(action);
  console.log('%c next state', 'color: #ff713f; font-weight: bold;', store.getState());
  return result;
};

const saga = createSagaMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(logger, saga)
);

saga.run(rootSaga);

export default store;