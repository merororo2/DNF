import React, {useState} from "react";
import "../asset/css/charView.css";
import CharAvatar from "./CharAvatarData";
import CharStatus from "./CharStatusData";
import CharItem from "./CharItemData";
import CharCreature from "./CharCreatureData";
import CharFlag from "./CharFlagData";
import CharTalisman from "./CharTalismanData";
function CharViewInfo(props) {
  const charDatas = props.charData;

  const params = new URLSearchParams(window.location.search);
  let serverNames = params.get("serverName");
  let charName = params.get("chartersId");


  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };



  return (
    <div className="charcontainer">

      <div className="charinfo">
      <div className="py-3 d-flex justify-content-center"> {charDatas.jobGrowName}</div>
      <img
          src={`https://img-api.neople.co.kr/df/servers/${serverNames}/characters/${charName}?zoom=1`}
          alt=""
          className=""
        
        />
          <div className="mb-1"><strong><h2>{charDatas.characterName}</h2></strong></div>
        <div className="cinfo">
  <div className="mb-2 mx-2 "> 직업 : {charDatas.jobName}</div>
  <div className="mb-2 mx-2"> 길드 : {charDatas.guildName}</div>
  <div className="mb-2 mx-2">모험단 : {charDatas.adventureName}</div>
  <div className="mb-2 mx-2"> 레벨 : {charDatas.level}</div>

  </div>

      {/* <ul className="navMenu">
        <li id ="equip" onClick={test111}><a href="#">장비</a></li>
        <li id ="avatar"><a href="#">아바타</a></li>
        <li id ="crea"><a href="#">크리쳐</a></li>
      </ul> */}
</div>

      
      
    


 <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          장비
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          아바타
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          휘장
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}>
        
          탈리스만
        </button>
        <button
          className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(5)}
        >
          능력치
        </button>
        <button
          className={toggleState === 6 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(6)}
        >
          Tab 6
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2>장비</h2>
          <CharItem/>
        
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>아바타</h2>
            <CharAvatar />
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>크리쳐</h2>
            
      <CharCreature />
        </div>
        
        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
          <h2>휘장</h2>
            
      <CharFlag />
        </div>
        
        <div
          className={toggleState === 5 ? "content  active-content" : "content"}
        >
          <h2>탈리스만</h2>
            
           
      <CharTalisman />
        </div>
        
        <div
          className={toggleState === 6 ? "content  active-content" : "content"}
        >
          <h2>능력치</h2>
            
          <CharStatus />
        </div>
      </div>
    </div>
    
    

   


      </div>
  );
}

export default CharViewInfo;
