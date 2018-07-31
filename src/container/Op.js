import React, { Component } from 'react';
// import axios from 'axios';
import TOPBAR from '../component/TopBar.js';
import NAVBAR from '../component/NavBar.js';
import BUTTONLIST from '../component/ButtonList.js';
import TABLE from '../component/Table.js';
 export default class Op extends Component{ 
    // componentWillMount() {
    //  axios({
    //     method: 'POST',
    //     url: 'http://xly-wkop.xiaoniangao.cn/getLessonInfo'
    //     }).then(res => {
    //         console.log(res.data.data.currentLessonsList[0]);
    //     }).catch(err => {
    //         console.log(err);
    //     });
    //     }      
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