import React, { Component } from 'react';
/* import { Link } from 'react-router-dom';  */

import '../../resources/css/Home.css'

class Home extends Component {
  render() {
    return (
        <div className = "homebox">
          <div className="HomeListText"><a href={"https://discord.gg/VbkZwD553m"} target="_blank" rel="noreferrer">Discord回報區</a></div>
          <h1>贊助本站QRCODE</h1>
          <a href="https://qr.opay.tw/LOiSO"><img src="https://payment.opay.tw/Upload/Broadcaster/1552349/QRcode/QRCode_43D787DBA4BB59852F9A39EEE99DECB8.png" alt="icewindful channel Donate"/></a>
          <h2>2021/7/18 隨行獸清單</h2>
          <h2>2021/7/18 魔物資料&弱點列表</h2>
          
        </div>
    );
  }
}

export default Home;