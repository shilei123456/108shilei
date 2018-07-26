import React, { Component } from 'react';
import '../App.css';
// import { connect } from 'react-redux';
export default class MoreView extends Component{

handleClose = () =>{
    this.props.onCloseMore(true);
}

handleT = () =>{
    this.props.onhandleTop();
}

handleD = () =>{
    this.props.onhandleDel();
}
    render(){
        // const {dispatch} = this.props;
	    // const { MessageList,Dialog } = this.props;
       const {isMore} = this.props;
        if(!isMore){
            return null;
        }
        return(
        <div className="fugai">
            <div className="fg">
                <div className="f">
                    <button className="close" onClick={this.handleClose}>x</button>
                    <button onClick={this.handleT}>置顶</button>
                    <button onClick={this.handleD}>删除</button>
                    <button>全选</button>
                </div>
            </div>
        </div>
        )
    }
}
// function mapStateToProps(state,ownProps){
//     const {MessageList,Dialog} = state;
//   return {MessageList,Dialog};
// }
// // function mapDispatchToProps(dispatch){
// //  return{
// // 	 todoActions:bindActionCreators(todoActionsC,dispatch)
// //  }
// // ,mapDispatchToProps}
// export default  connect(mapStateToProps)(MoreView);