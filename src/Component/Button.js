import React, { Component } from 'react';
import '../App.css';

export default class FootMessageItem extends Component{

   onMClick = () =>{
        const {onClick,item} = this.props;
        if(onClick){
          onClick(item);
        }
    }

    render(){
        const {item} = this.props;
        return(
           <li onClick={this.onMClick}>
			 <img className="fimg" src={item.imgb} alt="微信" />
			 <p>{item.con}</p>
		   </li>
        )
    }
}