import { combineReducers } from 'redux';
import MessageList from './message.js';
import MessageListxia from './messagexia.js';
import MessageTop from './messageTop.js';
export default combineReducers({
  MessageList,
  MessageListxia,
  MessageTop
});

