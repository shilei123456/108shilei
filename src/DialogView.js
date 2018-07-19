import React, { Component } from 'react';
import './App.css';

export default class DialogViewItem extends Component{

handleClose=()=>{
    this.props.onCloseClick(false);
}
 render(){
    const {isActive} = this.props;
    if(!isActive){
        return null
    }
    return(
        <div className="fugai">
            <div className="fg">
                <div className="f">
                    <button className="close" onClick={this.handleClose}>×</button>
                    <button>修改</button>
                    <button>删除</button>
                    <button>添加</button>
                    <button>全选</button>
                </div>
            </div>
        </div>
        )
    }
}