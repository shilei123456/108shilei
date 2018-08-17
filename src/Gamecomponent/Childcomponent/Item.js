import React, { Component } from 'react';
import { Row, Col, Button  } from 'antd';
import './Item.css'
export default class Item extends Component{ 
    // state={
    //    a:'',
    //    b:''
    // }
    render(){   
        const { GameMessage } = this.props
        if(GameMessage.ScoreData>GameMessage.BestScore){
            GameMessage.BestScore=GameMessage.ScoreData
        }
        return(
            <div>
                  <Row>
                    <Col className="col1" span={8}>2048</Col>
                    <Col className="col2" span={16}><Button>Scores<p>{GameMessage.ScoreData}</p></Button><Button>Best Score<p>{GameMessage.BestScore}</p></Button></Col>
                  </Row>
                  <Row>
                    <Col className="col3" span={16}>Keypressing '▲ ▼ ◀ ▶' on PC.<br/> Touch moving on Phone! Join it & have<br/> fun!</Col>
                    <Col className="col4" span={8}><Button onClick={this.props.onhandleRestart}>Restart</Button></Col>
                  </Row>
            </div>
        );
    }
}