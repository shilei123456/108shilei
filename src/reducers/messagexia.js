import { ADD_ITEM } from '../const/ActionTypes.js'
import React, { Component } from 'react';
import { Icon } from 'antd';
import "../component/Table.css";
const initialMessage={
columns : [{
    title: '班级',
    dataIndex: 'classInfo',
    key: 'classInfo',
    align: 'center',
    render: text => {
    return <div>
            <Icon type="exclamation-circle" />
            <span>{text.name}</span>
           </div>}
  }, {
    title: '课程状态',
    dataIndex: 'status',
    key: 'status',
    align: 'center'
  }, {
    title: '开课时间',
    dataIndex: 'startTime',
    key: 'startTime',
    align: 'center'
  },
  {
    title: '老师',
    dataIndex: 'teacherInfo',
    key: 'teacherInfo',
    align: 'center',
    render: text => {
    return  <div>
              <Icon type="user" />
              <span>{text.nick}</span>
            </div>}
  },
  {
    title: '上课率',
    dataIndex: 'enterRate',
    key: 'enterRate',
    align: 'center'
  },
  {
    title: '作业提交率',
    dataIndex: 'homeworkSubmitRate',
    key: 'homeworkSubmitRate',
    align: 'center',
    render:text=>{
      let num=parseInt(text, 10);
      if(num<80){
        return <span className="Red">{text}</span>
      }else if(num>95){
        return <span className="Orange">{text}</span>
      }else{
      return <span>{text}</span>
      }
      }
  },
  {
    title: '被点评情况',
    dataIndex: 'beCommenttedRate',
    key: 'beCommenttedRate',
    align: 'center',
    render:text=>{
      let num=parseInt(text, 10);
      if(num<80){
        return <span className="Red">{text}</span>
      }else if(num>95){
        return <span className="Orange">{text}</span>
      }else{
        return <span>{text}</span>
      }
      }
  },
  {
    title: '打卡率',
    dataIndex: 'signRate',
    key: 'signRate',
    align: 'center'
  },
  {
    title: '满意度',
    dataIndex: 'satisfyRate',
    key: 'satisfyRate',
    align: 'center',
    render:text=>{
      let num=parseInt(text, 10);
      if(num<80){
        return <span className="Red">{text}</span>
      }else if(num>95){
        return <span className="Orange">{text}</span>
      }else{
        return <span>{text}</span>
      }
      }
  },
]
}
export default function MessageListxia(state=initialMessage,action){
  switch(action.type){
    case ADD_ITEM:{
       return state;
    }
    default:
    return state;
  }
}