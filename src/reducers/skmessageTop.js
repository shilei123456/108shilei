import { ADD_ITEM } from '../const/ActionTypes.js'
import React, { Component } from 'react';
import { Icon } from 'antd';
import '../DAcomponent/Table.css';
const initialMessage={
columns : [{
    title: '课程内容',
    dataIndex: 'course_name',
    key: 'course_name',
    align: 'center'
  }, {
    title: '上课时间',
    dataIndex: 'time',
    key: 'time',
    align: 'center'
  }, {
    title: '上课情况',
    dataIndex: 'enter_status',
    key: 'enter_status',
    align: 'center',
    render:text=>{
      if(text==0){
        return <div><strong><Icon type="close"/></strong></div>
      }else{
        return <div><strong><Icon type="check"/></strong></div>
      }
    }
  },
  {
    title: '作业提交情况',
    dataIndex: 'homework_status',
    key: 'homework_status',
    align: 'center',
    render:text=>{
      if(text==0){
        return <div><strong><Icon type="close"/></strong></div>
      }else{
        return <div><strong><Icon type="check"/></strong></div>
      }
    }
  },
  {
    title: '被点评情况',
    dataIndex: 'review_status',
    key: 'review_status',
    align: 'center',
    render:text=>{
      if(text==0){
        return <div><strong><Icon type="close"/></strong></div>
      }else if(text==1){
        return <div><strong><Icon type="check"/></strong></div>
      }else{
         return <div><strong><Icon type="minus"/></strong></div>
      }
    }
  },
  {
    title: '打卡情况',
    dataIndex: 'clockin_status',
    key: 'clockin_status',
    align: 'center',
    render:text=>{
      if(text==0){
        return <div><strong><Icon type="close"/></strong></div>
      }else{
        return <div><strong><Icon type="check"/></strong></div>
      }
    }
  },
  {
    title: '满意度评分',
    dataIndex: 'satisfied_score',
    key: 'satisfied_score',
    align: 'center',
    render:text=>{
      if(text<5){
        return <div className="red"><strong>{text}</strong></div>
      }else{
        return <div>{text}</div>
      }
    }
  }
]
}
export default function SKmessageTOP(state=initialMessage,action){
  switch(action.type){
    case ADD_ITEM:{
       return state;
    }
    default:
    return state;
  }
}