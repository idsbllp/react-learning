import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './dialog.scss';

let node: HTMLElement | null = null;

const createMaskIfNeeded = () => {
  console.log('createMaskIfNeeded', !!node);
  if (!node) {
    node = document.createElement('div');
    node.className = 'dialog-container';
    document.body.appendChild(node);
  }

  return node;
};

const destroyMask = () => {
  console.log('destroyMask', !!node);
  if (node) {
    node.remove();
    node = null;
  }
};

const Dialog: React.FC = () => {
  const node = createMaskIfNeeded();

  useEffect(() => {
    return destroyMask;
  }, []);

  return createPortal((
    <div className="dialog">
      <button>click me to close</button>
    </div>
  ), node);
};

export default Dialog;
