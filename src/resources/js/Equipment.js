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

const Equipment = () => {
    const [selectedMenu, setSelectedMenu] = useState(null);
    return (
        <div className="box">
            <ul className="menu">
        <li>
        <div className ="titleText">防具</div>
        <a href="# " onClick={openMenuFactory(1, setSelectedMenu)}>Rare1</a>
        {
          subMenuDisplayFactory(1, selectedMenu, () => (
            <ul className="menu">
              <li>
                <tr>武器名稱 
                  <th>鐵劍</th>
                </tr>
                <tr>材料
                  <th>鐵礦石</th>
                </tr>
              </li>
              <li>選單內容1-2</li>
              <li>選單內容1-3</li>
            </ul>
          ))
        }
      </li>
      <li>
        <a href="# " onClick={openMenuFactory(2, setSelectedMenu)}>Rare2</a>
        {
          subMenuDisplayFactory(2, selectedMenu, () => (
            <ul className="menu">
              <li>選單內容2-1</li>
              <li>選單內容2-2</li>
              <li>選單內容2-3</li>
            </ul>
          ))
        }
      </li>
      <li>
        <a href="# " onClick={openMenuFactory(3, setSelectedMenu)}>Rare3</a>
        {
          subMenuDisplayFactory(3, selectedMenu, () => (
            <ul className="menu">
              <li>選單內容3-1</li>
              <li>選單內容3-2</li>
              <li>選單內容3-3</li>
            </ul>
          ))
        }
      </li>
      <li>
        <a href="# " onClick={openMenuFactory(4, setSelectedMenu)}>Rare4</a>
        {
          subMenuDisplayFactory(4, selectedMenu, () => (
            <ul className="menu">
              <li>選單內容4-1</li>
              <li>選單內容4-2</li>
              <li>選單內容4-3</li>
            </ul>
          ))
        }
      </li>
      <li>
        <a href="# " onClick={openMenuFactory(5, setSelectedMenu)}>Rare5</a>
        {
          subMenuDisplayFactory(5, selectedMenu, () => (
            <ul className="menu">
              <li>選單內容5-1</li>
              <li>選單內容5-2</li>
              <li>選單內容5-3</li>
            </ul>
          ))
        }
      </li>
      <li>
        <a href="# " onClick={openMenuFactory(6, setSelectedMenu)}>Rare6</a>
        {
          subMenuDisplayFactory(6, selectedMenu, () => (
            <ul className="menu">
              <li>選單內容6-1</li>
              <li>選單內容6-2</li>
              <li>選單內容6-3</li>
            </ul>
          ))
        }
      </li>
    </ul>
        </div>
    );
  }

export default Equipment;
