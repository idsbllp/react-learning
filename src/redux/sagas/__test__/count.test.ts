import { expect } from 'chai';
import { addCountSaga } from '../count';
import { delay, put } from 'redux-saga/effects';
import { ACTION_TYPES } from '$constants/actionTypes';

it('renders without crashing', () => {
  const gen = addCountSaga();

  expect(JSON.stringify(gen.next().value)).to.be.equals(JSON.stringify(delay(1000)));

  expect(JSON.stringify(gen.next().value)).to.be.equals(JSON.stringify(put({type: ACTION_TYPES.MINUS_COUNT})));

  expect(JSON.stringify(gen.next())).to.be.equals(JSON.stringify({ done: true, value: undefined }));
});
