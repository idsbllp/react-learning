import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import store from '$store';

export type IRootState = ReturnType<typeof store.getState>;

export type IAppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  IRootState,
  null,
  Action<string>
>;
