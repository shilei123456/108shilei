import React from 'react';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import './App.css';

import GameHome from './container/GameHome';
import rootReducer from './reducers';

const logger = createLogger();
const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk, logger))
);

const App = () => (
  <Provider store={store}>
    <div>
      <GameHome />
    </div>
  </Provider>
);

export default App;

