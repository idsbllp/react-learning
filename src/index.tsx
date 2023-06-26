import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from '$store';
// import Root from '$components/root';

let i = 0;

function render() {
  const Cp = <App i={++i} />;
  (window as any).Cp = Cp;
  ReactDOM.render(
    // <Provider store={store}>
    Cp,
    // </Provider>,
    document.getElementById('root'),
  );
}

(window as any).render = render;
(window as any).ReactDOM = ReactDOM;

render();

// const foo = ReactDOM.render(
//   <Root />,
//   document.getElementById('root'),
// );

// window.test = foo;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
