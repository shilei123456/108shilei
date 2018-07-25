import React from 'react';
import Weixin from './Container/Weixin.js';
import './App.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer  from './reducers/'
const store = createStore(rootReducer)

export default class App extends React.Component {
  render() {
    return (
            <Provider store={store}>
            <Weixin />
            </Provider>
    )
  }
}
