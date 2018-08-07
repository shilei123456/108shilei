import React, { Component } from 'react';
import { List, Avatar } from 'antd';
import './leftList.css';
import Picturecomponent from './picture';
import Xueyuancomponent from './xueyuanList';
 export default class leftListComponent extends Component{    
    render(){    
        return(
               <div className="leftList">
                <div>
                 <Picturecomponent />
                 <Xueyuancomponent />
                </div>
              </div>
        );
    }
}