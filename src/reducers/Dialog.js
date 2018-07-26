import { SHOW } from '../const/ActionTypes'
const initial_state={showDailog :true}
export default function Dialog(state=initial_state,action){
       switch(action.type){
           case SHOW:{
               this.setState({
                   showDailog:action.tet
               })
           }
           default :
               return state
       }
}