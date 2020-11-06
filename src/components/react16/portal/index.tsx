import Dialog from '$components/dialog';
import React, { useState } from 'react';

const PortalContainer: React.FC = () => {
  const [show, setShow] = useState(false);

  // click event triggered by portal component bubble
  const handleTriggerClick = () => {
    setShow(!show);
  };

  return (
    <div className="portal-container" onClick={handleTriggerClick}>
      <button>click me</button>
      {
        show && <Dialog />
      }
    </div>
  );
};

export default PortalContainer;
