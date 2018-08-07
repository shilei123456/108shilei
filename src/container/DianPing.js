import React, { Component } from 'react';
import Search from '../DPcomponent/Search';
import Tabs from '../DPcomponent/Tabs';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';
import { connect } from 'react-redux';
class DianPing extends Component{ 
     componentDidMount(){
     const {Actions}=this.props;
     Actions.fetchDianPingInfo(1);
   }
    render(){    
        return(
            <div>
               <Search />
               <Tabs DianPing={DianPing}/>
            </div>
        );
    }
}
function mapStateToProps(state,ownProps){
  const {DianPing} = state;
  return {DianPing};
}
const mapDispatchToProps = dispatch => {
  return {
    Actions: bindActionCreators(actionCreators, dispatch)
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(DianPing);