import React, { Component } from 'react';
import './main.css'
import Item from './Childcomponent/Item.js'
import Border from './Childcomponent/Border.js'
import {connect} from 'react-redux'
import {  Button, Input  } from 'antd';
import { bindActionCreators } from 'redux'
import * as actionCreators from '../actions'
 class MainComponent extends Component{ 
      state={
        a:'',
        b:''
     }
      componentDidMount(){
       const {Actions}=this.props;
       function number(){
                    let round = Math.ceil(Math.random()*4);
                        if(round%2==0){
                            return round;
                        }else{
                            return round=round+1;
                        }
                    }
      Actions.fetchInitCureInfo(Math.floor(Math.random()*4),
                                Math.floor(Math.random()*4),
                                Math.floor(Math.random()*4),
                                Math.floor(Math.random()*4),
                                number(),
                                number())
    }
    componentWillMount(){
         const {Actions}=this.props;
          function number(){
                    let round = Math.ceil(Math.random()*4);
                        if(round%2==0){
                            return round;
                        }else{
                            return round=round+1;
                        }
                    }
         document.addEventListener('keydown',(e)=>{ 
                switch(e.keyCode){
                    case 37:
                    Actions.fetchLeftCureInfo(
                                Math.floor(Math.random()*4),
                                Math.floor(Math.random()*4),
                                number())
                        break;
                    case 38:
                    Actions.fetchUpCureInfo(
                                Math.floor(Math.random()*4),
                                Math.floor(Math.random()*4),
                                number())
                         break;
                    case 39:
                   Actions.fetchRightCureInfo(
                                Math.floor(Math.random()*4),
                                Math.floor(Math.random()*4),
                                number())
                       break;
                    case 40:
                   Actions.fetchDownCureInfo(
                                Math.floor(Math.random()*4),
                                Math.floor(Math.random()*4),
                                number())
                        break;
                    }
            })
    }
    handleRestart=()=>{
        const {Actions}=this.props;
       function number(){
                    let round = Math.ceil(Math.random()*4);
                        if(round%2==0){
                            return round;
                        }else{
                            return round=round+1;
                        }
                    }
      Actions.fetchRestartCureInfo(Math.floor(Math.random()*4),
                                Math.floor(Math.random()*4),
                                Math.floor(Math.random()*4),
                                Math.floor(Math.random()*4),
                                number(),
                                number(),0)
    }
    //手机版
   handleBtn=(event)=>{
         const {Actions}=this.props;
          function number(){
                    let round = Math.ceil(Math.random()*4);
                        if(round%2==0){
                            return round;
                        }else{
                            return round=round+1;
                        }
                    }
        let v = Number(event.target.value);
        switch(v){
                    case 37:
                    Actions.fetchLeftCureInfo(
                                Math.floor(Math.random()*4),
                                Math.floor(Math.random()*4),
                                number())
                        break;
                    case 38:
                    Actions.fetchUpCureInfo(
                                Math.floor(Math.random()*4),
                                Math.floor(Math.random()*4),
                                number())
                         break;
                    case 39:
                   Actions.fetchRightCureInfo(
                                Math.floor(Math.random()*4),
                                Math.floor(Math.random()*4),
                                number())
                       break;
                    case 40:
                   Actions.fetchDownCureInfo(
                                Math.floor(Math.random()*4),
                                Math.floor(Math.random()*4),
                                number())
                        break;
                    }
    }
    render(){   
        const { GameMessage }= this.props
        return(
         <div>
            <div className="main">
                 <Item onhandleRestart={this.handleRestart} GameMessage={GameMessage} />
                 <Border GameMessage={GameMessage} handleRestart={this.handleRestart}/>
            </div>
            <div className="main1">
              <div className="fangxiang">
                    <Button  onClick={this.handleBtn} value="38" style={{float:"left",margin:"-10px 0 0 0"}}>上</Button><br />
                    <Button  onClick={this.handleBtn} value="37" style={{float:"left",margin:"17px 0 0 -130px"}}>左</Button><Button onClick={this.handleBtn} value="39" style={{position:"absolute",float:"left", margin:"17px 0 0 2px"}}>右</Button><br /> 
                    <Button  onClick={this.handleBtn} value="40" style={{float:"left",margin:"40px 0 0 0"}}>下</Button>
              </div>
            </div>
          </div>
        );
    }
}

function mapStateToProps(state,ownProps){
  const {GameMessage} = state;
  return {GameMessage};
}
const mapDispatchToProps = dispatch => {
  return {
    Actions: bindActionCreators(actionCreators, dispatch)
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(MainComponent);