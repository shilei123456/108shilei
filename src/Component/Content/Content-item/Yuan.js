import React, { Component } from 'react';
import '../../../App.css';
import Check from './Check.js';
export default class Yuan extends Component {
   constructor(){
       super(),
       this.state={
           isShow:false
       }
   }
    handleShow = () => {
             this.props.handleTop();
             this.props.MyIndex(this.props.itemIdex);
             this.setState({ isShow: !this.state.isShow });
        }
  render() {
      const{item}=this.props;
    return (
      <div className="app-content-right">
            <div className={item.title} onClick={this.handleShow}>
                <Check isShow={this.state.isShow}/>
            </div>
      </div>
    );
  }
}

