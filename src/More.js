import React, { Component } from 'react';
import './App.css';

export default class MoreView extends Component{

handleClose = () =>{
    this.props.onCloseMore(false);
}

    render(){
        const {isMore} = this.props;
        if(!isMore){
            return null;
        }
     return(
        <div className="fugai">
            <div className="fg">
                <div className="f">
                    <button className="close" onClick={this.handleClose}>x</button>
                    <button>置顶</button>
                    <button>删除</button>
                    <button>全选</button>
                </div>
            </div>
        </div>
        )
    }
}