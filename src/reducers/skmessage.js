import {FETCH_GITHUB_SHANGKE_SUC} from '../const/ActionTypes.js'
const initialMessage={
  msg:[],
  top:{}
}
export default function SKmessage(state=initialMessage,action){
  switch(action.type){
    
        case FETCH_GITHUB_SHANGKE_SUC:
          console.log(action.data);
            let msg = action.data.list;
            let top= action.data["basic_info"]
            return Object.assign({...state}, { msg,top })
        default:
        return state;
        }
}