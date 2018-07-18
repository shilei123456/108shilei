import React, { Component } from 'react';
import MessageItemView from './Message.js';
import FootMessageItemView from './Button.js';
import DialogViewM from './DialogView.js';
import './App.css';
const Img = require('./11.jpg')
const icon1 = require('./1.png')
const icon2 = require('./2.png')
const icon3 = require('./3.png')
const icon4 = require('./4.png')
class App extends Component {
	constructor(props){
		super(props);
		this.state={
			message : [
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
			],
			FootMessage:[
				{imgb : icon1,
					con : '微信'
				},
				{imgb : icon2,
					con : '通讯录'
				},
				{imgb : icon3,
					con : '发现'
				},
				{imgb : icon4,
					con : '我'
				}
			],
			DialogViewItemMess:[
				{
					btn:'全选'
				},
				{
					btn:'添加'
				},
				{
					btn:'删除'
				},
				{
					btn:'修改'
				}
			],
			showDailog : false
		}
	}

	onItemClick = (message) =>{
	   console.log(message);
		
		 this.setState({
          showDailog : true,
					
        });
	}

  onDialogClick = (DialogViewItemMess) =>{
     console.log(DialogViewItemMess.btn);
	}

	renderDailog = () => {
    if(this.setState.showDailog){
        // return <DialogViewM />
				alert(11)
    }
    return null;
  }

	rendMessages= () =>{
		const msg=this.state.message.map((item,idx)=>{
			return <MessageItemView key={idx} item={item} onClick={this.onItemClick} />
		});
		return msg;
	}

	rendFootMessages= () =>{
		const Fmsg=this.state.FootMessage.map((item,idx)=>{
			return <FootMessageItemView key={idx} item={item}  />
		});
		return Fmsg;
	}
	
	rendDialogViewMess= () =>{
		const Dmsg=this.state.DialogViewItemMess.map((item,idx)=>{
			return <DialogViewM key={idx} item={item} onClick={this.onDialogClick} />
		});
		return Dmsg;
	}

  render() {
    return (
      <div className="App">
			 <div className="content">

					<div className="main">
						<div className="main-con">
							<ul>
								{this.rendMessages()}
							</ul>
					  </div>
				  </div>

					<div className="foot">
						<ul>
						     { this.rendFootMessages() }
						</ul>
			    </div>

					<div className="fugai">
					   <div className="fg">
							{ this.rendDialogViewMess() }
						 </div>
					</div>
           
				</div>
      </div>
    );
  }
}

export default App;
