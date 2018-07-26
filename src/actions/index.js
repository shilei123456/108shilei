import { ADD_ITEM,ZHIDING,DELETE,DIALOG,SHOW} from '../const/ActionTypes.js';

export default function additem(text0,text1,text2){
    return({
       text0,
       text1,
       text2,
       type: ADD_ITEM
    })
}
export function handleTop(idx){
    return({
        type:ZHIDING,
        idx
    })
}
export function show(tet){
     return({
         type:SHOW,
         tet
     })
}
export function DialogShow(isActive){
     return({
         type:DIALOG,
         isActive
     })
}