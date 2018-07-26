import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import additem from '../actions/index.js';
class TanchuangView extends Component{

handSubmit=()=>{
    const {dispatch}=this.props;
    const action=additem(this.refs.input.value,this.refs.input1.value,this.refs.input2.value);
    dispatch(action);
    this.refs.input.value="";
    this.refs.input1.value="";
    this.refs.input2.value="";

}
 render(){
    // const {dispatch} = this.props;
	// const { Dialog } = this.props;
    const {isTan} = this.props;
    if(!isTan){
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
  const {Dialog} = state;
  return {Dialog};
}
// function mapDispatchToProps(dispatch){
//  return{
// 	 todoActions:bindActionCreators(todoActionsC,dispatch)
//  }
// ,mapDispatchToProps}
export default  connect(mapStateToProps)(TanchuangView);