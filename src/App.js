import React, { Component } from 'react';
import './App.css';
import Op from './container/Op.js';
import { createStore,compose,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer  from './reducers';
import { createLogger } from 'redux-logger';
const logger = createLogger();
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(logger),
  )
)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Op/>
      </Provider>
    );
  }
}
