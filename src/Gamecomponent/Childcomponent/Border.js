import React, { Component } from 'react';
import './Border.css'
import Cure from './Cure.js'

import {initBoard} from '../../reducers/game.js'
export default class Border extends Component{ 
    renderBorder=()=>{
         const {item1, GameMessage, handleRestart}= this.props
         return this.props.GameMessage.GameData.map((item,idx)=>{
           return  item.map((item1,idx1)=>{
                  return <Cure 
                            key={idx1}
                            item1={item1}
                            handleRestart={handleRestart}
                            />
                })
         }
         )
    }
    render(){    
        const {item1, GameMessage, handleRestart}= this.props
        return(
            <div className="content">
              {this.renderBorder()}
            </div>
        );
    }
}