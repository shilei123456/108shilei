import React, { Component } from 'react';
import { Button } from 'antd';
import './RightList.css';
 export default class RightList extends Component{ 
    render(){   
        return(
               this.props.QXmessage.initialState.map((item,idx)=>{
              return (
                <div className="btnList">
                  <Button>{item.name} mid:{item.mid}</Button>
                </div>
               )            
             })
        );
       
    }
}