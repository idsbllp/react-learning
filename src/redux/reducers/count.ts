import { handleActions } from 'redux-actions';
import { ACTION_TYPES } from '$constants/actionTypes';

export const count = handleActions(
  {
    [ACTION_TYPES.ADD_COUNT]: (state, { payload }) => {
      return state + 1;
    },
    [ACTION_TYPES.MINUS_COUNT]: (state, { payload }) => {
      return state - 1;
    },
  },
  0,
);
