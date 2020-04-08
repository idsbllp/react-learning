import React from 'react';
import './grid.scss';

interface IGridProps {
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
