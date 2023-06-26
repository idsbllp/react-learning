import React, { PropsWithChildren } from 'react';
import './grid.scss';

interface IGridProps extends PropsWithChildren {
  title: string;
}

const Grid: React.FC<IGridProps> = props => {
  return (
    <div className="grid-item">
      <h2>{props.title}</h2>
      {props.children}
    </div>
  );
};

export default Grid;
