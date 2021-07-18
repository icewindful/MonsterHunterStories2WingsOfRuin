import React, { Component } from 'react';
import battle01 from '../images/GameData/system/system01_battle01.jpg';



class Gamesystem extends Component {
  render() {
    return (
        <div>
          <div className ="titleListText">系統</div>
          <h2>戰鬥系統</h2>
          <h2>相剋循環 (力量 → 技巧 → 速度 → 力量)</h2>
            <img className="battle01" src={battle01} alt="battle01" />
          <h2>雙重攻擊</h2>
          <h2>與隨行獸發動條件：相同種類攻擊 (人→力量) + (隨行獸 →力量) </h2>
          <h2>壓制攻擊</h2>
          <h2>發動條件：(主瞄準) → 目標 + (目標)瞄準 → 主角 【猜拳勝利】</h2>
          <h2>羈絆攻擊</h2>
          <h2>發動條件羈絆值LV1以上最高LV3</h2>
          <h2>雙重羈絆攻擊</h2>
          <h2>共鬥模式：雙人發動條件羈絆值LV1以上最高LV3</h2>
          <h2>培育系統</h2>
          <h2>祈禱壺</h2>
          月路
        </div>
    );
  }
}

export default Gamesystem;