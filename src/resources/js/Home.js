import React, { Component } from 'react';
/* import { Link } from 'react-router-dom';  */

import '../../resources/css/Home.css'

class Home extends Component {
  render() {
    return (
        <div>
          <div className="HomeListText"><a href={"https://discord.gg/VbkZwD553m"} target="_blank" rel="noreferrer">Discord回報區</a></div>
          <text className="UpdateNote">>更新日誌
            <br></br>2021/7/18 隨行獸清單
            <br></br>2021/7/18 魔物資料&弱點列表
          </text>
          <div className="DonateInfo">本站Opay贊助資訊<br></br>
            <a href="https://qr.opay.tw/gXLrK"><img className="DonateImg" src="https://payment.opay.tw/Upload/Broadcaster/1552349/QRcode/QRCode_43D787DBA4BB59852F9A39EEE99DECB8.png" alt="OpayQRcode" target="_blank" /></a>
          </div>
          
        </div>
    );
  }
}

export default Home;