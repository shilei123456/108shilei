import {QUANXIAN_ADD_ITEM} from '../const/ActionTypes.js'
const initialMessage={
  initialState:[{
             name:"白帆",
             mid:"267511969"
         },{
             name:"白帆",
             mid:"267511969" 
         },{
             name:"白帆",
             mid:"267511969"
         },{
             name:"王鹏",
             mid:"267511969"
         },{
             name:"王鹏",
             mid:"267511969" 
         },{
             name:"王鹏",
             mid:"267511969"
         }],
   initialLeftState:[{
             name:"白帆",
             mid:"267511969"
         },{
             name:"王鹏",
             mid:"267511969"
         },{
             name:"王鹏",
             mid:"267511969" 
         }]
}
export default function QXmessage(state=initialMessage,action){
  switch(action.type){
        case QUANXIAN_ADD_ITEM:
            return state;
        default:
        return state;
        }
}