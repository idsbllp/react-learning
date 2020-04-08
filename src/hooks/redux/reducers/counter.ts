import { Action } from 'redux';
import { ACTION_TYPES } from '$constants/actionTypes';
import { useReducer } from 'react';

interface ICounterState {
  count: number;
}

const initState: ICounterState = {
  count: 0,
};

const useCountReducer = () => {
  const [state, dispatch] = useReducer((state: ICounterState, action: Action) => {
    switch (action.type) {
      case ACTION_TYPES.ADD_COUNT:
        return {
          count: state.count + 1,
        };
        case ACTION_TYPES.MINUS_COUNT:
          return {
            count: state.count + 1,
          };
      default:
        return state;
    }
  }, initState);

  return [state, dispatch] as const;
};

export default useCountReducer;
