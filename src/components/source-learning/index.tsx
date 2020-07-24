import React from 'react';
import Grid from '$components/grid/Grid';
import ChildrenComponent from './children';
import EventComponent from './event';

const SourceLearning = () => {
  return (
    <div className="source-learning">
      <Grid title="ChildrenComponent">
        <ChildrenComponent />
      </Grid>
      <Grid title="ChildrenComponent">
        <EventComponent />
      </Grid>
    </div>
  );
};

export default SourceLearning;
