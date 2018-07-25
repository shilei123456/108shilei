import React, { Component } from 'react';
import '../App.css';

export default class MessageItem extends Component{
    onMsgClick = () =>{
        const {onClick,item} = this.props;
        if(onClick){
          onClick(item);
        }
    }
    handleMore= ()=>{   
        this.props.handleShow(true);
        this.props.MyIndex(this.props.itemIndex);
    }
render(){
    const {item} = this.props;
    return(
        <li className="item" onClick={this.onMsgClick}>
            <img className="image" src={item.imga} alt="图片" />
            <p id="name" className="name">{item.name}</p>
            <p id="con" className="con">{item.con}</p>
            <p id="date" className="date">{item.date}</p>
            <button className="more" onClick={this.handleMore}>更多</button>
        </li>
    )
}
}