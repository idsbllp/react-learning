import React from 'react';
import ReducerHook from './ReducerHook';
import Grid from '$components/grid/Grid';
import useCountReducer from '../redux/reducers/counter';


const ReducerHookContainer = () => {
  const [state, dispatch] = useCountReducer();

  return (
    <>
      <Grid title="ReducerHook1">
        <ReducerHook count={state.count} dispatch={dispatch} />
      </Grid>
      <Grid title="ReducerHook2">
      <ReducerHook count={state.count} dispatch={dispatch} />
      </Grid>
    </>
  );
};

export default ReducerHookContainer;
