/*
import React, { Component } from 'react';

class Item extends Component {
  render() {
    return (
        <div>
          <h2>Item</h2>
        </div>
    );
  }
}

export default Item;
*/
//import React, { Component, useState } from 'react';
import React, { useState } from 'react';

import '../css/Maps.css'
/*
import Weaponitem01 from '../images/Weapon/icon_weapon01.png';
        <img className="WeaponIcon" src={Weaponitem01} alt="Weapon01" />
import Weaponitem02 from '../images/Weapon/icon_weapon02.png';
        <img className="WeaponIcon" src={Weaponitem02} alt="Weapon02" />
import Weaponitem03 from '../images/Weapon/icon_weapon03.png';
        <img className="WeaponIcon" src={Weaponitem03} alt="Weapon03" />
import Weaponitem04 from '../images/Weapon/icon_weapon04.png';
        <img className="WeaponIcon" src={Weaponitem04} alt="Weapon04" />
import Weaponitem05 from '../images/Weapon/icon_weapon05.png';
        <img className="WeaponIcon" src={Weaponitem05} alt="Weapon05" />
import Weaponitem06 from '../images/Weapon/icon_weapon06.png';
      <img className="WeaponIcon" src={Weaponitem06} alt="Weapon06" />
*/

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

const Maps = () => {
    const [selectedMenu, setSelectedMenu] = useState(null);
    return (
        <div className="box">
            <ul className="menu">
        <li>
        <div className ="titleText">原野 (Feild)</div>
        <a href="# " onClick={openMenuFactory(1, setSelectedMenu)}>夏口洛島</a>
        {
          subMenuDisplayFactory(1, selectedMenu, () => (
            <ul className="menu">

              <li>聳立著神聖高山的盛夏小島。
                <p>溫馴的魔物於草原上棲息，過著平靜安穩的生活。</p>
              </li>
              <li>
                <tr>武器名稱 
                  <th>鐵劍</th>
                </tr>
                <tr>材料
                  <th>鐵礦石</th>
                </tr>
              </li>
            </ul>
          ))
        }
      </li>
      <li>
        <a href="# " onClick={openMenuFactory(2, setSelectedMenu)}>艾卡拿大陸</a>
        {
          subMenuDisplayFactory(2, selectedMenu, () => (
            <ul className="menu">
              <li>廣大高原上林立著岩石的大陸。
                <p>有很多未曾改變的遠古森林。</p>
              </li>
            </ul>
          ))
        }
      </li>
      <li>
        <a href="# " onClick={openMenuFactory(3, setSelectedMenu)}>拉穆努</a>
        {
          subMenuDisplayFactory(3, selectedMenu, () => (
            <ul className="menu">
              <li>沙塵暴肆虐、荒蕪而廣闊的沙漠。
                <p>殘留著一些過往的遺跡。</p>
              </li>
            </ul>
          ))
        }
      </li>
      <li>
        <a href="# " onClick={openMenuFactory(4, setSelectedMenu)}>拉穆努古塔</a>
        {
          subMenuDisplayFactory(4, selectedMenu, () => (
            <ul className="menu">
              <li>靜靜地佇立在拉穆努沙漠一角的廢墟。
                <p>杳無人煙，不知何時成了魔物的居處。</p>
              </li>
            </ul>
          ))
        }
      </li>
      <li>
        <a href="# " onClick={openMenuFactory(5, setSelectedMenu)}>珀茉蕾花園</a>
        {
          subMenuDisplayFactory(5, selectedMenu, () => (
            <ul className="menu">
              <li>滿佈美麗花草樹木的花園。
                <p>穿過並排的櫻花樹後，有著通往火山的道路。</p>
              </li>
            </ul>
          ))
        }
      </li>
      <li>
        <a href="# " onClick={openMenuFactory(6, setSelectedMenu)}>貝怒戈</a>
        {
          subMenuDisplayFactory(6, selectedMenu, () => (
            <ul className="menu">
              <li>越過火山道便能抵達此火山山腳。
                <p>有著因熔岩和化學現象而產生的群晶洞穴。</p>
              </li>
            </ul>
          ))
        }
      </li>
      <div className ="titleText">據點 stronghold </div>
      <li>
        <a href="# " onClick={openMenuFactory(7, setSelectedMenu)}>馬夏那村</a>
        {
          subMenuDisplayFactory(7, selectedMenu, () => (
            <ul className="menu">
              <li>位於夏口洛島中心地帶的村莊。是主角和烈度的故鄉。 由長老格拉帶領，琪娜等騎手都在此生活。
              </li>
            </ul>
          ))
        }
      </li>

      <li>
        <a href="# " onClick={openMenuFactory(8, setSelectedMenu)}>汝途村</a>
        {
          subMenuDisplayFactory(8, selectedMenu, () => (
            <ul className="menu">
              <li>位於青蔥蓊鬱的森林深處的村莊，只有龍人在此生活。
                <p>是艾娜的故鄉，烈度亦曾經到訪。 村莊充滿綠意，不同的魔物共存於此。</p>
                <p>由長老矛羅帶領，阿爾瑪、紫白和其他龍人都在這條村莊生活。</p>
              </li>
            </ul>
          ))
        }
      </li>

      <li>
        <a href="# " onClick={openMenuFactory(9, setSelectedMenu)}>露希安</a>
        {
          subMenuDisplayFactory(9, selectedMenu, () => (
            <ul className="menu">
              <li>有著獵人和書記隊等眾多人口的巨大都市。
                <p>分為商業區、工業區和書記隊分部，分部部隊長由莉莉婭擔任。</p>
              </li>
            </ul>
          ))
        }
      </li>

      <li>
        <a href="# " onClick={openMenuFactory(10, setSelectedMenu)}>艾路貓的避難處</a>
        {
          subMenuDisplayFactory(10, selectedMenu, () => (
            <ul className="menu">
              <li>位於珀茉蕾花園一隅的不起眼村落，只有艾路居住。</li>
            </ul>
          ))
        }
      </li>

      <li>
        <a href="# " onClick={openMenuFactory(11, setSelectedMenu)}>庫安村</a>
        {
          subMenuDisplayFactory(11, selectedMenu, () => (
            <ul className="menu">
              <li>位於洛洛斯卡，受「黑色兇氣」侵襲後得以復興的村莊，亞尤利婭的故鄉。
                <p>由達奧村長帶領的騎手都在這條村莊生活。</p>
              </li>
            </ul>
          ))
        }
      </li>

      <li>
        <a href="# " onClick={openMenuFactory(12, setSelectedMenu)}>努亞特村</a>
        {
          subMenuDisplayFactory(12, selectedMenu, () => (
            <ul className="menu">
              <li>龍人居住的秘境，隱藏於山岳地帶中。
                <p>龍人們在此度過漫長的歲月，而未曾被任何人發現。</p>
              </li>
            </ul>
          ))
        }
      </li>

    </ul>
        </div>
    );
  }

export default Maps;
