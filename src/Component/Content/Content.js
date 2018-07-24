import React, { Component } from 'react';
import ContentItem from './Content-item/Content-item.js'
import '../../App.css';
const Icon= require('../../source/check.png');
export default class Content extends Component {
    constructor(props){
        super(props);
        this.state={
            content:[
                {
                  title:'我',
                  img:Icon,
                },{
                  title:"微信",
                  img:Icon,
                },{
                  title:"通信录",
                  img:Icon,
                },{
                  title:"发现",
                  img:Icon,
                }
            ]
        };
    }

rendContent= () =>{
		const msg=this.state.content.map((item,idx)=>{
			return <ContentItem 
			key={idx} 
			item={item} 
		    />
		});
		return msg;
	}

  render() {
    return (
     <div className="app-content">
      {this.rendContent()}
	 </div>
    );
  }
}

