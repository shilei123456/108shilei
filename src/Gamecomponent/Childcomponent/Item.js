import React, { Component } from 'react';
import { Row, Col, Button  } from 'antd';
import './Item.css'
let timer;
export default class Item extends Component{ 
    state = {
        shouldAnimateDisappear: false
    }
    componentWillReceiveProps(newProps) {
        const { GameMessage } = newProps
        if (GameMessage.BestScore >0) {
            clearTimeout(timer)
            this.setState({
                    shouldAnimateDisappear: false
                })
            timer = setTimeout(() => {
                this.setState({
                    shouldAnimateDisappear: true
                })
            }, 1000);
        }
    }
     getStyle=()=>{
          const { GameMessage } = this.props
          console.log(GameMessage.BestScore)
            if(GameMessage.BestScore !== 0){
                if(this.state.shouldAnimateDisappear) {
                    return null
                }
                return "style1"
            }
        }
    render(){   
        const { GameMessage } = this.props
        if(GameMessage.ScoreData>GameMessage.BestScore){
            GameMessage.BestScore=GameMessage.ScoreData
        }
        return(
            <div>
                  <Row>
                    <Col className="col1" span={12}><strong>2048</strong></Col>
                    <Col className="col2" span={12}><Button>Scores<p>{GameMessage.ScoreData}</p></Button><Button>Best Score<p className={this.getStyle()}>{GameMessage.BestScore}</p></Button></Col>
                  </Row>
                  <Row>
                    <Col className="col3" span={12}>Keypressing '▲ ▼ ◀ ▶'<br/> on PC. Touch moving on Phone!<br/> Join it & have fun!</Col>
                    <Col className="col4" span={12}><Button onClick={this.props.onhandleRestart}>Restart</Button></Col>
                  </Row>
            </div>
        );
    }
}