import React, { Component } from 'react';
import { Avatar } from 'antd';
import { Input } from 'antd';
import {Button} from 'antd';
import { connect } from 'react-redux';
import './TopBar.css';
const img=require('../source/10.jpg');
class TopBar extends Component{
    render(){
          const { MessageTop} = this.props;
        return(
            <div>
              <div className="TouXiang">
                <Avatar shape="square" className="Tou" src={img} />
              </div>
              <div className="message">
                <div className="message-left">
                    <p>{MessageTop.message.banji}</p>
                    <p>学员编号 : {MessageTop.message.id}</p>
                    <p>在学课程 : {MessageTop.message.course}</p>
                    <p>入学时间 : {MessageTop.message.time}</p>
                </div>
                <div className="message-mid">
                    <p>历史付费额 : {MessageTop.message.money}</p>
                    <p>累计学习天数 : {MessageTop.message.day}</p>
                    <p>最后登录时间 : {MessageTop.message.lastTime}</p>
                </div>
                <div className="message-right">
                    <p>手机号码 : 18731213995</p>
                    <p>微信号码 : <Input placeholder="xiaoniangao" className="inp"/><Button className="tj1">提交</Button></p>
                    <p>备注 : <Input placeholder="xiaoniangao" className="inp"/><Button  className="tj2">提交</Button></p>
                </div>
              </div>
            </div>
        );
    }
}
function mapStateToProps(state,ownProps){
  const {MessageList,MessageListxia,MessageTop} = state;
  return {MessageList,MessageListxia,MessageTop};
}
export default connect(mapStateToProps)(TopBar);