import React, { Component } from 'react';
import './App.css';

export default class MessageItem extends Component{
    onMsgClick = () =>{
        const {onClick,item} = this.props;
        if(onClick){
          onClick(item);
        }
    }
    render(){
        const {item} = this.props;
        return(
           <li className="item" onClick={this.onMsgClick}>
				<img className="image" src={item.imga} alt="图片无法加载" />
				<p id="name" className="name">{item.name}</p>
				<p id="con" className="con">{item.con}</p>
				<p id="date" className="date">{item.date}</p>
		   </li>
        )
    }
}