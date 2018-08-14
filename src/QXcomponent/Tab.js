import React, { Component } from 'react';
import { Row, Col, Button,Input,Tree,Icon } from 'antd';
import './Tab.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';
import RightList from './RightList/RightList.js';
import LeftList from './LeftList/LeftList.js';
const Search = Input.Search;
const TreeNode = Tree.TreeNode;
class  TabList extends Component{
 state={
        selectedKey:[],
        currentName:'',
        currentIndex:'',
        xiabiao:''
    }
 onSelect = (selectedKeys) => {
     this.setState({
         selectedKey:selectedKeys
     })
  }
 handleIndex=(name,mid,index)=>{
    this.setState({
        currentName:name,
        currentIndex:mid,
        xiabiao:index
    })
 }
 handleDianji=()=>{
   const {Actions} = this.props;
   if(this.state.currentIndex==''){
       return null
   }else{
     Actions.fetchIndexInfo(this.state.currentName,this.state.currentIndex);
   }
  this.setState({
      currentName:'',
      currentIndex:'',
      xiabiao:''
  })
 }
 handleDelete=()=>{
     const {Actions}=this.props;
     Actions.fetchDelete(this.state.currentIndex,this.state.xiabiao);
 }
handleItem=()=>{
    const {selectedKey} = this.state;
    if(selectedKey[0]=='0-0-0-0'){
      return  this.props.QXmessage.initialState.map((item,idx)=>{
              return (
                 <RightList QXmessage={this.props.QXmessage} 
                            key={idx}
                            item={item}
                            index={idx}
                            onhandleIndex={this.handleIndex}
                            />
                     )            
             })
    }
}
handleLeftItem=()=>{
      return  this.props.QXmessage.initialLeftState.map((item,idx)=>{
              return (
                 <LeftList QXmessage={this.props.QXmessage} 
                            key={idx}
                            item={item}
                            index={idx}
                            onhandleIndex={this.handleIndex}
                            />
                     )            
             })
}
renderdefault=()=>{
          if(this.props.isShow){
                return null;
            }else{
                return(
            <div>
            <Row className="Tabrow">
                <Col className="col" span={16}>点评作业：拥有个人点评页，可以为学生作业进行点评</Col>
                <Col className="guanbi" span={8}><Button onClick={this.props.handleShow}><strong>关闭</strong></Button></Col>
            </Row>
             <Row className="Tabrow1">
                <Col className="col" span={12}>
                  <Row><Button onClick={this.handleDelete}>删除</Button></Row>
                  <Row className="seach"><Search
                        placeholder="名字"
                        enterButton="搜索"
                         onSearch={value => this.props.Actions.fetchLeftSeach(value)}
                        />
                  </Row>
                  <Row>{this.handleLeftItem()}</Row>
                </Col>
                <Col className="col" span={4}>
                    <Tree
                        showLine
                        defaultExpandedKeys={['0-0-0']}
                        onSelect={this.onSelect}
                    >
                        <TreeNode title="所有部门" key="0-0">
                            <TreeNode title="爱启迪集团" key="0-0-0">
                              <TreeNode title="广州分公司" key="0-0-0-0" onClick={this.handleItem()}>
                                <TreeNode title="总经办" key="0-0-0-0-0" />
                                <TreeNode title="财务部" key="0-0-0-0-1" />
                                <TreeNode title="工程部" key="0-0-0-0-2" />
                                <TreeNode title="产品科研部" key="0-0-0-0-0">
                                    <TreeNode title="开发一组" key="0-0-0-0-0-1" />
                                    <TreeNode title="开发二组" key="0-0-0-0-0-2" />
                                    <TreeNode title="测试组" key="0-0-0-0-0-3" />
                                </TreeNode>
                              </TreeNode>
                            </TreeNode> 
                        </TreeNode>
                    </Tree>
                </Col>
                <Col className="col" span={8}>
                  <Row><Search
                        placeholder="名字"
                        enterButton="搜索"
                        onSearch={value =>this.props.Actions.fetchSeach(value)}
                        />
                  </Row>
                  <Row>{this.handleItem()}</Row>
                  <Row className="Row-btn"><Button onClick={this.handleDianji}>确定</Button></Row>
                </Col>
            </Row> 
            </div>
                )
  }
 }
    render(){    
        const { isShow,QXmessage }=this.props;
        return(
           <div>
              {this.renderdefault()}
           </div>
           
        );
    }
}
function mapStateToProps(state,ownProps){
  const {QXmessage} = state;
  return {QXmessage};
}
const mapDispatchToProps = dispatch => {
  return {
    Actions: bindActionCreators(actionCreators, dispatch)
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(TabList);