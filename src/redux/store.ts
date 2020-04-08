import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { sagaMiddleware, rootSaga } from './sagas';
// import thunk from 'redux-thunk';

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
  // applyMiddleware(thunk),
);

sagaMiddleware.run(rootSaga);

(window as any).store = store;

export default store;
