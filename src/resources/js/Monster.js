//import React, { Component, useState } from 'react';
import React, { useState } from 'react';
import '../css/Monster.css'

const openMenuFactory = (menuId, setSelectedMenu) => {
  return () => {
    setSelectedMenu(prevState => {
      if (prevState === menuId) {
        return null;
      }
      return menuId;
    });
  };
}

const subMenuDisplayFactory = (menuId, selectedMenu, Component) => {
  return menuId === selectedMenu ? <Component /> : null;
}

/* { [JSON.stringify(selectedMenu), 2] } */  // commit //  onClick check log //

/* <a href="#" onClick={openMenuFactory(1, setSelectedMenu)}>鳥籠種</a> */ // commit // defalut Set //


const Monster = () => {
    const [selectedMenu, setSelectedMenu] = useState(null);
    return (
        <div className="box">
            <ul className="menu">
            <div className ="titleText">魔物種類</div>
        <li>
        <a href="# " onClick={openMenuFactory(1, setSelectedMenu)}>小型種</a>
        {
          subMenuDisplayFactory(1, selectedMenu, () => (
            <ul className="menu">
              <li >
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">草食龍</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">???</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

              <li>
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">背甲龍</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">???</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

              <li>
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">波波</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">???</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>
            </ul>
          ))
        }
      </li>

      <li>
      <a href="# " onClick={openMenuFactory(2, setSelectedMenu)}>鳥龍種</a>
        {
          subMenuDisplayFactory(2, selectedMenu, () => (
            <ul className="menu">
              <li >
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">迅猛龍王</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">1.夏洛克島 2.艾卡拿大陸</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">1.跳躍 2.探索寶物</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">龍王連擊</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

              <li>
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">騷鳥</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">1.夏洛克島 2.艾卡拿大陸</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">1.巢穴探索</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">爆蛋</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

              <li>
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">毒妖鳥</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">1.夏洛克島 2.艾卡拿大陸</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">1.巢穴探索</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">毒液游擊</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

              <li>
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">怪鳥</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">???</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

              <li>
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">狗龍王</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">???</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

              <li>
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">彩鳥</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">???</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

              <li>
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">青怪鳥</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">???</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

              <li>                
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">黑狼鳥</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">???</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

              <li>                
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">眠狗龍王</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">???</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

              <li>                
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">毒怪鳥</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">???</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

              <li>                
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">紫毒鳥</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">???</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

              <li>                
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">毒猛龍王</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">???</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

              <li>                
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">痺狗龍王</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">???</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

              <li>
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">紅彩鳥</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">???</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

            </ul>
          ))
        }
      </li>

      <li>
        <a href="# " onClick={openMenuFactory(3, setSelectedMenu)}>獸龍種</a>
        {
          subMenuDisplayFactory(3, selectedMenu, () => (
            <ul className="menu">
              <li>
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">土砂龍</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">???</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

              <li>
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">冰土砂龍</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">???</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

              <li>
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">碎龍</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">猛爆碎拳</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

              <li>
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">蠻顎龍</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">蠻顎逸軌擊</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

              <li>
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">雷顎龍</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">???</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>
              
              <li>
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">飛雷龍</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">飛雷霆</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

              <li>
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">爆槌龍</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">???</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

              <li>
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">巨獸</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">寂靜雪崩</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

              <li>
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">斬龍</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">X耀星</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

              <li>
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">恐暴龍</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">???</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>
            </ul>
          ))
        }
      </li>
      <li>
        <a href="# " onClick={openMenuFactory(4, setSelectedMenu)}>飛龍種</a>
        {
          subMenuDisplayFactory(4, selectedMenu, () => (
            <ul className="menu">
              <li>                
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">火龍</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">烈焰舞刃</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

              <li>                
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">蒼火龍</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">???</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

              <li>                
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">雌火龍</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">烈焰舞刃</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

              <li>                
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">櫻火龍</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">烈焰舞刃</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

              <li>                
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">冰牙龍</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">襲地旋風</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

              <li>                
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">風牙龍</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">???</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

              <li>                
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">電龍</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">電龍脈衝</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

              <li>                
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">浮空龍</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">浮空噴射</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

              <li>                
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">奇怪龍</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">???</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

              <li>                
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">紅怪龍</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">???</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

              <li>                
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">風飄龍</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">冰尖領域</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

              <li>                
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">爆鱗龍</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">新星擊</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

              <li>                
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">一角龍</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">???</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

              <li>                
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">角龍</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">兇角旋風</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

              <li>                
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">黑角龍</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">兇角旋風</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

              <li>                
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">白一角龍</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">???</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

              <li>                
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">岩龍</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">???</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

              <li>                
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">桃岩龍</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">???</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

              <li>                
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">鎧龍</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">???</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

              <li>                
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">黑鎧龍</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">???</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

              <li>                
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">轟龍</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">轟地撞擊</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

              
              <li>                
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">黑轟龍</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">???</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

              <li>                
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">千刃龍</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">千刃流星</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

              <li>                
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">迅龍</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">暗旋斬</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

              <li>                
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">綠迅龍</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">???</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

            </ul>
          ))
        }
      </li>
      <li>
        <a href="# " onClick={openMenuFactory(5, setSelectedMenu)}>海龍種</a>
        {
          subMenuDisplayFactory(5, selectedMenu, () => (
            <ul className="menu">
              <li>                
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">水獸</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">???</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

              <li>                
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">海龍</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">王者雷災</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

              <li>                
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">白海龍</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">???</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

              <li>                
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">紫水獸</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">???</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

              <li>                
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">泡狐龍</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">月下泡影</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>
            </ul>
          ))
        }
      </li>
      <li>
        <a href="# " onClick={openMenuFactory(6, setSelectedMenu)}>魚龍種</a>
        {
          subMenuDisplayFactory(6, selectedMenu, () => (
            <ul className="menu">
              <li>                
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">砂龍王</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">???</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>          
            </ul>
          ))
        }
      </li>
      <li>
        <a href="# " onClick={openMenuFactory(7, setSelectedMenu)}>牙龍種</a>
        {
          subMenuDisplayFactory(7, selectedMenu, () => (
            <ul className="menu">
              <li>
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">加爾克</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">翔天疾馳</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

              <li>
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">雷狼龍</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">雷電風火輪</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

            </ul>
          ))
        }
      </li>

      <li>
        <a href="# " onClick={openMenuFactory(8, setSelectedMenu)}>牙獸種</a>
        {
          subMenuDisplayFactory(8, selectedMenu, () => (
            <ul className="menu">
              <li>
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">野豬王</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">???</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

              <li>
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">青熊獸</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">???</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

              <li>
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">桃毛獸王</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">???</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

              <li>
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">綠桃毛獸王</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">???</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

              <li>
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">奇猿狐</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">???</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

             <li>
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">白兔獸</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">???</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

              <li>
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">白猿狐</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">???</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

              <li>
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">金獅子</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">巨禍隕星</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

            </ul>
          ))
        }
      </li>

      <li>
        <a href="# " onClick={openMenuFactory(9, setSelectedMenu)}>兩生種</a>
        {
          subMenuDisplayFactory(9, selectedMenu, () => (
            <ul className="menu">
              <li>
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">冰鮫鯊</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">結冰噴流</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>
              <li>選單內容7-2</li>
              <li>選單內容7-3</li>
            </ul>
          ))
        }
      </li>

      <li>
        <a href="# " onClick={openMenuFactory(10, setSelectedMenu)}>鋏角種</a>
        {
          subMenuDisplayFactory(10, selectedMenu, () => (
            <ul className="menu">
              <li>
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">影蜘蛛</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">???</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

              <li>
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">骸蜘蛛</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">???</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>
            </ul>
          ))
        }
      </li>

      <li>
        <a href="# " onClick={openMenuFactory(11, setSelectedMenu)}>古龍種</a>
        {
          subMenuDisplayFactory(11, selectedMenu, () => (
            <ul className="menu">
              <li>
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">炎王龍</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">大災變</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

              <li>
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">鋼龍</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">太古風暴</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

              <li>
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">麒麟</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">幻影衝角</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

              
              <li>
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">滅盡龍</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">冰霜之災</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

              <li>
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">冰咒龍</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">冰霜之災</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>
            </ul>
          ))
        }
      </li>

      <li>
        <a href="# " onClick={openMenuFactory(12, setSelectedMenu)}>特殊個體</a>
        {
          subMenuDisplayFactory(12, selectedMenu, () => (
            <ul className="menu">

              <li>
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">紫毒姬-雌火龍</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">雙剃</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

              <li>
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">荒鉤爪-轟龍</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">轟龍爆燃</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

              <li>
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">鏖魔-角龍</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">長角風暴</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

              <li>
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">白疾風-迅龍</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">夢魘斬</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

              <li>
                <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">金雷公-雷狼龍</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">???</th></tr> 
                <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">???</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">萬物破壞擊</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
                <tr className = "monsterTable"><th className = "monsterbox">蛋</th><th className = "monsterbox">||圖片||</th></tr>
              </li>

            </ul>
          ))
        }
      </li>
      
    </ul>
        </div>
    );
  }

export default Monster;