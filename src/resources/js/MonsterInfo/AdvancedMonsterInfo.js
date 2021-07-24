/* import data from '../../../data.json'; */
import dataN from '../../../datMonsterInfoAdvanceInfo.json';
import '../../../resources/css/MonsterInfo/NormalMonsterInfo.css'

//actackModeIcon
import StrengthIcon from '../../IconStatus/00_Strength.png';
import SkillIcon from '../../IconStatus/01_Skill.png';
import SpeedIcon from '../../IconStatus/02_Speed.png';

//elementIcon
import NormalIcon from '../../IconStatus/element/01_Normal.png';
import FireIcon from '../../IconStatus/element/02_Fire.png';
import WaterIcon from '../../IconStatus/element/03_Water.png';
import ThunderIcon from '../../IconStatus/element/04_Thunder.png';
import IceIcon from '../../IconStatus/element/05_Ice.png';
import DragonIcon from '../../IconStatus/element/06_Dragon.png';

//weaknessIcon
import Slash00 from '../../IconStatus/weakness/Slash00.png';
import Slash01 from '../../IconStatus/weakness/Slash01.png';
import Blunt00 from '../../IconStatus/weakness/Blunt00.png';
import Blunt01 from '../../IconStatus/weakness/Blunt01.png';
import Pierce00 from '../../IconStatus/weakness/pierce00.png';
import Pierce01 from '../../IconStatus/weakness/pierce01.png';

/*
const MosterPart = (arg1) => {
  const { Partcount, item } = arg1;
 */
/*
const MosterPart = ({ Partcount, item }) => {
  if(Partcount === 0){
      return (
              <tr>
                <th><Slash status={1}/>{item.mode}Part01</th><th><src/>斬</th><th><src/>刺</th><th><src/>打</th>
              </tr>
            );
  }else if(Partcount === 1){
      return (<tr><th><src/>Part02</th><th><src/>斬</th><th><src/>刺</th><th><src/>打</th></tr>);
  }else if(Partcount === 999){
      return null;
  }
  return null;
};
*/

const MosterPart = ({Partcount, Slash, Blunt, Pierce}) => {

  switch (Partcount) {
    case 999:
      return null;
    case 0:
      return(
        <tr className="MonsterInfoBox">
          <th className="MonsterInfoBoxPartWeakness"><PartLoadIcon part={Partcount}/></th>
          <th className="MonsterInfoBoxPartWeakness"><WeaknessSlashLoadIcon status={Slash}/></th>
          <th className="MonsterInfoBoxPartWeakness"><WeaknessBluntLoadIcon status={Blunt}/></th>
          <th className="MonsterInfoBoxPartWeakness"><WeaknessPierceLoadIcon status={Pierce}/></th>
        </tr>
      )

    case 1:
      return(
        <tr className="MonsterInfoBox">
          <th className="MonsterInfoBoxPartWeakness"><PartLoadIcon part={Partcount}/></th>
          <th className="MonsterInfoBoxPartWeakness"><WeaknessSlashLoadIcon status={Slash}/></th>
          <th className="MonsterInfoBoxPartWeakness"><WeaknessBluntLoadIcon status={Blunt}/></th>
          <th className="MonsterInfoBoxPartWeakness"><WeaknessPierceLoadIcon status={Pierce}/></th>
        </tr>
      )

    case 2:
      return(
        <tr className="MonsterInfoBox">
          <th className="MonsterInfoBoxPartWeakness"><PartLoadIcon part={Partcount}/></th>
          <th className="MonsterInfoBoxPartWeakness"><WeaknessSlashLoadIcon status={Slash}/></th>
          <th className="MonsterInfoBoxPartWeakness"><WeaknessBluntLoadIcon status={Blunt}/></th>
          <th className="MonsterInfoBoxPartWeakness"><WeaknessPierceLoadIcon status={Pierce}/></th>
        </tr>
      )

    case 3:
      return(
        <tr className="MonsterInfoBox">
          <th className="MonsterInfoBoxPartWeakness"><PartLoadIcon part={Partcount}/></th>
          <th className="MonsterInfoBoxPartWeakness"><WeaknessSlashLoadIcon status={Slash}/></th>
          <th className="MonsterInfoBoxPartWeakness"><WeaknessBluntLoadIcon status={Blunt}/></th>
          <th className="MonsterInfoBoxPartWeakness"><WeaknessPierceLoadIcon status={Pierce}/></th>
        </tr>
    ) 
      
    case 4:
      return(
        <tr className="MonsterInfoBox">
          <th className="MonsterInfoBoxPartWeakness"><PartLoadIcon part={Partcount}/></th>
          <th className="MonsterInfoBoxPartWeakness"><WeaknessSlashLoadIcon status={Slash}/></th>
          <th className="MonsterInfoBoxPartWeakness"><WeaknessBluntLoadIcon status={Blunt}/></th>
          <th className="MonsterInfoBoxPartWeakness"><WeaknessPierceLoadIcon status={Pierce}/></th>
        </tr>
      )

    case 5:
      return(
        <tr className="MonsterInfoBox">
          <th className="MonsterInfoBoxPartWeakness"><PartLoadIcon part={Partcount}/></th>
          <th className="MonsterInfoBoxPartWeakness"><WeaknessSlashLoadIcon status={Slash}/></th>
          <th className="MonsterInfoBoxPartWeakness"><WeaknessBluntLoadIcon status={Blunt}/></th>
          <th className="MonsterInfoBoxPartWeakness"><WeaknessPierceLoadIcon status={Pierce}/></th>
        </tr>
      )

    case 6:
      return(
        <tr className="MonsterInfoBox">
          <th className="MonsterInfoBoxPartWeakness"><PartLoadIcon part={Partcount}/></th>
          <th className="MonsterInfoBoxPartWeakness"><WeaknessSlashLoadIcon status={Slash}/></th>
          <th className="MonsterInfoBoxPartWeakness"><WeaknessBluntLoadIcon status={Blunt}/></th>
          <th className="MonsterInfoBoxPartWeakness"><WeaknessPierceLoadIcon status={Pierce}/></th>
        </tr>
      )
      
    case 7:
      return(
        <tr className="MonsterInfoBox">
          <th className="MonsterInfoBoxPartWeakness"><PartLoadIcon part={Partcount}/></th>
          <th className="MonsterInfoBoxPartWeakness"><WeaknessSlashLoadIcon status={Slash}/></th>
          <th className="MonsterInfoBoxPartWeakness"><WeaknessBluntLoadIcon status={Blunt}/></th>
          <th className="MonsterInfoBoxPartWeakness"><WeaknessPierceLoadIcon status={Pierce}/></th>
        </tr>
      )

    case 8:
      return(
        <tr className="MonsterInfoBox">
          <th className="MonsterInfoBoxPartWeakness"><PartLoadIcon part={Partcount}/></th>
          <th className="MonsterInfoBoxPartWeakness"><WeaknessSlashLoadIcon status={Slash}/></th>
          <th className="MonsterInfoBoxPartWeakness"><WeaknessBluntLoadIcon status={Blunt}/></th>
          <th className="MonsterInfoBoxPartWeakness"><WeaknessPierceLoadIcon status={Pierce}/></th>
        </tr>
      )

    case 20:
      return(
        <tr className="MonsterInfoBox">
          <th className="MonsterInfoBoxPartWeakness"><PartLoadIcon part={Partcount}/></th>
          <th className="MonsterInfoBoxPartWeakness"><WeaknessSlashLoadIcon status={Slash}/></th>
          <th className="MonsterInfoBoxPartWeakness"><WeaknessBluntLoadIcon status={Blunt}/></th>
          <th className="MonsterInfoBoxPartWeakness"><WeaknessPierceLoadIcon status={Pierce}/></th>
        </tr>
      )

    case 21:
      return(
        <tr className="MonsterInfoBox">
          <th className="MonsterInfoBoxPartWeakness"><PartLoadIcon part={Partcount}/></th>
          <th className="MonsterInfoBoxPartWeakness"><WeaknessSlashLoadIcon status={Slash}/></th>
          <th className="MonsterInfoBoxPartWeakness"><WeaknessBluntLoadIcon status={Blunt}/></th>
          <th className="MonsterInfoBoxPartWeakness"><WeaknessPierceLoadIcon status={Pierce}/></th>
        </tr>
      )

    case 22:
      return(
        <tr className="MonsterInfoBox">
          <th className="MonsterInfoBoxPartWeakness"><PartLoadIcon part={Partcount}/></th>
          <th className="MonsterInfoBoxPartWeakness"><WeaknessSlashLoadIcon status={Slash}/></th>
          <th className="MonsterInfoBoxPartWeakness"><WeaknessBluntLoadIcon status={Blunt}/></th>
          <th className="MonsterInfoBoxPartWeakness"><WeaknessPierceLoadIcon status={Pierce}/></th>
        </tr>
      )

    case 23:
      return(
        <tr className="MonsterInfoBox">
          <th className="MonsterInfoBoxPartWeakness"><PartLoadIcon part={Partcount}/></th>
          <th className="MonsterInfoBoxPartWeakness"><WeaknessSlashLoadIcon status={Slash}/></th>
          <th className="MonsterInfoBoxPartWeakness"><WeaknessBluntLoadIcon status={Blunt}/></th>
          <th className="MonsterInfoBoxPartWeakness"><WeaknessPierceLoadIcon status={Pierce}/></th>
        </tr>
      )

    default:
      return null;
  };
  

}

const PartLoadIcon = ({part}) =>{
    switch (part) {
      case 0:
          return(<img width="30px" src={`/monsterPart/Part00.png`} alt="Part00"/>) 
      case 1:
          return(<div className="PartBox"><img width="30px" src={`/monsterPart/Part01.png`} alt="Part01"/></div>) 
      case 2:
          return(<div className="PartBox"><img width="30px" src={`/monsterPart/Part02.png`} alt="Part02"/></div>) 
      case 3:
          return(<div className="PartBox"><img width="30px" src={`/monsterPart/Part03.png`} alt="Part03"/></div>) 
      case 4:
          return(<div className="PartBox"><img width="30px" src={`/monsterPart/Part04.png`} alt="Part04"/></div>) 
      case 5:
          return(<div className="PartBox"><img width="30px" src={`/monsterPart/Part05.png`} alt="Part05"/></div>) 
      case 6:
         return(<div className="PartBox"><img width="30px" src={`/monsterPart/Part06.png`} alt="Part06"/></div>) 
      case 7:
         return(<div className="PartBox"><img width="30px" src={`/monsterPart/Part07.png`} alt="Part07"/></div>) 
      case 8:
         return(<div className="PartBox"><img width="30px" src={`/monsterPart/Part08.png`} alt="Part08"/></div>) 
      case 20:
         return(<div className="PartBox"><img width="30px" src={`/monsterPart/Part20.png`} alt="Part20"/></div>) 
      case 21:
         return(<div className="PartBox"><img width="30px" src={`/monsterPart/Part21.png`} alt="Part21"/></div>) 
      case 22:
         return(<div className="PartBox"><img width="30px" src={`/monsterPart/Part22.png`} alt="Part22"/></div>) 
      case 23:
         return(<div className="PartBox"><img width="30px" src={`/monsterPart/Part23.png`} alt="Part23"/></div>) 

      default:
        return null;
    }
}


const WeaknessSlashLoadIcon = ({status}) => {
  switch (status) {
    case 0:
      return(<img width="30px" src={Slash00} alt="Slash00"/>)
    case 1:
      return(<img width="30px" src={Slash01} alt="Slash01"/>)
    default:
      return null;
  }
}

const WeaknessBluntLoadIcon = ({status}) => {
  switch (status) {
    case 0:      
      return(<img width="30px" src={Blunt00} alt="Blunt00"/>)
    case 1:  
      return(<img width="30px" src={Blunt01} alt="Blunt01"/>)
    default:
      return null;
  }
}

const WeaknessPierceLoadIcon = ({status}) => {
  switch (status) {
    case 0:
      return(<img width="30px" src={Pierce00} alt="Pierce00"/>)
    case 1:
      return(<img width="30px" src={Pierce01} alt="Pierce01"/>)
    default:
      return null;
  }
}

const ElementLoadIcon = ({element}) => {
  switch (element) {
    case 1:
      return(<img width="25px" src={NormalIcon} alt="NormalIcon"/>)
    case 2:
      return(<img width="25px" src={FireIcon} alt="FireIcon"/>)
    case 3:      
      return(<img width="25px" src={WaterIcon} alt="WaterIcon"/>)
    case 4:  
      return(<img width="25px" src={ThunderIcon} alt="ThunderIcon"/>)
    case 5:
      return(<img width="25px" src={IceIcon} alt="IceIcon"/>)
    case 6:
      return(<img width="25px" src={DragonIcon} alt="DragonIcon"/>)
    default:
      return null;
  }
}

const MonsterActackMode = ({mode}) =>{

  switch (mode) {
    case 1:
      return (<img width="30px" src={StrengthIcon} alt="StrengthIcon"/>);
    case 2:  
      return (<img width="30px" src={SkillIcon} alt="SkillIcon"/>);
    case 3:  
      return (<img width="30px" src={SpeedIcon} alt="SpeedIcon"/>);
  
    default:
      return null;
  }

}

//<th><Slash status={1}/>{item.mode}Part0{Partcount}</th><th><src/>斬</th><th><src/>刺</th><th><src/>打</th>
/*
const Slash = ({status}) => {
  if(status === 0){
    return <img width="30px" src={StrengthIcon}/>;
  }else{
    return null
  }
};
*/


export const AdvancedMonsterInfo = () => {

  return(
    <div className="InfoText">
    <tbody>
      {dataN.advance.map(_item => {
          
          return (
          <div>    
            <tr >
              <th className="MonsterInfoBox">No.{_item.MN}<br></br><img width="80" src={`/MonsterIcon/${_item.MN}.png`} alt={_item.MN} /></th>
              <th className="MonsterInfoBox">【魔物名稱】<br></br><text className="MonsterInfoBoxName">{_item.Name}</text></th>
              <th className="MonsterInfoBox">【歸巢條件】<br></br>{_item.GoHomeMethod}</th>
              <th className="MonsterInfoBox">【出現地點】<br></br>{_item.location}</th>
            </tr>
            <tr>
              <th className="MonsterInfoBox">【血量屬性】<br></br><text className="MonsterStatus">{_item.HP}</text></th>
              <th className="MonsterInfoBox">【攻擊屬性】<br></br><ElementLoadIcon element={_item.AttackIcon} /> <text className="MonsterStatus">{_item.Attack}</text></th>
              <th className="MonsterInfoBox">【防禦屬性】<br></br><ElementLoadIcon element={_item.DefenseIcon} /> <text className="MonsterStatus">{_item.Defense}</text></th>
              <th className="MonsterInfoBox">【弱點屬性】<br></br><ElementLoadIcon element={_item.WeaknessIcon} /> <text className="MonsterStatus">{_item.Weakness}</text></th>
            </tr>
            <tr>
              <th className="MonsterInfoBox">【模式01】<br></br><text className="MonsterInfoBoxName">{_item.ModeNote01}</text></th>
              <th className="MonsterInfoBox">【模式02】<br></br><text className="MonsterInfoBoxName">{_item.ModeNote02}</text></th> 
              <th className="MonsterInfoBox">【模式03】<br></br><text className="MonsterInfoBoxName">{_item.ModeNote03}</text></th> 
              <th className="MonsterInfoBox">【模式04】<br></br><text className="MonsterInfoBoxName">{_item.ModeNote04}</text></th> 
            </tr>
            <tr>
              <th className="MonsterInfoBox"><MonsterActackMode mode={_item.Mode01} /></th> 
              <th className="MonsterInfoBox"><MonsterActackMode mode={_item.Mode02} /></th> 
              <th className="MonsterInfoBox"><MonsterActackMode mode={_item.Mode03} /></th> 
              <th className="MonsterInfoBox"><MonsterActackMode mode={_item.Mode04} /></th> 
            </tr>
            <MosterPart Partcount={_item.PI01} Slash={_item.Part01S} Blunt={_item.Part01B} Pierce={_item.Part01P} />
            <MosterPart Partcount={_item.PI02} Slash={_item.Part02S} Blunt={_item.Part02B} Pierce={_item.Part02P}/>
            <MosterPart Partcount={_item.PI03} Slash={_item.Part03S} Blunt={_item.Part03B} Pierce={_item.Part03P}/>
            <MosterPart Partcount={_item.PI04} Slash={_item.Part04S} Blunt={_item.Part04B} Pierce={_item.Part04P}/>
            <MosterPart Partcount={_item.PI05} Slash={_item.Part05S} Blunt={_item.Part05B} Pierce={_item.Part05P}/>
            <MosterPart Partcount={_item.PI06} Slash={_item.Part06S} Blunt={_item.Part06B} Pierce={_item.Part06P}/>
          </div>

          );
        })
      }

      
    </tbody>

    </div>
  )

};
export default AdvancedMonsterInfo;
