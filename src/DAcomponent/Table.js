import React, { Component } from 'react';
import { Table } from 'antd';
import './Table.css';
import { connect } from 'react-redux';
import * as api from '../api/api';
class Tables extends Component{
     componentDidMount(){
       const {dispatch}=this.props;
       api.fatchdDangAn(dispatch);
   }
    render(){
        const { DAmessage,DAmessageTOP} = this.props;
        return(
            <div className="tab">
             <Table dataSource={DAmessage.msg} columns={DAmessageTOP.columns} />
            </div>
        );
    }
}
function mapStateToProps(state,ownProps){
  const {DAmessageTOP,DAmessage} = state;
  return {DAmessageTOP,DAmessage};
}

export default connect(mapStateToProps)(Tables);