import React from "react";
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


  function test111() {
 let fdf = document.getElementsByClassName('navMenu');
      
   console.log(fdf);
  }


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

      
      
    

    
    

      <CharStatus />
      {/* <CharAvatar /> */}
      {/* <CharCreature /> */}
      {/* <CharFlag /> */}
      {/* <CharTalisman /> */}
      </div>
  );
}

export default CharViewInfo;
