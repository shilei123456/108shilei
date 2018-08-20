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
     getTextColor=(item1)=>{
         if(item1===0){
             return "text0"
         }else{
             return "text"
         }
     }
      componentDidMount(){
        const {item1,handleRestart,GameMessage} = this.props
         if(item1===2048 || GameMessage.ScoreData>20000){
            alert("哈哈，我就是彩蛋。祝君通关！！！")
            handleRestart()
        }
      }
    render(){  
        const {item1,handleRestart,GameMessage} = this.props
       
        const style1=Object.assign(cureColor,this.getCureColor(item1))
        const currentColor=style1.style[item1] 
            return (
                 <div style={this.getCureColor(item1)} className="cure" ><p className={this.getTextColor(item1)}>{item1}</p></div>
            )   
    }
}