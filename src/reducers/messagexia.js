import { ADD_ITEM } from '../const/ActionTypes'
import React, { Component } from 'react';
import "../component/Table.css";
const initialMessage={
        dataSource : [{
            key: '1',
            banji: '高级班',
            status: "已结束",
            time: '2017-04-30',
            teacher: '小白老师',
            shangkelv: '21/21',
            tijiaolv:'8/10',
            dianping:'10/10',
            dakalv:'5/21',
            manyidu:'90.00%'
            }],
        columns : [{
            title: '班级',
            dataIndex: 'banji',
            key: 'banji',
            }, {
            title: '课程状态',
            dataIndex: 'status',
            key: 'status',
            }, {
            title: '开课时间',
            dataIndex: 'time',
            key: 'time',
            },{
            title: '老师',
            dataIndex: 'teacher',
            key: 'teacher',
            }, {
            title: '上课率',
            dataIndex: 'shangkelv',
            key: 'shangkelv',
            }, {
            title: '作业提交率',
            dataIndex: 'tijiaolv',
            key: 'tijiaolv',
            },{
            title: '被点评情况',
            dataIndex: 'dianping',
            key: 'dianping',
            }, {
            title: '打卡率',
            dataIndex: 'dakalv',
            key: 'dakalv',
            }, {
            title: '满意度',
            dataIndex: 'manyidu',
            key: 'manyidu',
            render:text=>{
              let manyi=parseFloat(text);
              if(manyi>=90){
                return <div className="orange">{text}</div>
              }else if(manyi<80){
                return <div className="red">{text}</div>
              }else{
                return <div>{text}</div>
              }
            }
            }]
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