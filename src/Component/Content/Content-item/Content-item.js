import React, { Component } from 'react';
import '../../../App.css';
import Yuan from './Yuan.js';

export default class ContentItem extends Component {
     constructor(){
            super();
            this.state={
                yuan:[{
                    title:'app-content-yuan'
                },{
                    title:'app-content-yua'
                },{
                    title:'app-content-yu'
                },{
                    title:'app-content-y'
                }],
                isShow:false,
                index:null
            }
    }
    handleIndex = (idex) => {
                this.setState({
                index: idex
                })
            }
    handleYuanTop = () =>{
		const { yuan} = this.state;
		const newyuan= yuan.slice();
		const arr1= newyuan.splice(this.state.index,1);
		newyuan.unshift(arr1[0]);
		this.setState({
			yuan : newyuan
		});
	}

rendYuan= () =>{
		const msg=this.state.yuan.map((item,idx)=>{
			return <Yuan 
            itemIdex={idx}
			key={idx} 
			item={item}
            isShow={this.state.isShow}
            MyIndex={this.handleIndex}
            handleTop={this.handleYuanTop}
            
		    />
		});
		return msg;
	}
  render() {
    const {item}= this.props; 
    return (
           <div className="app-content-main">
                <div className="app-content-left">
                    <p>{item.title}</p>
                </div>
              {this.rendYuan()}
            </div>
    );
  }
}

