import { ADD_ITEM,ZHIDING,DELETE} from '../const/ActionTypes.js';

export default function additem(text0,text1,text2,text3){
    return({
       text0,
       text1,
       text2,
       text3,
       type: ADD_ITEM,
    })
}
export function handleTop(idx){
    return({
        type:ZHIDING,
        idx
    })
}
export function handleDelete(idx){
     return({
         type:DELETE
     })
}