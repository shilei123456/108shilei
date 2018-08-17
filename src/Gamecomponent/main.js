import React, { Component } from 'react';
import './main.css'
import Item from './Childcomponent/Item.js'
import Border from './Childcomponent/Border.js'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../actions'
 class MainComponent extends Component{ 
      state={
        a:'',
        b:''
     }
      componentDidMount(){
        //    const { GameMessage }= this.props
        // for(let i=0; i<4; i++){
        //     for(let j=0; j<3; j++){
        //         if(GameMessage.GameData[i][j] !==0 && GameMessage.GameData[i][j+1] !==0 && GameMessage.GameData[i][j] !==GameMessage.GameData[i][j+1]){
        //            this.state.a=Number(this.state.a)+1
        //            console.log( this.state.a)
        //         }
        //     }
        // }
        // for(let i=0; i<3; i++){
        //     for(let j=0; j<4; j++){
        //         if(GameMessage.GameData[i][j] !==0 && GameMessage.GameData[i+1][j] !==0 && GameMessage.GameData[i][j] !==GameMessage.GameData[i+1][j]){
        //            this.state.b=this.state.b+1
        //         }
        //     }
        // }
        // if(this.state.a==12 && this.state.b==12){
        //     alert("Game over")
        //     this.onhandleRestart
        // }
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
                        // function aa(){
                        //     <audio src="" />
                        // }
                        //  aa()
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
    render(){   
        const { GameMessage }= this.props
        return(
            <div className="main">
                 <Item onhandleRestart={this.handleRestart} GameMessage={GameMessage} />
                 <Border GameMessage={GameMessage} handleRestart={this.handleRestart}/>
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