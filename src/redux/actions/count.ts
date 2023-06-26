import { sleep } from '$utils/timer';
import { IAppThunk } from '$typings/redux';
import { ACTION_TYPES } from '$constants/actionTypes';

const incrementCountNormal = () => ({
  type: ACTION_TYPES.ADD_COUNT,
});

const decrementCountNormal = () => ({
  type: ACTION_TYPES.MINUS_COUNT,
});

/** redux-thunk */
 // eslint-disable-next-line 
const incrementCountThunk = (): IAppThunk<Promise<void>> => {
  return async dispatch => {
    return sleep(2000).then(() => {
      dispatch(incrementCountNormal());
    });
  };
};

export const incrementCount = incrementCountNormal;

export const decrementCount = decrementCountNormal;
