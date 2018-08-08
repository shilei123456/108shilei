import React, { Component } from 'react';
import './rightList.css'
export default class rightList extends Component {
  renderRemarkDetail = () => {
    const { DianPing } = this.props;
    console.log(DianPing)
  }
  render() {
    const {item} = this.props;
     const date=new Date(1533362538734).toLocaleDateString();
    return (
      <div className="rightList">
            <ul className="detail">
              <li>冰雪mid：{item.author.mid}<span className="right">{date}</span><p>这个我不会</p></li>
              <li>小x老师 (点评老师 白帆)：<span className="right">{date}</span><p>光影应该这样<br/><span className="message">(消息被退回，退回原因：点评太简单)</span></p></li>
              <li>小x老师 (代课老师 海波)：<p>光影应该这样处理<span className="tuihui">退回</span></p></li>
            </ul>
      </div>
      );
  }
}

