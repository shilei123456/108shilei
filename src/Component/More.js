import React, { Component } from 'react';
import '../App.css';

export default class MoreView extends Component{

handleClose = () =>{
    this.props.onCloseMore(false);
}

handleT = () =>{
    this.props.onhandleTop();
}

handleD = () =>{
    this.props.onhandleDel();
}

    render(){
        const {isMore} = this.props
        if(!isMore){
            return null;
        }
        return(
        <div className="fugai">
            <div className="fg">
                <div className="f">
                    <button className="close" onClick={this.handleClose}>x</button>
                    <button onClick={this.handleT}>置顶</button>
                    <button onClick={this.handleD}>删除</button>
                    <button>全选</button>
                </div>
            </div>
        </div>
        )
    }
}