import createSagaMiddleware from 'redux-saga';
import countSaga from './count';
import { fork, all } from 'redux-saga/effects';

export const sagaMiddleware = createSagaMiddleware();

export function* rootSaga() {
  yield all([
    fork(countSaga),
  ]);
}
