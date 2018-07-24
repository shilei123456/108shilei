import React, { Component } from 'react';
import '../../../App.css';
const Icon= require('../../../source/check.png');
export default class Check extends Component {
  render() {
    const {isShow} = this.props;
    if(!isShow){
        return null
    }
    return (
       <img src={Icon} alt="暂无图片"/>
    );
  }
}

