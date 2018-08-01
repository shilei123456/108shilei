import {FETCH_GITHUB_DANGAN_SUC} from '../const/ActionTypes.js'
const initialMessage={
  msg:[]
}
export default function DAmessage(state=initialMessage,action){
  switch(action.type){
        case FETCH_GITHUB_DANGAN_SUC:
            let msg = action.data;
            return Object.assign({...state}, { msg })
        default:
        return state;
        }
}