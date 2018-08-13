import React, { Component } from 'react';
import { Button } from 'antd';
import './LeftList.css';
 export default class LeftList extends Component{ 
    render(){   
        return(
            this.props.QXmessage.initialLeftState.map((item,idx)=>{
              return (
                <div className="btnList">
                  <Button>{item.name} mid:{item.mid}</Button>
                </div>
             )            
         })
        );
       
    }
}