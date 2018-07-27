import { ADD_ITEM,SHOWTAN,SHOWMORE} from '../const/ActionTypes.js';

export  function additem(text0,text1,text2){
    return({
       text0,
       text1,
       text2,
       type: ADD_ITEM
    })
}
export function showTan(tet){
     return({
         type:SHOWTAN,
         tet
         
     })
}
export function showMore(text){
     return({
         text,
          type:SHOWMORE
     })
}