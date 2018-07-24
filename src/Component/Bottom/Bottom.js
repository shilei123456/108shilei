import React, { Component } from 'react';
import '../../App.css';
const Img= require('../../source/icon_Good_B-2.png');
export default class Bottom extends Component {
  render() {
    return (
      <div className="app-bottom">
				<div className="app-bottom-item">
					<div className="app-bottom-item-top">
						<img src={Img} alt="暂无图片" />
					</div>
					<div className="app-bottom-item-bottom">
						<p>微信</p>
					</div>
				</div>
				<div className="app-bottom-item">
					<div className="app-bottom-item-top">
						<img src={Img} alt="暂无图片" />
					</div>
					<div className="app-bottom-item-bottom">
						<p>通信录</p>
					</div>
				</div>
				<div className="app-bottom-item">
					<div className="app-bottom-item-top">
						<img src={Img} alt="暂无图片" />
					</div>
					<div className="app-bottom-item-bottom">
						<p>发现</p>
					</div>
				</div>
				<div className="app-bottom-item">
					<div className="app-bottom-item-top">
						<img src={Img} alt="暂无图片" />
					</div>
					<div className="app-bottom-item-bottom">
						<p>我</p>
					</div>
				</div>
			</div>
    );
  }
}

