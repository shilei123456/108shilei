import { ADD_ITEM, ZHIDING, DELETE,SHOWTAN,SHOWMORE } from '../const/ActionTypes.js';
const initial_state={showDailog :true,showMore:true}

export default function Dialog(state=initial_state,action){
       switch(action.type){
           case SHOWTAN:{
               console.log(action.tet);
               return Object.assign({showDailog:state.showDailog},{showDailog:action.tet})
           }
           case SHOWMORE:{
               return Object.assign({showMore:state.showMore},{showMore:action.text})
           }
           default :
               return state
       }
}