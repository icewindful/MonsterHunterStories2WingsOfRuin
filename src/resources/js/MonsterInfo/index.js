import React, { useState} from 'react'; 
// import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


import NormalMonsterInfo from './NormalMonsterInfo';
import AdvancedMonsterInfo from './AdvancedMonsterInfo';
import BossMonsterInfo from './BossMonsterInfo';
import '../../../resources/css/MonsterInfo/index.css'

/*
const SelectButtonState = (Buttonstatus) => {
  return () => {

    /* const dom = document.getElementById() */
    /*
    if (Buttonstatus === 0 ) {
      document.getElementsByClassName("selectButtonN")[0].bgColor="skyblue";
      document.getElementsByClassName("selectButtonN")[1].bgColor="transparent";
      document.getElementsByClassName("selectButtonN")[2].bgColor="transparent";
    }else if ( Buttonstatus === 1 ){
      document.getElementsByClassName("selectButtonN")[0].bgColor="transparent";
      document.getElementsByClassName("selectButtonN")[1].bgColor="skyblue";
      document.getElementsByClassName("selectButtonN")[2].bgColor="transparent";
    }else if( Buttonstatus === 2 ){
      document.getElementsByClassName("selectButtonN")[0].bgColor="transparent";
      document.getElementsByClassName("selectButtonN")[1].bgColor="transparent";
      document.getElementsByClassName("selectButtonN")[2].bgColor="skyblue";
    }
    

    if (Buttonstatus === 0 ){

    }else if(Buttonstatus === 1 ){

    }else if(Buttonstatus === 2 ){

    }
    return null;
  };
}
*/

/*  <b></b>
          <th className="selectButtonN" onClick={SelectButtonState(0)} ><Link to={'/NormalMonsterInfo'} > 普通 </Link>  </th> 
    <b></b> 
*/

/*           
<th className="selectButtonN" onClick={SelectButtonState(1)} ><Link to={'/AdvancedMonsterInfo'} > 進階 </Link>  </th> <b></b>
<th className="selectButtonN" onClick={SelectButtonState(2)} ><Link to={'/BossMonsterInfo'} > 頭目 </Link>   </th> <b></b>          
 */
/*
<th className={selectedBTN ? `selectButtonN SelectN` :  `selectButtonN` } onClick={() => { SelectButtonState(0); setSelectedBTN(0) }} ><Link to={'/MonsterInfo'} > 普通 </Link>  </th>
<th className={selectedBTN ? `selectButtonN SelectA` :  `selectButtonN` } onClick={() => { SelectButtonState(1); setSelectedBTN(1) }} ><Link to={'/AdvancedMonsterInfo'} > 進階 </Link>  </th>
<th className={selectedBTN ? `selectButtonN SelectB` :  `selectButtonN` } onClick={() => { SelectButtonState(2); setSelectedBTN(2) }} ><Link to={'/BossMonsterInfo'} > 頭目 </Link>  </th>
*/

const MonsterInfo = () => {

  /* const [selectedMenu, setSelectedMenu] = useState(null); */
  /* const [selectedBTN, setSelectedBTN] = useState(null); */

  /* const [selectedBTN, setSelectedBTN] = useState(false); */
  const [selectedBTN, setSelectedBTN] = useState(0); 
    
  return(

    <Router>
      <div >
        <tbody className="LevelSelectBTN">
          <th className={(selectedBTN===0) ? `selectButton selectButtonN` :  `selectButton` } onClick={() => { setSelectedBTN(0) }} ><Link to={'/MonsterInfo'} > 普通 </Link>  </th>
          <th className={(selectedBTN===1) ? `selectButton selectButtonA` :  `selectButton` } onClick={() => { setSelectedBTN(1) }} ><Link to={'/AdvancedMonsterInfo'} > 進階 </Link>  </th>
          <th className={(selectedBTN===2) ? `selectButton selectButtonB` :  `selectButton` } onClick={() => { setSelectedBTN(2) }} ><Link to={'/BossMonsterInfo'} > 頭目 </Link>  </th>
        </tbody>
        <aside> 
            <Switch>
              <Route exact path='/MonsterInfo' component={NormalMonsterInfo} />
              <Route path='/AdvancedMonsterInfo' component={AdvancedMonsterInfo} />
              <Route path='/BossMonsterInfo' component={BossMonsterInfo} />
            </Switch>
        </aside>
      </div>
    </Router>
  );

}

export default MonsterInfo;
