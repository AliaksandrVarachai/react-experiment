import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './proba-redux-assets/containers/App';
import reducer from './proba-redux-assets/reducers';
// TODO: import css

//import { combineReducers } from 'redux';

const store = createStore(
  reducer,
  /* someInitialState, */
  // TODO: replace with redux-devtools-extension plugin for production purposes
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app-root')
);


