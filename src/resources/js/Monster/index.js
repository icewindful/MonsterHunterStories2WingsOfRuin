//import React, { Component, useState } from 'react';
//import React, { useState, useRef } from 'react';
import React, { useState} from 'react';

import TinyType from './TinyType';
import BirdWyvernType from './BirdWyvernType';
import BruteWyvernType from './BruteWyvernType';
import FlyingWyvernType from './FlyingWyvernType'; 
import AmphibianType from './AmphibianType'; 
import LeviathanType from './LeviathanType'; 
import PiscineWyvernType from './PiscineWyvernType';
import FangedWyvernType from './FangedWyvernType';
import FangedBeastType from './FangedBeastType';
import TemnoceranType from './TemnoceranType';
import ElderDragonType from './ElderDragonType';
import SpecialIndividualType from './SpecialIndividualType';

/* import MonsterFollowType from 'MonsterFollowType'; */

/* import '../../css/Monster.css' */
import '../../../resources/css/Monster/Monsterindex.css';


const openMenuFactory = (menuId, setSelectedMenu) => {
  return () => {
    setSelectedMenu(prevState => {
      if (prevState === menuId) {
        return null;
      }
      return menuId;
    });
    
    const dom = document.querySelector('#root > div > aside');
    if (dom) {
      dom.scrollTop = 0;
    }
    
  };
}

const subMenuDisplayFactory = (menuId, selectedMenu, Component) => {
  // return menuId === selectedMenu ? <Component /> : null;
  return [menuId, 999].includes(selectedMenu) ? <Component /> : null;
}


/* { [JSON.stringify(selectedMenu), 2] } */  // commit //  onClick check log //

/* <a href="#" onClick={openMenuFactory(1, setSelectedMenu)}>鳥籠種</a> */ // commit // defalut Set //


const Monster = () => {
    // const onClick = (id) => {
    //   openMenuFactory(id, setSelectedMenu);
    //   // console.log(birdTypeRef);
    //   birdTypeRef.current.scrollIntoView()
    // }

    /*
            {
                [1,2,3,4].map(num => {
                  return [5,6,7,8].map(num2 => {
                    return (
                      <div>
                        <span>{ num2 }-{num}</span>
                      </div>
                    )
                  })
                })
              }
              {
                1
              }
              {
                [3,5,7]
              }
    */


    const [selectedMenu, setSelectedMenu] = useState(null);
    return (
        
        <div className="followbox">
  
            <a href="# " className = "OpenAllMenu" onClick={openMenuFactory(999, setSelectedMenu)}>展開全部</a>
            <ul className="menu">
            <div className ="titleListText">隨行寵種類</div>
        <li className="monsterTypeLine">
        <a href="# " onClick={openMenuFactory(1, setSelectedMenu)}>草食種</a>
        {
          subMenuDisplayFactory(1, selectedMenu, () => {
            return <TinyType />
          })          
        }
      </li>

      <li>
      <a href="# " onClick={openMenuFactory(2, setSelectedMenu)}>鳥龍種</a>
        {
          subMenuDisplayFactory(2, selectedMenu, () => (
            <BirdWyvernType />
          ))
        }
      </li>

      <li>
        <a href="# " onClick={openMenuFactory(3, setSelectedMenu)}>獸龍種</a>
        {
          subMenuDisplayFactory(3, selectedMenu, () => (
            <BruteWyvernType />
          ))
        }
      </li>
      <li>
        <a href="# " onClick={openMenuFactory(4, setSelectedMenu)}>飛龍種</a>
        {
          subMenuDisplayFactory(4, selectedMenu, () => (
            <FlyingWyvernType />
          ))
        }
      </li>
      <li>
        <a href="# " onClick={openMenuFactory(5, setSelectedMenu)}>海龍種</a>
        {
          subMenuDisplayFactory(5, selectedMenu, () => (
            <LeviathanType/>
          ))
        }
      </li>
      <li>
        <a href="# " onClick={openMenuFactory(6, setSelectedMenu)}>魚龍種</a>
        {
          subMenuDisplayFactory(6, selectedMenu, () => (
            <PiscineWyvernType/>
          ))
        }
      </li>
      <li>
        <a href="# " onClick={openMenuFactory(7, setSelectedMenu)}>牙龍種</a>
        {
          subMenuDisplayFactory(7, selectedMenu, () => (
            <FangedWyvernType/>
          ))
        }
      </li>

      <li>
        <a href="# " onClick={openMenuFactory(8, setSelectedMenu)}>牙獸種</a>
        {
          subMenuDisplayFactory(8, selectedMenu, () => (
            <FangedBeastType/>
          ))
        }
      </li>

      <li>
        <a href="# " onClick={openMenuFactory(9, setSelectedMenu)}>兩生種</a>
        {
          subMenuDisplayFactory(9, selectedMenu, () => (
            <AmphibianType />
          ))
        }
      </li>

      <li>
        <a href="# " onClick={openMenuFactory(10, setSelectedMenu)}>鋏角種</a>
        {
          subMenuDisplayFactory(10, selectedMenu, () => (
            <TemnoceranType/>
          ))
        }
      </li>

      <li>
        <a href="# " onClick={openMenuFactory(11, setSelectedMenu)}>古龍種</a>
        {
          subMenuDisplayFactory(11, selectedMenu, () => (
            <ElderDragonType/>
          ))
        }
      </li>

      <li>
        <a href="# " onClick={openMenuFactory(12, setSelectedMenu)}>特殊個體(二名)</a>
        {
          subMenuDisplayFactory(12, selectedMenu, () => (
            <SpecialIndividualType/>
          ))
        }
      </li>
      
    </ul>
        </div>
    );
  }

export default Monster;