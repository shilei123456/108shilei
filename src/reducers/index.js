import { combineReducers } from 'redux';
import MessageList from './Message.js';
import MessageTop from './messageTop.js';
import DAmessage from './damessage.js';
import SKmessage from './skmessage.js';
export default combineReducers({
  MessageList,
  MessageTop,
  DAmessage,
  SKmessage
});

