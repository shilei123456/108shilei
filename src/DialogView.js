import React, { Component } from 'react';
import './App.css';

export default class DialogViewItem extends Component{

  onMsgClick = () =>{
        const {onClick,item} = this.props;
        if(onClick){
          onClick(item);
        }
    }
    render(){
        const {item} = this.props;
        return(
           		<button className="btn" onClick={this.onMsgClick}>{item.btn}</button>
        )
    }
}