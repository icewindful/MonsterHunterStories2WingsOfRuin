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
import MonsterInfo from './MonsterInfo'

/* import MHS2Logo from '../images/Logo/header_titlelogo_ja.png'; */
/*
import story_character07 from '../images/character/story/index_character07.jpg'
*/
/*
import MHS2Headerbar from '../images/SceneMaterial/bg_header.jpg';
<img className="MHS2Headerbar" src={MHS2Headerbar} alt="MHS2Headerbar" />
*/

/*
            <nav className="navbarVarSetting">

              <table className = "tableEnvVar">
                <tbody className = "tbodyEnvVar">
                  <tr className = "trEnvVar">
                    <th className = "thEnvVar"> <Link to={'/'} className="nav-link"> 更新內容 </Link> </th> 
                    <th className = "thEnvVar"> <Link to={'/MonsterInfo'} className="nav-link"> 魔物資訊(弱點) </Link></th>
                    <th className = "thEnvVar"> <Link to={'/Monster'} className="nav-link"> 隨行獸 </Link></th>
                    <th className = "thEnvVar"> <Link to={'/FastEgglist'} className="nav-link"> 速查蛋種圖 </Link></th>
                    <th className = "thEnvVarhide"> <Link to={'/Gamesystem'} className="nav-link"> 遊戲系統 </Link></th>
                    <th className = "thEnvVarhide"> <Link to={'/Mission'} className="nav-link"> 任務 </Link> </th> 
                    <th className = "thEnvVarhide"> <Link to={'/Weapon'} className="nav-link"> 武器 </Link> </th> 
                    <th className = "thEnvVarhide"> <Link to={'/Equipment'} className="nav-link"> 防具 </Link></th>
                    <th className = "thEnvVarhide"> <Link to={'/Item'} className="nav-link"> 道具 </Link> </th> 
                    <th className = "thEnvVarhide"> <Link to={'/Maps'} className="nav-link"> 地圖 </Link></th>
                  </tr>
                </tbody>
              </table>
              
            </nav>
*/

/*
<img className="MHS2Logo" src={MHS2Logo} alt="TitleLogo" />

*/

const BackLeftTop = () =>{
  const dom = document.querySelector('#root > div > aside');
  if (dom) {
    dom.scrollTop = 0;
    dom.scrollLeft = 0;
  }
};

class App extends Component {
    render() {
      return (
      <Router>
          <div className = "indexEnvSetting">
            <div className="headerbox">
            <header className = "headerVar" >Monster Hunter Stories2</header>
            <header className = "headerBTNVar moblie">
              <tr className = "trEnvVar">
                <th className = "thEnvVar"> <Link to={'/'} className="nav-link" onClick={() => { BackLeftTop()}}> 更新內容 </Link> </th> 
                <th className = "thEnvVar"> <Link to={'/MonsterInfo'} className="nav-link" onClick={() => { BackLeftTop()}}> 魔物資訊 </Link></th>
                <th className = "thEnvVar"> <Link to={'/FastEgglist'} className="nav-link" onClick={() => { BackLeftTop()}}> 速查蛋種圖 </Link></th>
                <th className = "thEnvVar"> <Link to={'/Monster'} className="nav-link" onClick={() => { BackLeftTop()}}> 隨行獸 </Link></th>
              </tr>
            </header>
            </div>


            <aside className="asideVar">
              <Switch>
                  <Route exact path='/' component={Home} />
                  <Route path='/MonsterInfo' component={MonsterInfo} />
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

            <section className="sectionVar">
              <ul className="navbar-nav mr-auto">
              <iframe
                src="https://player.twitch.tv/?channel=icewindful&parent=localhost&autoplay=false"
                title="icewindful Channel"
                height="180"
                width="270"
                frameborder="1"
                scrolling="no"
                allowfullscreen="no"　className="icewindfulChannel">
              </iframe>
                <div className="listBarVar"><Link to={'/'} className="sectionnav-link"> 更新內容 </Link></div>
                <div className="listBarVar" ><Link to={'/MonsterInfo'} className="sectionnav-link"> 魔物資訊 </Link></div>
                <div className="listBarVar" ><Link to={'/Monster'} className="sectionnav-link"> 隨行獸 </Link></div>
                <div className="listBarVar"><Link to={'/FastEgglist'} className="sectionnav-link"> 速查蛋種圖 </Link></div>
                <div className="listBarVarhide"><Link to={'/Gamesystem'} className="sectionnav-link"> 遊戲系統 </Link></div>
                <div className="listBarVarhide"><Link to={'/Mission'} className="sectionnav-link"> 任務 </Link></div>
                <div className="listBarVarhide"><Link to={'/Weapon'} className="sectionnav-link"> 武器 </Link></div>
                <div className="listBarVarhide"><Link to={'/Equipment'} className="sectionnav-link"> 防具 </Link></div>
                <div className="listBarVarhide"><Link to={'/Item'} className="sectionnav-link"> 道具 </Link></div>
                <div className="listBarVarhide"><Link to={'/Maps'} className="sectionnav-link"> 地圖 </Link></div>
              </ul>
            </section>

          </div>
        </Router>
      );
    }
  }

export default App;