import React, { useContext } from 'react';

export const defaultValue = {
  value1: 'value1',
  value2: 'value2',
};

export const CountContext = React.createContext(defaultValue.value1);

export const useCountContext = () => {
  const context = useContext(CountContext);

  return context;
};
