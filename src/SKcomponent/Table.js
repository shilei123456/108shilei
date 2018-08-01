import React, { Component } from 'react';
import { Table } from 'antd';
import './Table.css';
import { connect } from 'react-redux';
import * as api from '../api/api';
class Tables extends Component{
     componentDidMount(){
       const {dispatch}=this.props;
       api.fatchdShangke(dispatch);
   }
    render(){
        const {SKmessage,SKmessageTOP} = this.props;
        return(
            <div className="tab">
             <p><strong>班级:{SKmessage.top.name}&nbsp;&nbsp;&nbsp;班级ID:{SKmessage.top.id}&nbsp;&nbsp;&nbsp;老师:白帆/98676/fgg&nbsp;&nbsp;&nbsp;负责员工:小白老师/76544/9667554</strong></p>
             <Table dataSource={SKmessage.msg} columns={SKmessageTOP.columns} />
            </div>
        );
    }
}
function mapStateToProps(state,ownProps){
  const { SKmessage,SKmessageTOP} = state;
  return { SKmessage,SKmessageTOP};
}

export default connect(mapStateToProps)(Tables);