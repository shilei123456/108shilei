import { ADD_ITEM, ZHIDING, DELETE } from '../const/ActionTypes'

export default function MessageList(state={list:[]} ,action){
  switch(action.type){
    case ADD_ITEM:{
        const newMessage = state.list.slice();
        newMessage.unshift({
            name:action.text1,
            con:action.text2,
            date:action.text3
        });
      const newMessages = { ...state };
      newMessages.message = newMessages;
      return newMessages;
    }
    case ZHIDING:{
     return 2;
    }
    case DELETE:{
     return 3;
    }
    default:
    return state;
  }
}