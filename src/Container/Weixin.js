import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import MessageItemView from '../Component/Message.js';
import FootMessageItemView from '../Component/Button.js';
import DialogViewM from '../Component/DialogView.js';
import Tanchuang from '../Component/Tanchuang.js';
import MoreV from '../Component/More.js';

import * as todoActionCreators from '../actions/index.js';
import '../App.css';
const icon1 = require('../resource/1.png')
const icon2 = require('../resource/2.png')
const icon3 = require('../resource/3.png')
const icon4 = require('../resource/4.png')
const icon5 = require('../resource/搜素.png')
const icon6 = require('../resource/添加.png')
class Weixin extends Component {
	constructor(props){
		super(props);
		this.state={
			FootMessage:[
				{   imgb : icon1,
					con : '微信'
				},
				{   imgb : icon2,
					con : '通讯录'
				},
				{   imgb : icon3,
					con : '发现'
				},
				{   imgb : icon4,
					con : '我'
				}
			],
			index:null
		}
	}
	
	handleShowTan = () => {
		const {todoActions}=this.props;
		todoActions.showTan(false);
	}
    
	handleShowMore = () =>{
		const {todoActions}=this.props;
		todoActions.showMore(false);
	}
    handleCloseMore=()=>{
		const {todoActions}=this.props;
		todoActions.showMore(true);
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

	rendMessages= (MessageList,Dialog) =>{
		const msg=MessageList.list.map((item,idx)=>{
			return <MessageItemView 
			itemIndex={idx} 
		    onhandleShowMore ={this.handleShowMore}
			key={idx} 
			item={item} />
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
	  const { todoActions } = this.props;
	  const { MessageList,Dialog } = this.props;
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
								{this.rendMessages(MessageList,Dialog)}
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
					todoActions={todoActions}
					// onhandleTan={this.handleShowTan} 
					/>

					<MoreV 
				    onCloseMore={this.handleCloseMore}
					onhandleTop={this.handleMoreTop} 
					onhandleDel={this.handleMoreDel}/>
			  </div>
      </div>
    );
  }
}
function mapStateToProps(state,ownProps){
  const {MessageList,Dialog} = state;
  return {MessageList,Dialog};
}
function mapDispatchToProps(dispatch){
  return {
    todoActions: bindActionCreators(todoActionCreators, dispatch)
  }
}
export default  connect(mapStateToProps,mapDispatchToProps)(Weixin);
