import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { ReactComponent as Icon } from './zoom_in.svg';
import './zoomIn.scss';

const ZoomIn: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const setTrue = setVisible.bind(null, true);
  const setFalse = setVisible.bind(null, false);

  return (
    <div className="con">
      {visible || <div className="placeholder" onMouseEnter={setTrue} onMouseLeave={setFalse}>•</div>}
      <CSSTransition
        in={visible}
        timeout={300}
        classNames="circle"
        unmountOnExit
      >
        <Icon onMouseEnter={setTrue} onMouseLeave={setFalse} />
      </CSSTransition>

      <CSSTransition
        in={visible}
        timeout={300}
        classNames="line"
        unmountOnExit
      >
        <div className="line" />
      </CSSTransition>
    </div>
  );
};

export default ZoomIn;
