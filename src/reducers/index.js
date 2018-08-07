import { combineReducers } from 'redux';
import MessageList from './Message.js';
import MessageTop from './messageTop.js';
import DAmessage from './damessage.js';
import SKmessage from './skmessage.js';
import SatifyList from './satify.js';
import DianPing from './dianping.js'
export default combineReducers({
  MessageList,
  MessageTop,
  DAmessage,
  SKmessage,
  SatifyList,
  DianPing
});

