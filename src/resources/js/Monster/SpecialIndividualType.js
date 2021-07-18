import data from '../../../data.json';
/* import styled from 'styled-components' */
import StrengthIcon from '../../IconStatus/00_Strength.png';
import SkillIcon from '../../IconStatus/01_Skill.png';
import SpeedIcon from '../../IconStatus/02_Speed.png';
import NormalIcon from '../../IconStatus/element/01_Normal.png';
import FireIcon from '../../IconStatus/element/02_Fire.png';
import WaterIcon from '../../IconStatus/element/03_Water.png';
import ThunderIcon from '../../IconStatus/element/04_Thunder.png';
import IceIcon from '../../IconStatus/element/05_Ice.png';
import DragonIcon from '../../IconStatus/element/06_Dragon.png';

import '../../../resources/css/SpecialIndividualType.css';

// const Span = styled.span`
//   display: inline-block;
//   width: 10px;
//   height: 10px;
//   margin-right: 2px;
//   background-color: black;


//   .level-block--filled {
//     background-color: blue;
//   }
// `;

const LevelCompoent = ({ level }) => {
  const output = []
  for(let i = 1; i < 11; i++) {
    output.push({
      filled: i <= level,
    });
  }
  return output.map(item => {
    return (<span className={`level-block ${item.filled ? `level-block--filled` : ''}`} />)
  })
}

 
const BattleIcon = ({ battlemode }) => {
  let mode;
  switch(battlemode){
    case 1: mode = StrengthIcon;
      break;
    case 2: mode = SkillIcon;
      break;
    case 3: mode = SpeedIcon;
      break;
    default: mode = StrengthIcon;
  }
  return <img width="25" src={mode} alt={"mode"}/> ;
}

export const SpecialIndividualType = () => {
  return (
    <ul className="menu">
      {
        data.specialIndividualType.map(item => {
          return (
            <li className="monsterInfoBox">
              <tr className = "monsterTable">
                <th className = "monsterbox01"><span className="monsterTitle">魔物名稱</span> <br></br>{ item.name }</th>
                <th className = "monsterbox02"><span className="monsterTitle">魔物地區</span> <br></br>{ item.region }</th>
                <th className = "monsterbox03"><span className="monsterTitle">魔物特性【{ item.genere }】</span> <br></br><BattleIcon battlemode={item['attackaction']}/></th>
                <th className = "monsterbox04"><span className="monsterTitle">成長型類型</span> <br></br>{ item['Growth type'] }</th>
              </tr> 

              <tr className = "monsterTable"></tr> 
              <tr className = "monsterTable">
                <th className = "monsterbox01"><span className="monsterTitle">羈絆招式</span> <br></br> { item.skill }{item.skillDescription}</th>
                <th className = "monsterbox02"><span className="monsterTitle">招式說明</span> <br></br> { item.skillNote}</th> 
                <th className = "monsterbox03"><span className="monsterTitle">招式影片</span> <br></br> <a href={item.skillhyperlink} target="_blank" rel="noreferrer">{ item.skill }<br></br>↑影片連結</a><br></br> </th>
                <th className = "monsterbox04"><span className="monsterTitle">歸巢特性</span> <br></br> {item['Habitat-Retreat']}</th>
              </tr>

              <tr className = "monsterTable">
                <th className = "monsterbox01" >
                  <img src={`/monsterImage/${item.pic02}`} alt={item.pic02} />
                  </th>
                <th className = "monsterbox02">
                  <img width="220" src={`/monsterImage/${item.pic00}`} alt={item.pic00} />
                </th>
                <th className = "monsterbox03">
                  <img width="220" src={`/monsterImage/${item.pic01}`} alt={item.pic01} />
                </th>
                <th className = "monsterbox04">
                  <span className="monsterTitle">固有基因</span><br></br>{item['Inherent-gene']}<br></br>
                  <span className="monsterTitle">騎乘技能</span><br></br>{item['rider-skill']}</th>
              </tr>

              <tr className = "monsterTable">
                {/* <th className = "monsterbox">||功能||嵌入影片#</th> */}
                <th className="monsterbox01" ></th>
                <th className="monsterbox02">
                  <tr><span className="monsterTitle">基礎能力 LV99</span></tr>
                  <tr>體力上限 [ {item['baseHP-Max']} ]</tr>
                  <tr><LevelCompoent level={item['baseHp-level']} /></tr>
                  <tr>速度 [ {item['baseSpeed-Max']} ]</tr>
                  <tr><LevelCompoent level={item['baseSpeed-level']} /></tr>
                  <tr>回復力 [ {item['baseHeal-max']} ]</tr>
                  <tr><LevelCompoent level={item['baseHeal-level']} /></tr>
                  <tr>會心率</tr>
                  <tr><LevelCompoent level={item['baseCrit-level']} /></tr>
                </th>
                <th className="monsterbox03">
                  <tr><span className="monsterTitle">【攻擊】LV99</span></tr>
                  <tr><img width="25" src={NormalIcon} alt={"Normal"}/> [ {item['attack-Normal-max']} ]</tr>
                  <tr><LevelCompoent level={item['attack-Normal']} /></tr>
                  <tr><img width="25" src={FireIcon} alt={"FireIcon"}/> [ {item['attack-Fire-max']} ]</tr>
                  <tr><LevelCompoent level={item['attack-Fire']} /></tr>
                  <tr><img width="25" src={WaterIcon} alt={"WaterIcon"}/> [ {item['attack-Water-max']} ]</tr>
                  <tr><LevelCompoent level={item['attack-Water']} /></tr>
                  <tr><img width="25" src={ThunderIcon} alt={"ThunderIcon"}/> [ {item['attack-Thunder-max']} ]</tr>
                  <tr><LevelCompoent level={item['attack-Thunder']} /></tr>
                  <tr><img width="25" src={IceIcon} alt={"IceIcon"}/> [ {item['attack-Freeze-max']} ]</tr>
                  <tr><LevelCompoent level={item['attack-Freeze']} /></tr>
                  <tr><img width="25" src={DragonIcon} alt={"DragonIcon"}/>[ {item['attack-Dragon-max']} ]</tr>
                  <tr><LevelCompoent level={item['attack-Dragon']} /></tr>
                </th>
                <th className="monsterbox04">
                  <tr><span className="monsterTitle">【防禦】LV99</span></tr>
                  <tr><img width="25" src={NormalIcon} alt={"Normal"}/> [ {item['defense-Normal-max']} ]</tr>
                  <tr><LevelCompoent level={item['defense-Normal']}/></tr>
                  <tr><img width="25" src={FireIcon} alt={"FireIcon"}/> [ {item['defense-Fire-max']} ]</tr>
                  <tr><LevelCompoent level={item['defense-Fire']} /></tr>
                  <tr><img width="25" src={WaterIcon} alt={"WaterIcon"}/> [ {item['defense-Water-max']} ]</tr>
                  <tr><LevelCompoent level={item['defense-Water']} /></tr>
                  <tr><img width="25" src={ThunderIcon} alt={"ThunderIcon"}/> [ {item['defense-Thunder-max']} ]</tr>
                  <tr><LevelCompoent level={item['defense-Thunder']} /></tr>
                  <tr><img width="25" src={IceIcon} alt={"IceIcon"}/> [ {item['defense-Freeze-max']} ]</tr>
                  <tr><LevelCompoent level={item['defense-Freeze']} /></tr>
                  <tr><img width="25" src={DragonIcon} alt={"DragonIcon"}/> [ {item['defense-Dragon-max']} ]</tr>
                  <tr><LevelCompoent level={item['defense-Dragon']} /></tr>
                </th>
              </tr>
    
            </li>
          );
        })
      }
    </ul>
  )
};

export default SpecialIndividualType;
