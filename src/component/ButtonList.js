import React, { Component } from 'react';
import {Button} from 'antd';
import './ButtonList.css';
import { Router } from 'react-router';
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
                    <Button>返回</Button>
                </div>
            </div>
        );
    }
}