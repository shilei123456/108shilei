import React, { Component } from 'react';
import './Cure.css';
import cureColor from '../../configColor.json';
 export default class Cure extends Component{ 
     static initial={
         cureColor:{
             backgroundColor:'',
             color:''
         }
     }
     getCureColor=(value=0)=>{
         return {
           backgroundColor:cureColor.style[value].background,
           color:cureColor.style[value].color
         }
     }
    render(){  
          
        const {item1,handleRestart} = this.props
        if(item1===2048){
            alert("Game Over")
            handleRestart()
        }
        const style1=Object.assign(cureColor,this.getCureColor(item1))
        const currentColor=style1.style[item1] 
            return (
                 <div style={this.getCureColor(item1)} className="cure" ><p className="text">{item1}</p></div>
            )   
    }
}