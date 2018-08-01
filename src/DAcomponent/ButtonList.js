import React, { Component } from 'react';
import {Button, Menu, Dropdown, Icon,Input } from 'antd';
import './ButtonList.css';
const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="">1st menu item</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="">2nd menu item</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="">3rd menu item</a>
    </Menu.Item>
  </Menu>
);
const Search = Input.Search;
export default class ButtonList extends Component{
    
    render(){
        return(
            <div className="main">
                <div className="Button-left">
                    <Button>汇总</Button>
                    <Button>摄影课</Button>
                    <Button>绘画课</Button>
                </div>
                <div className="Button-right">
                   <Dropdown overlay={menu} className="drop">
                        <a className="ant-dropdown-link" href="#">
                        Hover me <Icon type="down" />
                        </a>
                   </Dropdown>
                   <Search
                    placeholder="input search text"
                    enterButton="搜索"
                    className="search"
                    onSearch={value => console.log(value)}
                    />
                </div>
            </div>
        );
    }
}