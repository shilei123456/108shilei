import { combineReducers } from 'redux';
import MessageList from './Message.js';
import MessageTop from './messageTop.js';
import DAmessage from './damessage.js';
import SKmessage from './skmessage.js';
import SatifyList from './satify.js';
import DianPing from './dianping.js'
import entities from './entities.js';
export default combineReducers({
  entities,
  MessageList,
  MessageTop,
  DAmessage,
  SKmessage,
  SatifyList,
  DianPing
});

