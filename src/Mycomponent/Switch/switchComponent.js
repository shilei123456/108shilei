import React, { Component } from 'react';
import './switchComponent.css';
export default class switchComponent extends Component {
    static defaultProps={
        isActive:false,
    } 
    handleAction=()=>{
      const {onhandleSwitch}  = this.props
    }
    getMaskClassName = ()=>{
        if(!this.props.isActive){
            return 'mask showMask'
        }else{
            return 'mask hideMask'
        }
    }
    render(){
         const {isActive}=this.props;
        return(
            <div className="actionsheetCtn" onClick={this.handleAction}>
              <div className={this.getMaskClassName()} ></div>
            </div>
        );
    }
}