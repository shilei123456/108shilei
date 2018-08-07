import React, { Component } from 'react';
import { List } from 'antd';
const data = [
  "冰雪mid：267511969 07/12 06:36",
  "小x老师（点评老师 白帆）：",
  "小x老师（带课老师 海波）：",
  "冰雪mid：267511969 07/12 06:36",
  "小x老师："
];
 export default class RlistComponent extends Component{    
    render(){    
        return(
            <div>
              <List
                bordered
                dataSource={data}
                renderItem={item => (<List.Item>{item}</List.Item>)}
                />
            </div>
        );
    }
}