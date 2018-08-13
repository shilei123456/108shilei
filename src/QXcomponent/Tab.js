import React, { Component } from 'react';
import { Row, Col, Button,Input,Tree } from 'antd';
import './Tab.css';
import RightList from './RightList/RightList.js';
import LeftList from './LeftList/LeftList.js';
const Search = Input.Search;
const TreeNode = Tree.TreeNode;
export default class  TabList extends Component{ 
//     onSelect = (selectedKeys) => {
//     console.log(selectedKeys[0]);
//     if(selectedKeys[0]=='0-0-0'){
//        console.log(selectedKeys[0])
//     }
//   }
renderdefault=()=>{
          if(this.props.isShow){
                return null;
            }else{
                return(
            <div>
            <Row className="Tabrow">
                <Col className="col" span={16}>点评作业：拥有个人点评页，可以为学生作业进行点评</Col>
            </Row>
             <Row className="Tabrow1">
                <Col className="col" span={12}>
                  <Row><Button>删除</Button></Row>
                  <Row className="seach"><Search
                        placeholder="名字"
                        enterButton="搜索"
                        onSearch={value => console.log(value)}
                        />
                  </Row>
                  <Row><LeftList QXmessage={this.props.QXmessage}/></Row>
                </Col>
                <Col className="col" span={4}>
                    <Tree
                        showLine
                        defaultExpandedKeys={['0-0-0']}
                        onSelect={this.onSelect}
                    >
                        <TreeNode title="所有部门" key="0-0">
                            <TreeNode title="爱启迪集团" key="0-0-0">
                              <TreeNode title="广州分公司" key="0-0-0-0">
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
                        onSearch={value => console.log(value)}
                        />
                  </Row>
                  <Row><RightList QXmessage={this.props.QXmessage}/></Row>
                  <Row className="Row-btn"><Button>确定</Button></Row>
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