import React from 'react';
import Weixin from './Container/Weixin.js';
import './App.css';
import { createStore,compose,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer  from './reducers/'
import { createLogger } from 'redux-logger';
const logger = createLogger();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(logger),
  )
)

export default class App extends React.Component {
  render() {
    return (
            <Provider store={store}>
             <Weixin />
            </Provider>
    )
  }
}
