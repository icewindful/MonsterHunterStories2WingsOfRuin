import React, { useState} from 'react'; 
// import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


import NormalMonsterInfo from './NormalMonsterInfo';
import AdvancedMonsterInfo from './AdvancedMonsterInfo';
/* import BossMonsterInfo from './BossMonsterInfo'; */
/* import '../../../resources/css/MonsterInfo/index.css' */
import '../../../resources/css/MonsterInfo/MonsterInfoindex.css'


const BackLeftTop = () =>{
  const dom = document.querySelector('#root > div > aside');
  if (dom) {
    dom.scrollTop = 0;
    dom.scrollLeft = 0;
  }
};


const MonsterInfo = () => {

  /* const [selectedMenu, setSelectedMenu] = useState(null); */
  /* const [selectedBTN, setSelectedBTN] = useState(null); */

  /* const [selectedBTN, setSelectedBTN] = useState(false); */
  const [selectedBTN, setSelectedBTN] = useState(0); 

  /* // unuse
   <th className={(selectedBTN===2) ? `selectButton selectButtonB` :  `selectButton` } onClick={() => { setSelectedBTN(2)  ; BackLeftTop();}} ><Link to={'/BossMonsterInfo'} > 頭目 </Link>  </th>
   
   <Route path='/BossMonsterInfo' component={BossMonsterInfo} />

   */ 
    
  return(

    <Router>
      <div >
        <tbody className="LevelSelectBTN">
          <th className={(selectedBTN===0) ? `selectButton selectButtonN` :  `selectButton` } onClick={() => { setSelectedBTN(0)  ; BackLeftTop();}} ><Link to={'/MonsterInfo'} > 普通 </Link>  </th>
          <th className={(selectedBTN===1) ? `selectButton selectButtonA` :  `selectButton` } onClick={() => { setSelectedBTN(1)  ; BackLeftTop();}} ><Link to={'/AdvancedMonsterInfo'} > 進階 </Link>  </th>
        </tbody>
        <aside> 
            <Switch>
              <Route exact path='/MonsterInfo' component={NormalMonsterInfo} />
              <Route path='/AdvancedMonsterInfo' component={AdvancedMonsterInfo} />
            </Switch>
        </aside>
      </div>
    </Router>
  );

}

export default MonsterInfo;
