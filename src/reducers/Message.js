import {FETCH_GITHUB_TABLE_SUC} from '../const/ActionTypes.js'
import React, { Component } from 'react';
import { Icon } from 'antd';
import "../component/Table.css";
const img1=require('../source/人.png');
const initialMessage={
    LessonsList:[],
    historyLessonsList:[]     
}
export default function MessageList(state=initialMessage,action){
  switch(action.type){
    case FETCH_GITHUB_TABLE_SUC:
      let LessonsList = action.data.currentLessonsList;
      let historyLessonsList = action.data.historyLessonsList;
      return Object.assign({...state},{ LessonsList, historyLessonsList })
    default:
    return state;
  }
}