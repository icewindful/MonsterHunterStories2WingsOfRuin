import React, { Component } from 'react';
/* import { Link } from 'react-router-dom';  */

import '../../resources/css/Home.css'

class Home extends Component {
  render() {
    return (
        <div>
          <h2>更新日誌</h2>
          <h2>2021/7/18 隨行獸清單</h2>
          <h2>2021/7/18 魔物資料&弱點列表</h2>
          <div className="HomeListText"><a href={"https://discord.gg/VbkZwD553m"} target="_blank" rel="noreferrer">Discord回報區</a></div>
        </div>
    );
  }
}

export default Home;