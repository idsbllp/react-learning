import { ThunkAction } from 'redux-thunk';
import rootReducer from 'redux/reducers';
import { Action } from 'redux';

export type IRootState = ReturnType<typeof rootReducer>;

export type IAppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  IRootState,
  null,
  Action<string>
>;
