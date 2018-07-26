import { ADD_ITEM, ZHIDING, DELETE } from '../const/ActionTypes'
const Img=require('../resource/11.jpg');
const initialMessage={
        list:[
				{
          imga : Img,
					name : '小明',
					con : '好好学习,天天向上',
					date : '2018-7-11'
				},
				{
					imga : Img,
					name : '王老吉',
					con : '怕上火就喝王老吉',
					date : '2018-7-18'
				},
				{
					imga : Img,
					name : '小花',
					con : '美啦美啦美啦',
					date : '2018-7-18'
				},
				{
                    imga : Img,
					name : '河大青年',
					con : '河北',
					date : '2018-7-10'
				}
			]
}
export default function MessageList(state=initialMessage,action){
  switch(action.type){
    case ADD_ITEM:{
        const newMessage = state.list.slice();
        newMessage.unshift({
            imga : Img,
            name:action.text0,
            con:action.text1,
            date:action.text2
        });
      const newState = { ...state };
      newState.list = newMessage;
      return newState;
    }
    case ZHIDING:{
      // const { message} = this.state;
      // const newMessage= message.slice();
      // const arr1= newMessage.splice(action.idx,1);
      // newMessage.unshift(arr1[0]);
      // this.setState({
      //   message : newMessage
      // });
     return ;
    }
    case DELETE:{
     return 3;
    }
    default:
    return state;
  }
}