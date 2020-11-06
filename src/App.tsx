import React from 'react';
import './App.css';


import Grid from '$components/grid/Grid';
import Count from '$components/count';
import ChildrenComponent from '$components/children/Children';
import MouseEventCom from '$components/mouse-event-com';
import ZoomIn from '$components/zoom-in';

import StateHook from './hooks/state-hook/StateHook';
import ReducerHook from './hooks/reducer-hook';
import EffectHook from './hooks/effect-hook';
import ContextHook from './hooks/context-hook';
import Portal from '$components/react16/portal';

function App() {
  return (
    <div className="App">
      <Grid title="Mouse Event Test">
        <MouseEventCom />
      </Grid>
      <Grid title="ContextHook">
        <ContextHook />
      </Grid>
      <Grid title="Redux with Saga Count">
        <Count />
      </Grid>
      <Grid title="StateHook">
        <StateHook />
      </Grid>
      <Grid title="EffectHook">
        <EffectHook />
      </Grid>
      <Grid title="ReducerHook">
        <ReducerHook />
      </Grid>
      <Grid title="ChildrenComponent">
        <ChildrenComponent>
          ChildrenComponent
        </ChildrenComponent>
      </Grid>
      <Grid title="ZoomIn">
        <ZoomIn />
      </Grid>
      <Grid title="Portal">
        <Portal />
      </Grid>
    </div>
  );
}

export default App;
