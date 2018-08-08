import {FETCH_DianPing_INFO_SUC} from '../const/ActionTypes.js'

export default function DianPing(state=[],action){
  switch(action.type){
        case FETCH_DianPing_INFO_SUC:
            let result = action.response.result;
            return result;
        default:
        return state;
        }
}