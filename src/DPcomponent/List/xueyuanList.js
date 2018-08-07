import React, { Component } from 'react';
import { List, Avatar,Switch   } from 'antd';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions';
import { connect } from 'react-redux';
const data = [
  {
    title: '作业：拍摄一组静物',
  }
];
const initialMessage={
columns : [{
    title: 'id',
    dataIndex: 'id',
    key: 'id',
    align: 'center'
  },{
    title: '作业',
    dataIndex: 'description',
    key: 'description',
    align: 'center'
  },{
    title: '作者',
    dataIndex: 'author',
    key: 'author',
    align: 'center'
  },{
    title: '班级',
    dataIndex: 'classInfo',
    key: 'classInfo',
    align: 'center'
  },{
    title: '点评人',
    dataIndex: 'teacherInfo',
    key: 'teacherInfo',
    align: 'center'
  },{
    title: '时间',
    dataIndex: 'time',
    key: 'time',
    align: 'center'
  },{
    title: '佳作',
    dataIndex: 'isExcellent',
    key: 'isExcellent',
    align: 'center'
  }
  ]
}
class xueyuanComponent extends Component{    
    render(){    
         const { DianPing} = this.props;
         let dp1=DianPing.dianping.map((item,idx)=>{
                return item;
            });
        console.log(dp1[0]);
        return(
            <div>
               <List
                itemLayout="horizontal"
                dataSource={data}
                columns={initialMessage.columns}
                renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title={<a>{item.title}</a>}
                    description="冰雪 mid:2675119856  18期提高班|小✘老师   点评人：✘✘✘  提交时间：1533362538734"
                    />
                    佳作&nbsp;&nbsp;<Switch defaultChecked />
                </List.Item>
                )}
            />
            </div>
        );
    }
}
function mapStateToProps(state,ownProps){
  const {DianPing} = state;
  return {DianPing};
}
const mapDispatchToProps = dispatch => {
  return {
    Actions: bindActionCreators(actionCreators, dispatch)
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(xueyuanComponent);
