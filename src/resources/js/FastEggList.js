import React, { Component } from 'react';
/* import EgglistCN from '../images/GameData/Egg/EGG_list_cn.jpg'; */ 
import EGG_list_Mandarin from '../images/GameData/Egg/EGG_list_Mandarin.jpg';


class Egglist extends Component {
  render() {
    return (
        <div>
          <div className ="titleText">速查蛋列表</div>
          <img className="EGG_list_Mandarin" src={EGG_list_Mandarin} alt="EGG_list_Mandarin" />
        </div>
    );
  }
}

export default Egglist;