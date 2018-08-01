import React, { Component } from 'react';
import TOPBAR from '../component/TopBar.js';
import NAVBAR from '../component/NavBar.js';
import BUTTONLIST from '../component/ButtonList.js';
import TABLE from '../component/Table.js';
 export default class Op extends Component{ 
    render(){    
        return(
            <div>
               <TOPBAR/>
               <NAVBAR/>
               <BUTTONLIST/>
               <TABLE/>
            </div>
        );
    }
}