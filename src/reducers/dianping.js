import {FETCH_DianPing_INFO_SUC} from '../const/ActionTypes.js'
const initialMessage={
  dianping:[]
}
export default function DPmessage(state=initialMessage,action){
  switch(action.type){
        case FETCH_DianPing_INFO_SUC:
            let dianping = action.response.data;
            
            return Object.assign({...state}, { dianping })
            break;
        default:
        return state;
        }
}