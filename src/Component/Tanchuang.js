import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todoActionCreators from '../actions/index.js';
class TanchuangView extends Component{

handSubmit=()=>{
    const {todoActions}=this.props;
    todoActions.additem(this.refs.input.value,this.refs.input1.value,this.refs.input2.value);
    todoActions.showTan(true);
    this.refs.input.value="";
    this.refs.input1.value="";
    this.refs.input2.value="";
}
 render(){
    const { todoActions } = this.props;
	const { MessageList,Dialog } = this.props;
    if(Dialog.showDailog){
        return null
    }
    return(
        <div className="tanc">
            <div className="tc">
                <div className="t">
                    姓&nbsp;名:<input type="text" ref="input" className="name1" />
                    内&nbsp;容:<input type="text" ref="input1" className="con1" />
                    时&nbsp;间:<input type="text" ref="input2" className="date1" />
                    <button className="tijiao" onClick={this.handSubmit}>提交</button>
                </div>
            </div>
        </div>
        )
    }
}
function mapStateToProps(state,ownProps){
    const {MessageList,Dialog} = state;
  return {MessageList,Dialog};
}
function mapDispatchToProps(dispatch){
  return {
    todoActions: bindActionCreators(todoActionCreators, dispatch)
  }
}
export default  connect(mapStateToProps,mapDispatchToProps)(TanchuangView);