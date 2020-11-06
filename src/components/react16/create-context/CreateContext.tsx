import React, { createContext, useState } from 'react';

const initTheme = 'black';

export const { Provider, Consumer } = createContext(initTheme);

const CreateContextProvider = () => {
  const [theme, _setTheme] = useState(initTheme);

  const setTheme = () => {
    _setTheme(Math.random() + '');
  };

  return (
    <Provider value={theme}>
      <div onClick={setTheme}>
        <CreateContextConsumer />
      </div>
    </Provider>
  );
};

const CreateContextConsumer = () => {
  return (
    <Consumer>
      {theme => (
        <div>{theme}</div>
      )}
    </Consumer>
  );
};

export default CreateContextProvider;
