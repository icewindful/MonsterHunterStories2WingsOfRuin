import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import '../css/MHST2.css'

import Home from './Home';
import Monster from './Monster';
import Weapon from './Weapon';
import Equipment from './Equipment';
import Maps from './Maps';
import Item from './Item';
import Mission from './Mission';
import FastEgglist from './FastEggList';
import Gamesystem from './Gamesystem';


import MHS2Logo from '../images/Logo/header_titlelogo_ja.png';
/*
import story_character07 from '../images/character/story/index_character07.jpg'
*/
/*
import MHS2Headerbar from '../images/SceneMaterial/bg_header.jpg';
<img className="MHS2Headerbar" src={MHS2Headerbar} alt="MHS2Headerbar" />
*/

class App extends Component {
    render() {
      return (
      <Router>
          <div className = "indexEnvSetting">
            
            <header className = "headerVar" >Monster Hunter Stories2 Wings Of Ruin 攻略</header>
            <img className="MHS2Logo" src={MHS2Logo} alt="TitleLogo" />
            <nav className="navbarVarSetting">

            <table className = "tableEnvVar">
              <tbody>
                <tr className = "trEnvVar">
                  <th className = "thEnvVar"> <Link to={'/'} className="nav-link"> Home </Link> </th> 
                  <th className = "thEnvVar"> <Link to={'/Monster'} className="nav-link"> 隨行獸 </Link></th>
                  <th className = "thEnvVar"> <Link to={'/Weapon'} className="nav-link"> 武器 </Link> </th> 
                  <th className = "thEnvVar"> <Link to={'/Equipment'} className="nav-link"> 防具 </Link></th>
                  <th className = "thEnvVar"> <Link to={'/Item'} className="nav-link"> 道具 </Link> </th> 
                  <th className = "thEnvVar"> <Link to={'/Maps'} className="nav-link"> 地圖 </Link></th>
                  <th className = "thEnvVar"> <Link to={'/Mission'} className="nav-link"> 遊戲系統 </Link> </th> 
                  <th className = "thEnvVar"> <Link to={'/Gamesystem'} className="nav-link"> Monster </Link></th>
                  <th className = "thEnvVar"> <Link to={'/FastEgglist'} className="nav-link"> 速查蛋種圖 </Link></th>
                </tr>
              </tbody>
            </table>
            </nav>

            <section className="sectionVar">
              <ul className="navbar-nav mr-auto">
                <div className="listBarVar"><Link to={'/'} className="nav-link"> Home </Link></div>
                <div className="listBarVar" ><Link to={'/Monster'} className="nav-link"> 隨行獸 </Link></div>
                <div className="listBarVar"><Link to={'/Weapon'} className="nav-link"> 武器 </Link></div>
                <div className="listBarVar"><Link to={'/Equipment'} className="nav-link"> 防具 </Link></div>
                <div className="listBarVar"><Link to={'/Item'} className="nav-link"> 道具 </Link></div>
                <div className="listBarVar"><Link to={'/Maps'} className="nav-link"> 地圖 </Link></div>
                <div className="listBarVar"><Link to={'/Mission'} className="nav-link"> 任務 </Link></div>
                <div className="listBarVar"><Link to={'/Gamesystem'} className="nav-link"> 遊戲系統 </Link></div>
                <div className="listBarVar"><Link to={'/FastEgglist'} className="nav-link"> 速查蛋種圖 </Link></div>
              </ul>
            </section>

            <aside className="asideVar">
              <Switch>
                  <Route exact path='/' component={Home} />
                  <Route path='/Monster' component={Monster} />
                  <Route path='/Weapon' component={Weapon} />
                  <Route path='/Equipment' component={Equipment} />
                  <Route path='/Item' component={Item} />
                  <Route path='/Maps' component={Maps} />
                  <Route path='/Mission' component={Mission} />
                  <Route path='/Gamesystem' component={Gamesystem} />
                  <Route path='/FastEgglist' component={FastEgglist} />
              </Switch>
            </aside>
          </div>
        </Router>
      );
    }
  }

export default App;