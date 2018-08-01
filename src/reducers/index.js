import { combineReducers } from 'redux';
import MessageList from './message.js';
import MessageListxia from './messagexia.js';
import MessageTop from './messageTop.js';
import DAmessageTOP from './damessageTop.js';
import DAmessage from './damessage.js';
import SKmessage from './skmessage.js';
import SKmessageTOP from './skmessageTop.js';
export default combineReducers({
  MessageList,
  MessageListxia,
  MessageTop,
  DAmessageTOP,
  DAmessage,
  SKmessage,
  SKmessageTOP
});

