import { ADD_ITEM } from '../const/ActionTypes.js'
import React, { Component } from 'react';
import { Icon } from 'antd';
import '../DAcomponent/Table.css';
const initialMessage={
columns : [{
    title: '头像',
    dataIndex: 'hurl',
    key: 'hurl',
    align: 'center',
    render: text => {
    return  <div>
              <div><img src={text} alt="暂无图片" className="img-size"/></div>
            </div>}
  }, {
    title: '姓名',
    dataIndex: 'nick',
    key: 'nick',
    align: 'center'
  }, {
    title: '学号',
    dataIndex: 'mid',
    key: 'mid',
    align: 'center'
  },
  {
    title: '入学时间',
    dataIndex: 'enter_time',
    key: 'enter_time',
    align: 'center'
  },
  {
    title: '课程',
    dataIndex: 'learning_lessons',
    key: 'enterRate',
    align: 'center'
  },
  {
    title: '开课时间',
    dataIndex: 'start_time',
    key: 'start_time',
    align: 'center'
  },
  {
    title: '老师',
    dataIndex: 'teachers',
    key: 'teachers',
    align: 'center'
  }
]
}
export default function DAmessageTOP(state=initialMessage,action){
  switch(action.type){
    case ADD_ITEM:{
       return state;
    }
    default:
    return state;
  }
}