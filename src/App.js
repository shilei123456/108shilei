import React, { Component } from 'react';
import './App.css';
import { createStore,compose,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import serverApi from  './middleware/serverApi.js';
import thunk from 'redux-thunk';
import Routes from './routes';
import rootReducer  from './reducers';
import { createLogger } from 'redux-logger';  
const logger = createLogger();
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk,serverApi,logger),
  )
)
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
         <Routes />
      </Provider>
    );
  }
}
