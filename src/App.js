import React, { Component } from 'react';
import './App.css';
import Op from './container/Op.js';
// import DangAn from './container/DangAn.js';       //学员档案页
//import ShangkeXiangqing from './container/ShangkeXiangqing.js';   //上课详情页
import { createStore,compose,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
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
