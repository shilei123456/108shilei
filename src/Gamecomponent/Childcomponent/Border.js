import React, { Component } from 'react';
import './Border.css';
import Cure from './Cure';

export default class Border extends Component {
    renderBorder=() => {
      const { GameMessage, handleRestart } = this.props;
      return this.props.GameMessage.GameData.map((item, idx) => item.map((item1, idx1) => (<Cure
        key={idx1}
        item1={item1}
        handleRestart={handleRestart}
        GameMessage={GameMessage}
      />)));
    }
    render() {
      const { GameMessage, handleRestart } = this.props;
      // 判断小方块内是否填满数字了，如果填满游戏结束
      let GameOverX = 0;
      let GameOverY = 0;
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++) {
          if ((GameMessage.GameData[i][j] !== 0) && (GameMessage.GameData[i][j + 1] !== 0) && GameMessage.GameData[i][j] !== GameMessage.GameData[i][j + 1]) {
            GameOverX++;
          }
        }
      }

      for (let j = 0; j < 4; j++) {
        for (let i = 0; i < 3; i++) {
          if ((GameMessage.GameData[i][j] !== 0) && (GameMessage.GameData[i + 1][j] !== 0) && GameMessage.GameData[i][j] !== GameMessage.GameData[i + 1][j]) {
            GameOverY++;
          }
        }
      }

      if (GameOverX === 12 && GameOverY === 12) {
        alert('通关失败，再接再厉，通关成功有彩蛋哦！请按重新开始或者退出游戏！！！');
        handleRestart();
      }

      return (
        <div className="content">
          {this.renderBorder()}
        </div>
      );
    }
}
