import { combineReducers } from 'redux';
import MessageList from './Message.js';
import Dialog from './Dialog.js';

export default combineReducers({
  MessageList,
  Dialog
});

