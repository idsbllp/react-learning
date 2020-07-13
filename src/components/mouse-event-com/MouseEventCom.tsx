import React, { useState } from 'react';

const MouseEventCom: React.FC = () => {
  const [isShow, setIsShow] = useState(true);

  const handleMouseDown = () => {
    console.log('MouseEventCom handleMouseDown');
    setIsShow(false);

    setTimeout(() => {
      setIsShow(true);
    }, 3000);
  };

  const handleMouseUp = () => {
    console.log('MouseEventCom handleMouseUp');
  };

  return isShow ? (
    <button onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onClick={handleMouseUp}>Click Me</button>
  ) : null;
};

export default MouseEventCom;
