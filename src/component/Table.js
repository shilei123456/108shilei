import React, { Component } from 'react';
import { Table } from 'antd';
import { connect } from 'react-redux';
import './Table.css';
import * as api from '../api/api';
class Tables extends Component{
   componentDidMount(){
       const {dispatch}=this.props;
       api.fatchLesson(dispatch);
   }
    render(){
         const { MessageList,MessageListxia} = this.props;
        return(
            <div className="tables">
             <div className="tanle-top">
              <h4><strong>在学课程</strong></h4>
              <Table  className="" dataSource={MessageList.LessonsList} columns={MessageListxia.columns} />
             </div>
             <div className="tanle-top">
              <h4><strong>历史数据</strong></h4>
              <Table dataSource={MessageList.historyLessonsList} columns={MessageListxia.columns} />
             </div>
            </div>
        );
    }
}
function mapStateToProps(state,ownProps){
  const {MessageList,MessageListxia} = state;
  return {MessageList,MessageListxia};
}

export default connect(mapStateToProps)(Tables);