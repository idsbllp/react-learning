import React, { useEffect } from 'react';
import { Action } from 'redux';
import { ACTION_TYPES } from '$constants/actionTypes';

interface IReducerHookProps {
  count: number;
  dispatch: React.Dispatch<Action<any>>;
}

const ReducerHook: React.FC<IReducerHookProps> = props => {
  const { count, dispatch } = props;

  useEffect(() => {
    document.title = String(count);
  });

  return (
    <>
      Count: {count}
      <button onClick={() => dispatch({type: ACTION_TYPES.MINUS_COUNT})}>-</button>
      <button onClick={() => dispatch({type: ACTION_TYPES.ADD_COUNT})}>+</button>
    </>
  );
};

export default ReducerHook;
