import React, { Component } from 'react';
import { Table } from 'antd';
import axios from 'axios'; 
import { connect } from 'react-redux';
import './Table.css';
class Tables extends Component{
    constructor(props){
         super(props);
         this.state={promple:[]}
    }
    componentWillMount() {
     axios({
        method: 'POST',
        url: 'http://xly-wkop.xiaoniangao.cn/getLessonInfo/',
        data:{
            mid:'001'
        }
        }).then(res => {
            console.log(res);
         
        }).catch(err => {
            console.log(err);
        });
        }   
    render(){
         const { MessageList,MessageListxia} = this.props;
        return(
            <div className="tables">
             <div className="tanle-top">
              <h4><strong>在学课程</strong></h4>
              <Table  className="" dataSource={MessageList.dataSource} columns={MessageList.columns} />
             </div>
             <div className="tanle-top">
              <h4><strong>历史数据</strong></h4>
              <Table dataSource={MessageListxia.dataSource} columns={MessageListxia.columns} />
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
