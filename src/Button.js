import React, { Component } from 'react';
import './App.css';

export default class FootMessageItem extends Component{

    render(){
        const {item} = this.props;
        return(
           <li>
			 <img className="fimg" src={item.imgb} alt="微信" />
			 <p>{item.con}</p>
		   </li>
        )
    }
}