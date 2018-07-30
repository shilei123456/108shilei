import { ADD_ITEM } from '../const/ActionTypes'
const initialMessage={
       message:{
                banji:"三班人",
                id:"MID330900002",
                course:"摄影课 绘画课",
                time:"2018-3-30",
                money:987,
                day:876,
                lastTime:"2018-3-30"
            }
}
export default function MessageTop(state=initialMessage,action){
  switch(action.type){
    case ADD_ITEM:{
       return state;
    }
    default:
    return state;
  }
}