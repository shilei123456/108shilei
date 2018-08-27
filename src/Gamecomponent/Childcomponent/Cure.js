import React, { Component } from 'react';
import './Cure.css';
import cureColor from '../../configColor.json';

export default class Cure extends Component {
  // 通关条件，方块内数字为2048或总分达到20000即为通关
  componentDidMount() {
    const { item1, handleRestart } = this.props;
    if (item1 === 2048) {
      alert('祝君通关！！！');
      handleRestart();
    }
  }
     // 根据不同的值，选取不同颜色
     getCureColor=(value = 0) => ({
       backgroundColor: cureColor.style[value].background,
       color: cureColor.style[value].color
     })
     // 方块里的数字样式
     getTextColor=item1 => {
       if (item1 === 0) {
         return 'text0';
       }
       return 'text';
     }
     render() {
       const { item1 } = this.props;
       return (
         <div style={this.getCureColor(item1)} className="cure" ><p className={this.getTextColor(item1)}>{item1}</p></div>
       );
     }
}
