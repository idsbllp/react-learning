import { fork, takeEvery, put, delay } from 'redux-saga/effects';
import { ACTION_TYPES } from '$constants/actionTypes';
import { decrementCount } from '$actions/count';

function* addCountWatcher() {
  (window as any).takeEvery = takeEvery;
  yield takeEvery(ACTION_TYPES.ADD_COUNT, addCountSaga);
}

export function* addCountSaga() {
  yield delay(1000);
  yield put(decrementCount());
}

export default function* countSaga() {
  yield fork(addCountWatcher);
}
