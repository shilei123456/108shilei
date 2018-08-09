import React, { Component } from 'react';
import './progressComponent.css';
import PropTypes from 'prop-types';
export default class ProgressComponent extends Component {
    static defaultProps={
        isActive:false
    }
    getMaskClassName = ()=>{
        if(!this.props.isActive){
            return 'd'
        }else{
            return 'di'
        }
    }
    render(){
        return(
            <div className="actionsheetCtn">
              <div className={this.getMaskClassName()}>
                <span></span>
              </div>
            </div>
        );
    }
}
