import React, { Component } from 'react';
import { Tabs  } from 'antd';
import LeftList from './List/leftList';
import RightList from './List/rightList';
import './Tabs.css';
const TabPane = Tabs.TabPane;
function callback(key) {
  console.log(key);
}

 export default class TabsComponent extends Component{    
    render(){    
        return(
            <div className="tabs">
              <Tabs className="leftTabs" defaultActiveKey="1" onChange={callback}>
                <TabPane tab="我的未点评&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;今日已点评：999" key="1"><LeftList /></TabPane>
                <TabPane tab="我的点评历史&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;累计点评：999" key="2">Content of Tab Pane 2</TabPane>
              </Tabs>
               <Tabs className="rightTabs" defaultActiveKey="1" onChange={callback}>
                <TabPane tab="全部未点评" key="1"><RightList /></TabPane>
                <TabPane tab="全部已点评" key="2">Content of Tab Pane 2</TabPane>
              </Tabs>
            </div>
        );
    }
}