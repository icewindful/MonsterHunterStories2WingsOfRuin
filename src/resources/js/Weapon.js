//import React, { Component, useState } from 'react';
import React, { useState } from 'react';

import '../css/Weapon.css'
import Weaponitem01 from '../images/Weapon/icon_weapon01.png';
import Weaponitem02 from '../images/Weapon/icon_weapon02.png';
import Weaponitem03 from '../images/Weapon/icon_weapon03.png';
import Weaponitem04 from '../images/Weapon/icon_weapon04.png';
import Weaponitem05 from '../images/Weapon/icon_weapon05.png';
import Weaponitem06 from '../images/Weapon/icon_weapon06.png';

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

const Weapon = () => {
    const [selectedMenu, setSelectedMenu] = useState(null);
    return (
        <div className="box">
            <ul className="menu">
        <li>
        <div className ="titleText">武器</div>
        <img className="WeaponIcon" src={Weaponitem01} alt="Weapon01" />
        <a href="# " onClick={openMenuFactory(1, setSelectedMenu)}>大劍</a>
        {
          subMenuDisplayFactory(1, selectedMenu, () => (
            <ul className="menu">
              <li>
                <tr>武器名稱 
                  <th>鐵巨劍LV1</th>
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
        <img className="WeaponIcon" src={Weaponitem02} alt="Weapon02" />
        <a href="# " onClick={openMenuFactory(2, setSelectedMenu)}>槌子</a>
        {
          subMenuDisplayFactory(2, selectedMenu, () => (
            <ul className="menu">
              <li>
                <tr>武器名稱 
                  <th>鐵槌LV2</th>
                </tr>
                <tr>材料
                  <th>鐵礦石</th>
                </tr>
              </li>
              <li>選單內容2-2</li>
              <li>選單內容2-3</li>
            </ul>
          ))
        }
      </li>
      <li>
        <img className="WeaponIcon" src={Weaponitem03} alt="Weapon03" />
        <a href="# " onClick={openMenuFactory(3, setSelectedMenu)}>單手劍</a>
        {
          subMenuDisplayFactory(3, selectedMenu, () => (
            <ul className="menu">
              <li>
                <tr>武器名稱 
                  <th>鐵劍LV1</th>
                </tr>
                <tr>材料
                  <th>鐵礦石</th>
                </tr>
              </li>
              <li>選單內容3-2</li>
              <li>選單內容3-3</li>
            </ul>
          ))
        }
      </li>
      <li>
        <img className="WeaponIcon" src={Weaponitem04} alt="Weapon04" />
        <a href="# " onClick={openMenuFactory(4, setSelectedMenu)}>笛子</a>
        {
          subMenuDisplayFactory(4, selectedMenu, () => (
            <ul className="menu">
              <li>
                <tr>武器名稱 
                  <th>鐵笛LV1</th>
                </tr>
                <tr>材料
                  <th>鐵礦石</th>
                </tr>
              </li>
              <li>選單內容4-2</li>
              <li>選單內容4-3</li>
            </ul>
          ))
        }
      </li>
      <img className="WeaponIcon" src={Weaponitem05} alt="Weapon05" />
      <li>
        <a href="# " onClick={openMenuFactory(5, setSelectedMenu)}>弓箭</a>
        {
          subMenuDisplayFactory(5, selectedMenu, () => (
            <ul className="menu">
              <li>
                <tr>武器名稱 
                  <th>鐵弓LV1</th>
                </tr>
                <tr>材料
                  <th>鐵礦石</th>
                </tr>
              </li>
              <li>選單內容5-2</li>
              <li>選單內容5-3</li>
            </ul>
          ))
        }
      </li>
      <img className="WeaponIcon" src={Weaponitem06} alt="Weapon06" />
      <li>
        <a href="# " onClick={openMenuFactory(6, setSelectedMenu)}>銃槍</a>
        {
          subMenuDisplayFactory(6, selectedMenu, () => (
            <ul className="menu">
              <li>
                <tr>武器名稱 
                  <th>鐵銃槍LV1</th>
                </tr>
                <tr>材料
                  <th>鐵礦石</th>
                </tr>
              </li>
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

export default Weapon;
