import React, { Component } from 'react';
import MessageItemView from './Component/Message.js';
import FootMessageItemView from './Component/Button.js';
import DialogViewM from './Component/DialogView.js';
import Tanchuang from './Component/Tanchuang.js';
import MoreV from './Component/More.js';
import './App.css';
const Img = require('./resource/11.jpg')
const icon1 = require('./resource/1.png')
const icon2 = require('./resource/2.png')
const icon3 = require('./resource/3.png')
const icon4 = require('./resource/4.png')
const icon5 = require('./resource/搜素.png')
const icon6 = require('./resource/添加.png')
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
			index:null,
			showDailog : false,
			showTan : false,
			showMore : false
		}
	}

	onItemClick = (message) =>{
	   console.log(message);
	}

	handleShowDialog = (isActive) => {
		this.setState({ showDailog: isActive });
	}

	handleIndex = (idex) => {
			this.setState({
			index: idex
			})
		}

	handleAddItem = (name1,con1,date1,isTan) => {
    const newMessages = this.state.message.slice();
    newMessages.unshift({
		   imga : Img,
           name:name1,
			con:con1,
			date:date1
    });
    this.setState({
      message: newMessages,
	  showTan:isTan
    });
  }

	handleShowTan = (isTan) => {
		this.setState({ showTan : isTan})
	}
    
	handleShowMore = (isMore) =>{
		this.setState({
			showMore:isMore
		})
	}

    handleMoreTop = () =>{
		const { message} = this.state;
		const newMessage= message.slice();
		const arr1= newMessage.splice(this.state.index,1);
		newMessage.unshift(arr1[0]);
		this.setState({
			message : newMessage
		});
	}

   handleMoreDel = () =>{
	   const { message } = this.state;
	   const newMessage = message.slice();
	   newMessage.splice(this.state.index,1);
	   this.setState({
		   message:newMessage
	   });
   }

	rendMessages= () =>{
		const msg=this.state.message.map((item,idx)=>{
			return <MessageItemView 
			itemIndex={idx} 
			key={idx} 
			item={item} 
			MyIndex={this.handleIndex} 
			onClick={this.onItemClick} 
			handleShow={this.handleShowMore}/>
		});
		return msg;
	}

	rendFootMessages= () =>{
		const Fmsg=this.state.FootMessage.map((item,idx)=>{
			return <FootMessageItemView 
			key={idx} 
			item={item} 
			onClick={this.handleShowDialog} />
		});
		return Fmsg;
	}

  render() {
    return (
      <div className="App">
			 <div className="content">
					<div className="top">
						<p>微信</p>
						<img src={icon5} alt="图片无法加载" className="img1" />
						<img src={icon6} alt="图片无法加载" className="img2" onClick={this.handleShowTan} />
					</div>
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

					<DialogViewM 
					isActive={this.state.showDailog}
					 onCloseClick={this.handleShowDialog}/>

					<Tanchuang 
					isTan={this.state.showTan}  
					onhandTanchuang={this.handleAddItem}/>

					<MoreV 
					isMore={this.state.showMore}  
					onCloseMore={this.handleShowMore} 
					onhandleTop={this.handleMoreTop} 
					onhandleDel={this.handleMoreDel}/>
			  </div>
      </div>
    );
  }
}

export default App;
