import data from '../../../data.json';

export const TinyType = () => {
  return (
    <ul className="menu">
      {
        data.tinyType.map(item => {
          return (
            <li >
              <tr className = "monsterTable"><th className = "monsterbox">魔物名稱</th><th className = "monsterbox">{ item.name }</th></tr> 
              <tr className = "monsterTable"><th className = "monsterbox">魔物地區</th><th className = "monsterbox">{ item.region }</th></tr> 
              <tr className = "monsterTable"><th className = "monsterbox">魔物特性</th><th className = "monsterbox">{ item.genere }</th></tr>
              <tr className = "monsterTable"><th className = "monsterbox">羈絆招式</th> <th className = "monsterbox">{ item.skill }</th><th className = "monsterbox">||功能||嵌入影片#</th></tr>
              <tr className = "monsterTable"><th className = "monsterbox">蛋</th>
                <th className = "monsterbox">
                  <img width="100" src={`/tinyType/${item.pic}`} alt={item.pic} />
                </th>
              </tr>
            </li>
          );
        })
      }
    </ul>
  )
};

export default TinyType;
