import React, { useState, useCallback } from 'react';
import { CountContext, useCountContext, defaultValue } from './useCountContext';

const Child = () => {
  const value = useCountContext();

  return (
    <span>{value}</span>
  );
};

const ContextHook = () => {
  const { value1 } = defaultValue;
  const [value, setValue] = useState(value1);

  const handleClick = useCallback(() => {
    const newValue = String(Math.ceil(Math.random() * 10000));
    setValue(newValue);
  }, []);

  return (
    <>
      <CountContext.Provider value={value}>
        <div>
          dynamic context value:<Child />
        </div>
        <button onClick={handleClick}>Click me</button>
      </CountContext.Provider>
      <div style={{ marginTop: '10px' }}>
        static context value: <Child />
      </div>
    </>
  );
};

export default ContextHook;
